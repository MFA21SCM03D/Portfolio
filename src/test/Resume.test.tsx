import { render, screen } from "@testing-library/react";
import Resume from "../pages/Resume/Resume";

describe("Resume", () => {
	it("renders the Resume heading", () => {
		render(<Resume />);

		expect(
			screen.getByRole("heading", { name: /resume/i }),
		).toBeInTheDocument();
	});

	it("renders the education section", () => {
		render(<Resume />);

		expect(
			screen.getByRole("heading", { name: /education/i }),
		).toBeInTheDocument();
	});

	it("renders the experience section", () => {
		render(<Resume />);

		expect(
			screen.getByRole("heading", { name: /experience/i }),
		).toBeInTheDocument();
	});

	it("renders the leadership section", () => {
		render(<Resume />);

		expect(
			screen.getByRole("heading", { name: /leadership & mentorship/i }),
		).toBeInTheDocument();
	});

	it("renders education entries", () => {
		render(<Resume />);

		expect(
			screen.getByRole("heading", {
				name: /Illinois Institute of Technology, Chicago/i,
			}),
		).toBeInTheDocument();

		expect(
			screen.getByRole("heading", {
				name: /SavitriBai Phule University, Pune/i,
			}),
		).toBeInTheDocument();

		expect(
			screen.getByText(/Master of Science, Computer Science/i),
		).toBeInTheDocument();

		expect(
			screen.getByText(/Bachelor of Engineering, Computer Science/i),
		).toBeInTheDocument();
	});

	it("renders professional experience", () => {
		render(<Resume />);

		expect(screen.getByText(/Capgemini/i)).toBeInTheDocument();

		expect(screen.getByText(/Bloomintek/i)).toBeInTheDocument();

		expect(screen.getByText(/TechR Business Solutions/i)).toBeInTheDocument();
	});

	it("renders leadership experience", () => {
		render(<Resume />);

		expect(
			screen.getByText(/Technical Graduate Assistant/i),
		).toBeInTheDocument();
	});
});
