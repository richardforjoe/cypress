/// <reference types=cypress" />

import { TodoPage } from "../page-object/todo-page";

describe('todo actions', function(){
const todoPage = new TodoPage()

beforeEach(function() {
//
todoPage.navigate()
todoPage.addTodo('Clean room')
cy.eyesOpen({
  appName: 'Todo MVC!',
  batchName: 'TodoMVC!',
  browser: [
  { name: 'chrome',width: 1024, height: 768 },
  { name: 'firefox',width: 800, height: 600 },
  ]
});
//use to create data for tests
//cy.visit('http://todomvc-app-for-testing.surge.sh/')
//cy.get('.new-todo',{timeout: 6000}).type("Clean room{enter}")
})

afterEach(function(){
cy.eyesClose()
})

it('Should be able to add a new todo to the list', function()  {
cy.get('label').should('have.text', 'Clean room')
cy.eyesCheckWindow('Clean room added')
})

it('Should mark a todo as completed', function()  {
cy.get('.toggle').click().should('be.checked')
cy.get('label').should('have.css', 'text-decoration-line', 'line-through')
})


it('Should clear completed todo', function()  {
cy.get('.toggle').click().should('be.checked')
cy.contains('Completed').click()
cy.eyesCheckWindow('Mark as completed')
cy.get('.clear-completed').click()
})
//

})

