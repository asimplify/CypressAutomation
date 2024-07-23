describe("BookOnline Tests", () => {
	beforeEach(() => {
		// Visit the homepage before each test
		cy.visit("http://bookonline-react.us-east-2.elasticbeanstalk.com");
	});
          
	// Handle uncaught exceptions
	Cypress.on("uncaught:exception", (err, runnable) => {
		// returning false here prevents Cypress from
		// failing the test
		return false;
	});

	// Test 1: Click on "New York" and Verify Navigation
	it("should navigate to hotel deals page and verify the title", () => {
		// Click on New York
		cy.contains("p.chakra-text", "New York", { timeout: 20000 }).should("be.visible").click();
		cy.wait(2000);

		// Click on Book Online button
		cy.contains("button.chakra-button", "Book Online", { timeout: 20000 }).should("be.visible").click();
		cy.wait(3000);

		// Verify the title on the next page
		cy.get("h2.chakra-heading", { timeout: 20000 }).should("contain.text", "Best Hotel Deals in New York, NY");

		// Click on the first instance of the Bookonline logo
		cy.get('img[alt="bookonline logo"]', { timeout: 20000 }).first().should("be.visible").click();
		cy.wait(5000);

		// Verify it goes back to the home page
		// cy.url().should("eq", "http://bookonline-react.us-east-2.elasticbeanstalk.com");
	});

	// Test 2: Click on "View More" and Verify Navigation
	it("should navigate to reviews page and verify the title", () => {
		// Click on View more button
		cy.get('a.chakra-link[href="/reviews"]', { timeout: 20000 }).first().should("be.visible").click();
		cy.wait(5000);

		// Verify the title on the reviews page
		cy.get("p.chakra-text.css-1j17zjc", { timeout: 20000 }).should(
			"contain.text",
			"BookOnline averages over 4.5 stars from the internet’s leading independent review sites, so you can relax and enjoy the view."
		);

		// Click on the first instance of the Bookonline logo
		cy.get('img[alt="bookonline logo"]', { timeout: 20000 }).first().should("be.visible").click();
		cy.wait(5000);

		// Verify it goes back to the home page
		// cy.url().should("eq", "http://bookonline-react.us-east-2.elasticbeanstalk.com");
	});

	// Test 3: Click on "Welcome to City in a Forest" and Verify URL
	it("should navigate to city page and verify the URL", () => {
		// Click on "Welcome to City in a Forest"
		cy.contains("p.chakra-text", "Welcome to City in a Forest", { timeout: 20000 }).should("be.visible").click();
		cy.wait(5000);

		// Verify the title on the city page
		cy.get("p.chakra-text.css-1nr66ka", { timeout: 20000 }).should("contain.text", "Welcome to City in a Forest – Atlanta, Georgia");

		// Click on the first instance of the Bookonline logo
		cy.get('img[alt="bookonline logo"]', { timeout: 20000 }).first().should("be.visible").click();
		cy.wait(5000);

		// Verify it goes back to the home page
		// cy.url().should("eq", "http://bookonline-react.us-east-2.elasticbeanstalk.com");
	});

	// Test 4: Verify Footer Buttons Functionality
	it("should navigate to Contact Us page and verify the title", () => {
		// Click on Contact button
		cy.get('a.chakra-link[href="/contact"]', { timeout: 20000 }).first().should("be.visible").click();
		cy.wait(5000);

		// Verify the title on the contact page
		cy.get("div.css-m87mkv > p.chakra-text.css-4kqr2m", { timeout: 20000 }).should("contain.text", "ContactUs");
		cy.get("div.css-m87mkv > p.chakra-text.css-140cifv").eq(0).should("contain.text", "BookOnline is an independent travel network offering over 100,000 hotels worldwide.");
		cy.get("div.css-m87mkv > p.chakra-text.css-140cifv")
			.eq(1)
			.should("contain.text", "We compile the best rates from all the top suppliers to make it easy to book the perfect room.");

		// Click on the first instance of the Bookonline logo
		cy.get('img[alt="bookonline logo"]', { timeout: 20000 }).first().should("be.visible").click();
		cy.wait(5000);

		// Verify it goes back to the home page
		// cy.url().should("eq", "http://bookonline-react.us-east-2.elasticbeanstalk.com");
	});
});

