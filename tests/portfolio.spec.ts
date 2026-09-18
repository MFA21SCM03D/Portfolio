import { test, expect } from "playwright/test";

test.describe("Portfolio navigation", () => {
	test("user can navigate between all main pages", async ({ page }) => {
		await page.goto("/");

		await expect(page).toHaveURL(/\/$/);
		await expect(page.locator("article").first()).toBeVisible();

		await page.getByRole("link", { name: "Skills" }).click();

		await expect(page).toHaveURL(/\/skills$/);
		await expect(page.getByText("Frontend", { exact: true })).toBeVisible();

		await page.getByRole("link", { name: "Projects" }).click();

		await expect(page).toHaveURL(/\/projects$/);
		await expect(
			page.getByRole("heading", { name: /projects/i }),
		).toBeVisible();

		await page.getByRole("link", { name: "Resume" }).click();

		await expect(page).toHaveURL(/\/resume$/);
		await expect(page.getByRole("heading", { name: /resume/i })).toBeVisible();

		await page.getByRole("link", { name: "Contact" }).click();

		await expect(page).toHaveURL(/\/contact$/);
		await expect(
			page.getByRole("heading", { name: "Contact", exact: true, level: 1 }),
		).toBeVisible();
	});
});

test.describe("Home page", () => {
	test("renders the home page correctly", async ({ page }) => {
		await page.goto("/");

		await expect(page).toHaveURL(/\/$/);
		await expect(page.locator("article").first()).toBeVisible();
	});

	test("home page contains work experience cards", async ({ page }) => {
		await page.goto("/");

		const articles = page.locator("article");

		await expect(articles).not.toHaveCount(0);
	});
});

test.describe("Skills page", () => {
	test("renders all skill categories", async ({ page }) => {
		await page.goto("/skills");

		const categories = [
			"Frontend",
			"Backend",
			"Design",
			"Version Control",
			"Software & Tools",
		];

		for (const category of categories) {
			await expect(page.getByText(category, { exact: true })).toBeVisible();
		}
	});

	test("renders representative technologies", async ({ page }) => {
		await page.goto("/skills");

		const technologies = ["ReactJS", "TypeScript", "Java", "Figma", "Git"];

		for (const technology of technologies) {
			await expect(page.getByText(technology, { exact: true })).toBeVisible();
		}
	});
});

test.describe("Projects page", () => {
	test("renders project cards", async ({ page }) => {
		await page.goto("/projects");

		await expect(
			page.getByRole("heading", { name: /projects/i }),
		).toBeVisible();

		const projectCards = page.getByTestId("project-card");

		await expect(projectCards).not.toHaveCount(0);
	});

	test("project cards contain project information", async ({ page }) => {
		await page.goto("/projects");

		const projectCards = page.getByTestId("project-card");
		const count = await projectCards.count();

		expect(count).toBeGreaterThan(0);

		for (let index = 0; index < count; index++) {
			const card = projectCards.nth(index);

			await expect(card).toBeVisible();
			await expect(card).not.toBeEmpty();
		}
	});

	test("project cards link to GitHub", async ({ page }) => {
		await page.goto("/projects");

		const projectCards = page.getByTestId("project-card");
		const count = await projectCards.count();

		expect(count).toBeGreaterThan(0);

		for (let index = 0; index < count; index++) {
			const githubLink = projectCards
				.nth(index)
				.locator('a[href*="github.com"]');

			await expect(githubLink).toBeVisible();

			await expect(githubLink).toHaveAttribute("target", "_blank");

			await expect(githubLink).toHaveAttribute("rel", /noopener/);
		}
	});
});

test.describe("Resume page", () => {
	test("renders resume sections", async ({ page }) => {
		await page.goto("/resume");

		await expect(page.getByRole("heading", { name: /resume/i })).toBeVisible();

		await expect(
			page.getByRole("heading", { name: /education/i }),
		).toBeVisible();

		await expect(
			page.getByRole("heading", { name: /experience/i }),
		).toBeVisible();

		await expect(
			page.getByRole("heading", { name: /leadership & mentorship/i }),
		).toBeVisible();
	});

	test("renders education history", async ({ page }) => {
		await page.goto("/resume");

		await expect(
			page.getByRole("heading", {
				name: "Illinois Institute of Technology, Chicago",
				level: 3,
			}),
		).toBeVisible();

		await expect(
			page.getByText("SavitriBai Phule University, Pune", { exact: true }),
		).toBeVisible();
	});

	test("renders professional experience", async ({ page }) => {
		await page.goto("/resume");

		await expect(
			page.getByText("Capgemini (Client: Discover)", { exact: true }),
		).toBeVisible();

		await expect(page.getByText("Bloomintek", { exact: true })).toBeVisible();

		await expect(
			page.getByText("TechR Business Solutions", { exact: true }),
		).toBeVisible();
	});

	test("renders leadership experience", async ({ page }) => {
		await page.goto("/resume");

		await expect(
			page.getByText("Technical Graduate Assistant", { exact: true }),
		).toBeVisible();
	});
});

test.describe("Contact page", () => {
	test("renders contact form", async ({ page }) => {
		await page.goto("/contact");

		await expect(
			page.getByRole("heading", { name: "Contact", exact: true, level: 1 }),
		).toBeVisible();

		await expect(
			page.getByRole("textbox", { name: /full name/i }),
		).toBeVisible();

		await expect(
			page.getByRole("textbox", { name: /email address/i }),
		).toBeVisible();

		await expect(page.getByRole("textbox", { name: /message/i })).toBeVisible();

		await expect(
			page.getByRole("button", { name: /send message/i }),
		).toBeVisible();
	});

	test("shows validation errors when submitting empty form", async ({
		page,
	}) => {
		await page.goto("/contact");

		await page.getByRole("button", { name: /send message/i }).click();

		await expect(
			page.getByText("Name is required.", { exact: true }),
		).toBeVisible();

		await expect(
			page.getByText("Email is required.", { exact: true }),
		).toBeVisible();

		await expect(
			page.getByText("Message is required.", { exact: true }),
		).toBeVisible();
	});

	test("shows validation error for invalid email", async ({ page }) => {
		await page.goto("/contact");

		await page.getByRole("textbox", { name: /full name/i }).fill("Test User");

		await page
			.getByRole("textbox", { name: /email address/i })
			.fill("invalid-email");

		await page.getByRole("textbox", { name: /message/i }).fill("Test message");

		await page.getByRole("button", { name: /send message/i }).click();

		await expect(
			page.getByText("Enter a valid email address.", { exact: true }),
		).toBeVisible();
	});

	test("allows the user to fill out the contact form", async ({ page }) => {
		await page.goto("/contact");

		const nameInput = page.getByRole("textbox", { name: /full name/i });

		const emailInput = page.getByRole("textbox", { name: /email address/i });

		const messageInput = page.getByRole("textbox", { name: /message/i });

		await nameInput.fill("Test User");
		await emailInput.fill("test@example.com");
		await messageInput.fill("Hello from Playwright!");

		await expect(nameInput).toHaveValue("Test User");
		await expect(emailInput).toHaveValue("test@example.com");
		await expect(messageInput).toHaveValue("Hello from Playwright!");
	});
});

test.describe("Responsive layout", () => {
	test("portfolio is usable on mobile", async ({ page }) => {
		await page.setViewportSize({ width: 390, height: 844 });

		await page.goto("/");

		await expect(page.locator("article").first()).toBeVisible();

		await page.getByRole("link", { name: "Projects" }).click();

		await expect(
			page.getByRole("heading", { name: /projects/i }),
		).toBeVisible();

		await expect(page.locator(".projects_grid")).toBeVisible();
	});

	test("projects remain visible on mobile", async ({ page }) => {
		await page.setViewportSize({ width: 390, height: 844 });

		await page.goto("/projects");

		const cards = page.getByTestId("project-card");

		await expect(cards.first()).toBeVisible();
	});
});
