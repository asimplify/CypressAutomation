// writing your first test so simple to start

describe("My first test", () => {
	//test1

	it("Verify title positive", () => {
		cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
		cy.title().should("eq", "OrangeHRM");
	});

	//test 2

	it("verify title negative", () => {
		cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
		cy.title().should("eq", "OrangeHRM123");
	});
});


// How we can Run this spec file

// for that we need to launch cypress application
// how to launch cypress application  open the Terminal comand = npx cypress open 
// Select E2E testing 
// select browser in which you want to test the application 
// click on start E2E testing now you are ready to run

// Now How we can execute this without cypress application
//by using comand propmpt we still execute this test
// Comand = npx cypress run 
// this comand ll run your test without opening application
// bydefault its executing in the headless mood (we cant see any UI)

// how we can run test in the headed mood without launching the cypress application
// comand = npx cypress run --headed
// this comand ll run all the specs files present in e2e folder

// how We can execute Specific file
// comand = npx cypress run --browser chrome --headed --spec "cypress\e2e\1-getting-started\TheHunt.cy.js"  
// in this comand we can define in which browser we want to run the test and / headed / headless / we can add