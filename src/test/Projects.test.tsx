import { render, screen } from "@testing-library/react";
import Projects from "../pages/Projects/Projects";

describe("Projects", () => {
	it("renders the Projects heading", () => {
		render(<Projects />);

		expect(
			screen.getByRole("heading", { name: /projects/i }),
		).toBeInTheDocument();
	});

	it("renders all project cards", () => {
		render(<Projects />);

		const projectLinks = screen.getAllByRole("link");

		expect(projectLinks.length).toBeGreaterThan(0);
	});

	it("renders project names", () => {
		render(<Projects />);

		expect(
			screen.getByRole("heading", { name: /anime recommendation/i }),
		).toBeInTheDocument();

		expect(
			screen.getByRole("heading", { name: /anime database api/i }),
		).toBeInTheDocument();

		expect(
			screen.getByRole("heading", { name: /animesuggest/i }),
		).toBeInTheDocument();
	});

	it("renders GitHub links for projects", () => {
		render(<Projects />);

		const githubLinks = screen.getAllByRole("link");

		githubLinks.forEach((link) => {
			expect(link).toHaveAttribute("href");
			expect(link).toHaveAttribute("target", "_blank");
			expect(link).toHaveAttribute("rel", expect.stringContaining("noopener"));
		});
	});

	it("renders project technology names", () => {
		render(<Projects />);

		expect(screen.getAllByText("Python").length).toBeGreaterThan(0);
		expect(screen.getByText("FastAPI")).toBeInTheDocument();
		expect(screen.getAllByText("MongoDB").length).toBeGreaterThan(0);
		expect(screen.getByText("React")).toBeInTheDocument();
		expect(screen.getByText("TypeScript")).toBeInTheDocument();
	});
});
