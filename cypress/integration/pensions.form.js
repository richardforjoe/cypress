/// <reference types="Cypress" />

context('Navigation', () => {
  beforeEach(() => {
    cy.visit('https://baesitesdev-ext.infomentum.co.uk/en-pensions/contact-us')
    //cy.fixture('example.json').as('users')
cy.fixture('formdata.json').as('users')
  })
describe('Successfull Form Submission - Dynamic tests', function() {
context('data generated from file', () => {
const users = require('C:/Users/richard.forjoe/baeproject/cypress/fixtures/formdata.json')

it('.submit() - submit a form when only Mandatory fields are populated', function ()  {

    const count = 0
    cy.get('#scheme').select(users[count].scheme);
    cy.get('#fullName').type(users[count].Fullname);
    cy.get('#DOB').type(users[count].Dateofbirth);
    cy.get('#member-number').type(users[count].MembernumberNInumber);
    cy.get('.link-button').click();

cy.get('.confirmation-message')
        .should('contain', 'Sent successfully.')
        .and('contain', 'Thank you for getting in touch')
  })

users.forEach((user) => {
it('cy.reload() - reload the page', () => {
    // https://on.cypress.io/reload
    cy.reload()
  })
it(`.submit() - submit a form for ${user.typeofmember} Member and ${user.scheme}`, function ()  {
// User back ticks ` to pass parameters ${user...}
    //const count = 0
    cy.get('#type-of-member').select(user.typeofmember);
    cy.get('#scheme').select(user.scheme);
    cy.get('#fullName').type(user.Fullname);
    cy.get('#DOB').type(user.Dateofbirth);
    cy.get('#member-number').type(user.MembernumberNInumber);
    cy.get('#phone').type(user.Phonenumber);
    cy.get('#email').type(user.Emailaddress);
    cy.get('#address').type(user.Address);
    cy.get('#enquiry').type(user.enquiry);
    cy.get('.link-button').click();

cy.get('.confirmation-message')
        .should('contain', 'Sent successfully.')
        .and('contain', 'Thank you for getting in touch')
  })
  })
  })
  })

describe('Failed Validation Form Submission', function() {
context('data generated from file', () => {
const users = require('C:/Users/richard.forjoe/baeproject/cypress/fixtures/formdata.json')

it('cy.reload() - reload the page', () => {
    // https://on.cypress.io/reload
    cy.reload()
  })

it('Submit when no Mandatory fields are populated', function ()  {

    //const count = 0
    cy.get('.link-button').click();
cy.get('#scheme-error').should('contain', 'This field is required.').should('have.css', 'border')
cy.get('#fullName-error').should('contain', 'This field is required.').should('have.css', 'border')
cy.get('#DOB-error').should('contain', 'This field is required.').should('have.css', 'border')
cy.get('#member-number-error').should('contain', 'This field is required.').should('have.css', 'border')
  })
  })
  })
})