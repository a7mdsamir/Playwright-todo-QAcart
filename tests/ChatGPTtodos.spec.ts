import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { TodoPage } from "../pages/todo.page";

//test("able to mark a todo as completed1", async ({ page }) => {
//const loginPage = new LoginPage(page);
//const todoPage = new TodoPage(page);
//
//await loginPage.goto();
//await loginPage.login("ahmed@example.com", "Test@123");
//
//await todoPage.addTodo("Learn Playwright");
//await todoPage.markLastTodoCompleted();
//
//const lastItem = page.getByTestId("todo-item").last();
//await expect(lastItem).toHaveClass(/completed/i);
//});
