import { test, expect } from '@playwright/test';
import User from '../models/User';
import RegisterPage from '../pages/RegisterPage';
import TodoPage from '../pages/TodoPage';

test("should able to register to the todo website", async ({ page , request, context }) => {
    const user = new User();
    

    const registerPage = new RegisterPage(page);
    await registerPage.load();
    await registerPage.register(user);

    const todoPage = new TodoPage(page);

    const welcomeMessage = todoPage.getWelcomeMessage();
    //await expect(welcomeMessage).toBeVisible();
    //await expect(welcomeMessage).toContainText("Good afternoon");

    await page.goto('/todo');
    await page.click('[data-testid="add"]');
    await page.type('[data-testid="new-todo"]' , 'Learn Playwright');
    await page.click('[data-testid="submit-newTask"]');

    const todoText = await page.locator('[data-testid="todo-item"]').
    nth(0).innerText();
    expect(todoText).toEqual("Learn Playwright");


    });

test.skip("should able to register to the todo website using api", async ({ page , request, context }) => {
    
    // Create User
    const user = new User();

    const registerPage = new RegisterPage(page , request , context);
    await registerPage.registerUsingAPI(user);


    // UI Steps
    await page.goto('/todo/new');
    await page.type('[data-testid="new-todo"]' , 'Learn Playwright');
    await page.click('[data-testid="submit-newTask"]');

    /*
    const newTodoPage = new NewTodoPage(page);
    await newTodoPage.load();
    await newTodoPage.addNewTask('Playwright');
    */
   
    const todoPage = new TodoPage(page);
    const todoText = await todoPage.getTodoTextByIndex(0);
    expect(todoText).toEqual("Learn Playwright");


    });


    
