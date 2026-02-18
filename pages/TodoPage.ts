import { Page } from "@playwright/test";

export default class TodoPage {
private page: Page;
    // constructor
constructor(page: Page) {
    this.page = page;
}


    // Elements

private get welcomeMessage(){
    return '[data-testid="welcome"]' ;
} 

private get todoItem(){
    return '[data-testid="todo-item"]';
}

private get deleteIcon(){
    return '[data-testid="delete"]';
}

private get noTodosMessage(){
    return '[data-testid="no-todos"]';
}

async load(){
    await this.page.goto('/todo');
}

getWelcomeMessage(){
    return this.page.locator('[data-testid="welcome"]');
} 

async getTodoTextByIndex(index:number){
    return await this.page.locator(this.todoItem)
    .nth(index).innerText();
}
async deleteTodoByIndex(index:number){
    await this.page.locator(this.deleteIcon)
    .nth(index).click();
}

getNoTodosMessage(){
    return this.page.locator(this.noTodosMessage);
}

/*
private newTodoInput = this.page.getByTestId("new-todo");
private submitNewTaskBtn = this.page.getByTestId("submit-newTask");
private todoItems = this.page.getByTestId("todo-item");
private checkboxes = this.page.getByTestId("complete-task");

async addTodo(text: string) {
await this.newTodoInput.fill(text);
await this.submitNewTaskBtn.click();
}
*/
async markLastTodoCompleted() {
    // انتظر آخر عنصر يظهر
await this.todoItems.last().waitFor();

    // اعمل check لتشيك بوكس آخر عنصر
await this.checkboxes.last().check();
}
}
