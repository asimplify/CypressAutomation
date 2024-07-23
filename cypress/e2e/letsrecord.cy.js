describe("BookOnline Form Submission Test", () => {
	it("Submit a Form with Given Data", () => {
		// Visit the homepage
		cy.visit("https://bookonline.com/");

		// Click on the specified element
		cy.get("#__next > div.css-zriy3h > div.css-9f8nee > div > div.css-1wp0kco > div > div > a:nth-child(2)").click();

		// Wait for the page to load
		cy.wait(2000); // Adjust the wait time as necessary

		// Click on another specified element
		cy.get("#__next > div.css-1hjs5bo > div.css-1npleih > div > a.chakra-link.css-1rablxe").click();

		// Wait for the page to load
		cy.wait(2000); // Adjust the wait time as necessary

		// Click on the third specified element
		cy.get("#__next > div.css-v4sc > div > div.css-1cxcej8 > a").click();

		// Fill in the input fields
		cy.get("#field-\\:r0\\:").type("test"); // First name input field
		cy.get("#field-\\:r3\\:").type("retest"); // Last name input field
		cy.get("#field-\\:r6\\:").type("test@gmail.com"); // Email input field

		// Click on the drop-down to open it
		cy.get("#field-\\:r9\\:").click();

		// Select an option from the drop-down
		// Adjust the selector to match the option you want to select
		cy.get("#field-\\:r9\\:-menuitem-\\:rn\\:").first().click();

		// Click on the submit button
		cy.get("#__next > div.css-wtl7pm > div > div.chakra-card__body.css-1idwstw > div > form > button").click();

		// Optionally, verify form submission or the resulting page
		// Example: Check for a success message or redirection
		cy.url().should("include", "/success"); // Adjust this based on your application's URL structure
	});
});
