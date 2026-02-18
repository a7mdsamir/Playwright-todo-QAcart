import { test, expect } from '@playwright/test';


test.describe('Loginpage Test Cases', () => {

    test("Correct Title", async ({ page }) => {
    await page.goto('https://qacart-todo.herokuapp.com');
    const title = await page.title();
    console.log("Title of the page is: " + title);

    await expect(page).toHaveTitle('QAcart Todo App - Login page');
    await page.screenshot({ path: 'loginpage-title.png' });
    await page.close();
    });

    test("Correct URL", async ({ page }) => {
    await page.goto('https://qacart-todo.herokuapp.com/login');
    await expect(page).toHaveURL('https://qacart-todo.herokuapp.com/login');
    });

    test("Header should be visible by test", async ({ page }) => {
    await page.goto('https://qacart-todo.herokuapp.com/login');
//    const header = page.locator('text = "Login to Application"'); //case senstive
    const header = page.locator("text = Login to Application")
    await expect(header).toBeVisible();
    const header1 = page.locator('.header') //className
    await expect(header1).toHaveText("Login to Application")
     // More robust and readable locator
    const headerz = page.getByRole('heading', { name: 'Login to Application' });

    const emailFiled = page.locator("#email"); //id
    await emailFiled.fill("ahmed@example.com");
    await expect(emailFiled).toHaveValue("ahmed@example.com");
//    await page.locator('#email').fill("ahmed@example.com");
    const passwordFiled = page.locator('[data-testid="password"]'); //Attribute
    await passwordFiled.fill("Test@123");
    await page.pause();  //pause for debugging
    await expect(passwordFiled).toHaveValue("Test@123");

    const passwordFiled1 = page.locator('//input[@data-testid="password"]'); //XPATH //tagName[@attribute="value"]
    await passwordFiled1.fill("ahmed@example.com");
    await expect(passwordFiled1).toHaveValue("ahmed@example.com");

    const submitBtn = page.locator('button:has-text("Login")'); //combine tageName with text
    await page.waitForTimeout(4000);  //wait for 4 seconds
    await submitBtn.waitFor({
        state: 'visible' ,
        timeout: 5000
    })
    await submitBtn.click();
    await expect(page).toHaveTitle('QAcart Todo App - Login page' , {
    timeout: 5000 //wait for 5 seconds
    });

    });

});


