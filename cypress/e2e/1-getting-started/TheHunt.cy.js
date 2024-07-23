// describe("TheHunt Staging Tests", () => {
// 	beforeEach(() => {
// 		// Visit the login page before each test
// 		cy.visit("https://thehuntstaging-frontend-dot-hallowed-web-419418.uc.r.appspot.com/login");

// 		// Set the viewport to iPhone 14 Pro Max screen size
// 		cy.viewport(430, 932); // dimensions for iPhone 14 Pro Max
// 	});

// 	// Handle uncaught exceptions
// 	Cypress.on("uncaught:exception", (err, runnable) => {
// 		// returning false here prevents Cypress from failing the test
// 		return false;
// 	});

// 	it("should login and add a new sale", () => {
// 		// Click on the radio button for Seller
// 		cy.get("span.chakra-radio__label").contains("Seller", { timeout: 10000 }).click();

// 		// Enter the email address
// 		cy.get('input[placeholder="Email Address"]', { timeout: 10000 }).type("don@gmail.com");

// 		// Enter the password
// 		cy.get('input[placeholder="Password"]', { timeout: 10000 }).type("Don12345");

// 		// Click on the login button
// 		cy.get('button[type="submit"]').contains("Login", { timeout: 10000 }).click();

// 		// Wait for login to complete
// 		cy.wait(5000);

// 		// Click on the button to add a new sale
// 		cy.get("button").contains("Add New Sale", { timeout: 10000 }).click();

// 		// Verify that the "Add New Sale" page is loaded
// 		cy.url().should("include", "/addsale");

// 		// Debug: log the DOM to see if the input is present
// 		cy.log("Checking if the input field for 'Sale Name' is present");
// 		cy.get("body").then(($body) => {
// 			if ($body.find('input[placeholder="Sale Name"]').length) {
// 				cy.log("Input field for 'Sale Name' found");
// 			} else {
// 				cy.log("Input field for 'Sale Name' NOT found");
// 			}
// 		});

// 		// Wait for the input field to appear
// 		cy.wait(2000);

// 		// Enter the sale name
// 		cy.get('input[placeholder="Enter sale title"]', { timeout: 20000 }).should("be.visible").type("SaleAu1");

// 		// Enter the location
// 		cy.get('input[placeholder="Enter location"]', { timeout: 10000 }).should("be.visible").type("Islamabad");

// 		// Click on the start date field and select today's date
// 		cy.get("div.css-o6rfp8").contains("Enter sale start date", { timeout: 10000 }).click();
// 		cy.get(".react-datepicker__day--today", { timeout: 10000 }).click();

// 		// Click on the end date field and select a date after the start date
// 		cy.get("div.css-o6rfp8").contains("Enter sale End date", { timeout: 10000 }).click();
// 		cy.get(".react-datepicker__day--today + .react-datepicker__day", { timeout: 10000 }).click();

// 		// Click on the button to add the sale
// 		cy.get("button").contains("Add Sale", { timeout: 10000 }).click();

// 		// Verify that the sale was added
// 		cy.get("div").contains("SaleAu1", { timeout: 10000 }).should("be.visible");
// 	});
// });

describe("TheHunt Staging Tests", () => {
	beforeEach(() => {
		// Visit the login page before each test
		cy.visit("https://thehuntstaging-frontend-dot-hallowed-web-419418.uc.r.appspot.com/login");

		// Set the viewport to iPhone 14 Pro Max screen size
		cy.viewport(430, 932); // dimensions for iPhone 14 Pro Max
	});

	// Handle uncaught exceptions
	Cypress.on("uncaught:exception", (err, runnable) => {
		// returning false here prevents Cypress from failing the test
		return false;
	});

	it("should login and add a new sale", () => {
		// Click on the radio button for Seller
		cy.get("span.chakra-radio__label").contains("Seller", { timeout: 10000 }).click();

		// Enter the email address
		cy.get('input[placeholder="Email Address"]', { timeout: 10000 }).type("don@gmail.com");

		// Enter the password
		cy.get('input[placeholder="Password"]', { timeout: 10000 }).type("Don12345");

		// Click on the login button
		cy.get('button[type="submit"]').contains("Login", { timeout: 10000 }).click();

		// Wait for login to complete
		cy.wait(5000);

		// Click on the button to add a new sale
		cy.get("button").contains("Add New Sale", { timeout: 10000 }).click();

		// Verify that the "Add New Sale" page is loaded
		cy.url().should("include", "/addsale");

		// Debug: log the DOM to see if the input is present
		cy.log("Checking if the input field for 'Sale Name' is present");
		cy.get("body").then(($body) => {
			if ($body.find('input[placeholder="Sale Name"]').length) {
				cy.log("Input field for 'Sale Name' found");
			} else {
				cy.log("Input field for 'Sale Name' NOT found");
			}
		});

		// Wait for the input field to appear
		cy.wait(2000);

		// Enter the sale name
		cy.get('input[placeholder="Enter sale title"]', { timeout: 20000 }).should("be.visible").type("SaleAu1");

		// Enter the location
		cy.get('input[placeholder="Enter location"]', { timeout: 10000 }).should("be.visible").type("Islamabad");

		// Click on the start date field
		cy.get("div.css-o6rfp8").contains("Enter sale start date", { timeout: 10000 }).click();

		// Wait for the date picker to appear and select today's date
		cy.get(".react-datepicker").should("be.visible");
		cy.get(".react-datepicker__day--today", { timeout: 10000 }).click();

		// Click on the end date field
		cy.get("div.css-o6rfp8").contains("Enter sale End date", { timeout: 10000 }).click();

		// Wait for the date picker to appear and select a date after today's date
		cy.get(".react-datepicker").should("be.visible");
		cy.get(".react-datepicker__day--today + .react-datepicker__day", { timeout: 10000 }).click();

		// Click on the button to add the sale
		cy.get("button").contains("Add Sale", { timeout: 10000 }).click();

		// Verify that the sale was added
		cy.get("div").contains("SaleAu1", { timeout: 10000 }).should("be.visible");
	});
});
