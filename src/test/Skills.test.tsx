import { render, screen } from "@testing-library/react";
import Skills from "../pages/Skills/Skills";

describe("Skills", () => {
	it("renders the Tech Stack heading", () => {
		render(<Skills />);
		expect(
			screen.getByRole("heading", { name: /tech stack/i }),
		).toBeInTheDocument();
	});

	it("renders all skill categories", () => {
		render(<Skills />);
		expect(
			screen.getByRole("heading", { name: /frontend/i }),
		).toBeInTheDocument();

		expect(
			screen.getByRole("heading", { name: /backend/i }),
		).toBeInTheDocument();

		expect(
			screen.getByRole("heading", { name: /design/i }),
		).toBeInTheDocument();

		expect(
			screen.getByRole("heading", { name: /version control/i }),
		).toBeInTheDocument();

		expect(
			screen.getByRole("heading", { name: /software & tools/i }),
		).toBeInTheDocument();
	});

	it("renders frontend skills", () => {
		render(<Skills />);

		expect(screen.getByText("ReactJS")).toBeInTheDocument();
		expect(screen.getByText("TypeScript")).toBeInTheDocument();
		expect(screen.getByText("JavaScript")).toBeInTheDocument();
	});

	it("renders backend skills", () => {
		render(<Skills />);

		expect(screen.getByText("Java")).toBeInTheDocument();
		expect(screen.getByText("Python")).toBeInTheDocument();
		expect(screen.getByText("Fast API")).toBeInTheDocument();
	});

	it("renders skill names", () => {
		render(<Skills />);

		expect(screen.getByText("ReactJS")).toBeInTheDocument();
		expect(screen.getByText("TypeScript")).toBeInTheDocument();
		expect(screen.getByText("Java")).toBeInTheDocument();
		expect(screen.getByText("Figma")).toBeInTheDocument();
		expect(screen.getByText("Git")).toBeInTheDocument();
	});

	it("marks skill icons as decorative", () => {
		const { container } = render(<Skills />);

		const images = container.querySelectorAll(
			'.skills_item img[aria-hidden="true"]',
		);

		expect(images.length).toBeGreaterThan(0);
	});
});
