/// <reference types=cypress" />

import { TodoPage } from "../page-object/todo-page";

describe('todo actions', function(){
const todoPage = new TodoPage()
beforeEach(function() {
//
todoPage.navigate()
todoPage.addTodo('Clean room')
//use to create data for tests
//cy.visit('http://todomvc-app-for-testing.surge.sh/')
//cy.get('.new-todo',{timeout: 6000}).type("Clean room{enter}")
})

it('Should navigate to the TodoMVC App', function()  {
cy.visit('http://todomvc-app-for-testing.surge.sh/')
})

it('Should be able to add a new todo to the list', function()  {
cy.get('label').should('have.text', 'Clean room')
})

it('Should mark a todo as completed', function()  {
cy.get('.toggle').click().should('be.checked')
cy.get('label').should('have.css', 'text-decoration-line', 'line-through')
})


it('Should clear completed todo', function()  {
cy.get('.toggle').click().should('be.checked')
cy.contains('Completed').click()
cy.get('.clear-completed').click()
})

})

