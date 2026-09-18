import { render, screen } from "@testing-library/react";
import Home from "../pages/Home/Home";

describe("Home", () => {
	it("renders the home page heading", () => {
		render(<Home />);

		expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
	});

	it("renders the What I'm Doing section", () => {
		render(<Home />);

		expect(
			screen.getByRole("heading", { name: /what i'm doing/i }),
		).toBeInTheDocument();

		expect(
			screen.getByRole("heading", { name: /web development/i }),
		).toBeInTheDocument();

		expect(
			screen.getByRole("heading", { name: /mobile development/i }),
		).toBeInTheDocument();
	});

	it("renders work experience cards", () => {
		render(<Home />);

		const articles = screen.getAllByRole("article");

		expect(articles.length).toBeGreaterThan(0);
	});
});
