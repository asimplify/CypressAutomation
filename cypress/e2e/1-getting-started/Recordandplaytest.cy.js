/* ==== Test Created with Cypress Studio ==== */
it('bookonlimerecord', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://bookonline.com/');
  cy.get('.slick-current > :nth-child(1) > .css-1yme70h > .chakra-stack > .css-1csud4d > img').click();
  cy.get('.css-1ux6qys > [href="/sitemap/usacitylist"]').click();
  cy.get('.css-1ux6qys > [href="/contact"]').click();
  cy.get('.css-1ux6qys > [href="/booking"]').click();
  cy.get('.css-1cxcej8 > .chakra-link').click();
  cy.get('#field-\\:r0\\:').clear('j');
  cy.get('#field-\\:r0\\:').type('jalal');
  cy.get('#field-\\:r3\\:').clear('g');
  cy.get('#field-\\:r3\\:').type('gg');
  cy.get('#field-\\:r6\\:').click();
  cy.get('.css-wtl7pm').click();
  cy.get('#field-\\:r3\\:').clear();
  cy.get('#field-\\:r3\\:').type('khan');
  cy.get('#field-\\:r6\\:').clear('j');
  cy.get('#field-\\:r6\\:').type('jalal@gmail.com');
  cy.get('#field-\\:r9\\:').select('AZ');
  cy.get('.css-19s3t1h > .chakra-button').click();
  cy.get('.css-1ux6qys > [href="/"]').click();
  cy.get('[data-index="3"] > :nth-child(1) > .css-1yme70h > .chakra-stack > .css-1csud4d > img').click();
  cy.get('[data-index="1"] > :nth-child(1) > .css-1yme70h > .chakra-stack > .css-1csud4d > img').click();
  cy.get('.css-kqeuug > .chakra-button').click();
  cy.get('#menu-button-\\:rm\\:').click();
  cy.get('#menu-list-\\:rm\\:-menuitem-\\:rp\\: > [style="flex: 1 1 0%;"] > .chakra-text').click();
  cy.get('.css-spn4bz > img').click();
  /* ==== End Cypress Studio ==== */
});