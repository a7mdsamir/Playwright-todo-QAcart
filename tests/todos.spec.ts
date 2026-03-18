import { test, expect, request } from '@playwright/test';
import User from '../models/User';
import RegisterPage from '../pages/RegisterPage';
import TodoPage from '../pages/TodoPage';
import NewTodoPage from '../pages/NewTodoPage';

/*

test.describe("Todo page test cases", () => {
    test.use({ 
        storageState: './utils/storageState.json' 
    });

test.beforeEach( async({page})  => {
    await page.goto('https://qacart-todo.herokuapp.com/login');
    });
*/

test("able to add a todo", async({page, request, context}) => {
    
    // Create User
    const user = new User();

    const registerPage = new RegisterPage(page , request , context);
    await registerPage.registerUsingAPI(user);

    const newTodoPage = new NewTodoPage(page);
    await newTodoPage.load();
    await newTodoPage.addNewTask('Playwright');

    const todoPage = new TodoPage(page);
    const todoText = await todoPage.getTodoTextByIndex(0);
    expect(todoText).toEqual("Playwright");
});

test.skip("able to mark a todo as completed", async({page, request, context}) => {
    // Create User
    const user = new User();

    const registerPage = new RegisterPage(page , request , context);
    await registerPage.registerUsingAPI(user);

    const newTodoPage = new NewTodoPage(page);
    await newTodoPage.load();
    
    await page.click('[data-testid="add"]');
    await page.type('[data-testid="new-todo"]' , 'Learn Playwright');
    await page.click('[data-testid="submit-newTask"]');

    const todoText = await page.locator('[data-testid="todo-item"]').
    nth(0).innerText();
    expect(todoText).toEqual("Learn Playwright");

    await page.locator('[data-testid="complete-task"]').nth(0).click();
    const todoItem = page.locator('[data-testid="todo-item"]').nth(0);
    await expect(todoItem).toHaveCSS("background-color", "rgb(33, 76, 97)");

    // ChatGPT check not working so we will use click
    const lastTodo = page.getByTestId("todo-item").last();
    await expect(lastTodo).toBeVisible();
    await lastTodo.getByTestId("complete-task").click();
    await expect(lastTodo.getByTestId("complete-task")).toBeChecked();
    });

test("should be able to delete a todo", async({page , request, context}) => {
    
    // Create User
    const user = new User();

    const registerPage = new RegisterPage(page , request , context);
    await registerPage.registerUsingAPI(user);

    // Add Todo using API
    const newTodoPage = new NewTodoPage(page, request);
    await newTodoPage.addNewTaskUsingAPI(user);

    
    const todoPage = new TodoPage(page);
    await todoPage.load();

    await page.click('[data-testid="add"]');
    await page.type('[data-testid="new-todo"]' , 'Learn Playwright');
    await page.click('[data-testid="submit-newTask"]');

    await todoPage.deleteTodoByIndex(0);
    //await page.pause();  //pause for debugging

    const noTodosMessage = todoPage.getNoTodosMessage();
    await expect(noTodosMessage).toBeVisible();

});

test("welcome message should be displayed", async({page}) => {
    
    const welcomeMessage = page.locator('[data-testid="welcome"]');
    //await expect(welcomeMessage).toContainText("Time to sleep");

});


