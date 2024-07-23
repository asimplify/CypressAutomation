describe("OrangeHRM Tests", () => {
	it("Test 1 - Verify Title Positive", () => {
		cy.visit("https://opensource-demo.orangehrmlive.com/");
		cy.title().should("eq", "OrangeHRM");
	});

	it("Test 2 - Login to OrangeHRM", () => {
		cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

		// Type username
		cy.get('input[name="username"]').type("Admin");

		// Type password
		cy.get('input[name="password"]').type("admin123");

		// Click login button
		cy.get("button.oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button").click();

		// Optionally check for dashboard title
		cy.url().should("include", "/web/index.php/dashboard/index");
		cy.get(".oxd-topbar-header-title").should("contain.text", "Dashboard");

		// Log current URL to console
		cy.url().then((url) => {
			cy.log(`Current URL: ${url}`);
		});
	});
});
