import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import emailjs from "@emailjs/browser";
import Contact from "../pages/Contact/Contact";

jest.mock("@emailjs/browser", () => ({
	__esModule: true,
	default: { send: jest.fn() },
}));

jest.mock("../pages/Contact/config/emailJsConfig", () => ({
	emailJsConfig: {
		serviceId: "test-service-id",
		templateId: "test-template-id",
		publicKey: "test-public-key",
	},
}));

const mockedSend = jest.mocked(emailjs.send);

describe("Contact", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it("renders the contact form", () => {
		render(<Contact />);

		expect(
			screen.getByRole("heading", { name: "Contact" }),
		).toBeInTheDocument();

		expect(
			screen.getByRole("textbox", { name: /full name/i }),
		).toBeInTheDocument();

		expect(
			screen.getByRole("textbox", { name: /email address/i }),
		).toBeInTheDocument();

		expect(
			screen.getByRole("textbox", { name: /message/i }),
		).toBeInTheDocument();
	});

	it("renders the submit button", () => {
		render(<Contact />);

		expect(
			screen.getByRole("button", { name: /send message/i }),
		).toBeInTheDocument();
	});

	it("shows validation errors when submitting an empty form", async () => {
		const user = userEvent.setup();

		render(<Contact />);

		await user.click(screen.getByRole("button", { name: /send message/i }));

		expect(screen.getByText("Name is required.")).toBeInTheDocument();

		expect(screen.getByText("Email is required.")).toBeInTheDocument();

		expect(screen.getByText("Message is required.")).toBeInTheDocument();

		expect(mockedSend).not.toHaveBeenCalled();
	});

	it("shows an error for an invalid email address", async () => {
		const user = userEvent.setup();

		render(<Contact />);

		await user.type(
			screen.getByRole("textbox", { name: /full name/i }),
			"Mayuresh",
		);

		await user.type(
			screen.getByRole("textbox", { name: /email address/i }),
			"invalid-email",
		);

		await user.type(screen.getByRole("textbox", { name: /message/i }), "Hello");

		await user.click(screen.getByRole("button", { name: /send message/i }));

		expect(
			screen.getByText("Enter a valid email address."),
		).toBeInTheDocument();

		expect(mockedSend).not.toHaveBeenCalled();
	});

	it("clears a field validation error when the user corrects the field", async () => {
		const user = userEvent.setup();

		render(<Contact />);

		await user.click(screen.getByRole("button", { name: /send message/i }));

		expect(screen.getByText("Name is required.")).toBeInTheDocument();

		const nameInput = screen.getByRole("textbox", { name: /full name/i });

		await user.type(nameInput, "Mayuresh");

		expect(screen.queryByText("Name is required.")).not.toBeInTheDocument();

		expect(nameInput).toHaveAttribute("aria-invalid", "false");
	});

	it("accepts valid form input", async () => {
		const user = userEvent.setup();

		render(<Contact />);

		const nameInput = screen.getByRole("textbox", { name: /full name/i });

		const emailInput = screen.getByRole("textbox", { name: /email address/i });

		const messageInput = screen.getByRole("textbox", { name: /message/i });

		await user.type(nameInput, "Mayuresh");
		await user.type(emailInput, "test@example.com");
		await user.type(messageInput, "Hello");

		expect(nameInput).toHaveValue("Mayuresh");
		expect(emailInput).toHaveValue("test@example.com");
		expect(messageInput).toHaveValue("Hello");
	});

	it("submits valid form data successfully", async () => {
		const user = userEvent.setup();

		mockedSend.mockResolvedValueOnce({ status: 200, text: "OK" });

		render(<Contact />);

		await user.type(
			screen.getByRole("textbox", { name: /full name/i }),
			"Mayuresh",
		);

		await user.type(
			screen.getByRole("textbox", { name: /email address/i }),
			"test@example.com",
		);

		await user.type(screen.getByRole("textbox", { name: /message/i }), "Hello");

		await user.click(screen.getByRole("button", { name: /send message/i }));

		await waitFor(() => {
			expect(mockedSend).toHaveBeenCalledTimes(1);
		});

		expect(mockedSend).toHaveBeenCalledWith(
			"test-service-id",
			"test-template-id",
			{ fullname: "Mayuresh", email: "test@example.com", message: "Hello" },
			"test-public-key",
		);
	});

	it("trims form values before submitting", async () => {
		const user = userEvent.setup();

		mockedSend.mockResolvedValueOnce({ status: 200, text: "OK" });

		render(<Contact />);

		await user.type(
			screen.getByRole("textbox", { name: /full name/i }),
			"  Mayuresh  ",
		);

		await user.type(
			screen.getByRole("textbox", { name: /email address/i }),
			"  test@example.com  ",
		);

		await user.type(
			screen.getByRole("textbox", { name: /message/i }),
			"  Hello  ",
		);

		await user.click(screen.getByRole("button", { name: /send message/i }));

		await waitFor(() => {
			expect(mockedSend).toHaveBeenCalledTimes(1);
		});

		expect(mockedSend).toHaveBeenCalledWith(
			"test-service-id",
			"test-template-id",
			{ fullname: "Mayuresh", email: "test@example.com", message: "Hello" },
			"test-public-key",
		);
	});

	it("disables the submit button while the message is being sent", async () => {
		const user = userEvent.setup();

		let resolveSend: (value: { status: number; text: string }) => void;

		const sendPromise = new Promise<{ status: number; text: string }>(
			(resolve) => {
				resolveSend = resolve;
			},
		);

		mockedSend.mockReturnValueOnce(sendPromise);

		render(<Contact />);

		await user.type(
			screen.getByRole("textbox", { name: /full name/i }),
			"Mayuresh",
		);

		await user.type(
			screen.getByRole("textbox", { name: /email address/i }),
			"test@example.com",
		);

		await user.type(screen.getByRole("textbox", { name: /message/i }), "Hello");

		const submitButton = screen.getByRole("button", { name: /send message/i });

		await user.click(submitButton);

		expect(submitButton).toBeDisabled();
		expect(submitButton).toHaveAttribute("aria-busy", "true");
		expect(screen.getByText("Sending...")).toBeInTheDocument();

		resolveSend!({ status: 200, text: "OK" });

		await waitFor(() => {
			expect(submitButton).not.toBeDisabled();
		});
	});

	it("handles EmailJS submission failure", async () => {
		const user = userEvent.setup();

		mockedSend.mockRejectedValueOnce(new Error("EmailJS failed"));

		render(<Contact />);

		await user.type(
			screen.getByRole("textbox", { name: /full name/i }),
			"Mayuresh",
		);

		await user.type(
			screen.getByRole("textbox", { name: /email address/i }),
			"test@example.com",
		);

		await user.type(screen.getByRole("textbox", { name: /message/i }), "Hello");

		await user.click(screen.getByRole("button", { name: /send message/i }));

		await waitFor(() => {
			expect(mockedSend).toHaveBeenCalledTimes(1);
		});

		await waitFor(() => {
			expect(
				screen.getByRole("button", { name: /send message/i }),
			).not.toBeDisabled();
		});
	});
});
