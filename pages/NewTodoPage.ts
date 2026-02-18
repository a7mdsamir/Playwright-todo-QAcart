import { APIRequestContext, Page } from "@playwright/test";
import TodoApi from '../apis/TodoApi'
import User from '../models/User'

export default class NewTodoPage {
private page: Page;
private request?: APIRequestContext;
    // constructor
constructor(page: Page, request?: APIRequestContext) {
    this.page = page;
    this.request = request;
}


    // Elements
private get newtodoInput(){
    return '[data-testid="new-todo"]';
}

private get newtodoSubmit(){
    return '[data-testid="submit-newTask"]';
}

async load(){
    await this.page.goto('/todo/new');
}

async addNewTask(todo: string) {
await this.page.type(this.newtodoInput, todo);
await this.page.click(this.newtodoSubmit);
}

async addNewTaskUsingAPI(user: User) {
await new TodoApi(this.request!).addTodo(user);
}

}
