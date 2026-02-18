import { request} from '@playwright/test';

async function globalConfig() {

    const requestContext = await request.newContext();
    await requestContext.post("https://qacart-todo.herokuapp.com/api/v1/users/login", {
        data: {
            email: "ahmed@example.com"
            , password: "Test@123"
        }
    })
    await requestContext.storageState({ 
        path: './utils/storageState.json' 
    });


    /*
    const browser = await chromium.launch();
    const page = await browser.newPage();
    
    await page.goto('https://qacart-todo.herokuapp.com/login');
    await page.locator("#email").fill("ahmed@example.com");
    await page.locator('[data-testid="password"]').fill("Test@123");
    await page.locator('button:has-text("Login")').click();
    
    const welcomeMessage = page.locator('[data-testid="welcome"]');
    await expect(welcomeMessage).toBeVisible();
    
    await page.context().storageState({ 
        path: './utils/adminStorageState.json' });

    //
    const page1 = await browser.newPage();
    await page1.goto('https://qacart-todo.herokuapp.com/login');
    await page1.locator("#email").fill("hatem@example.com");
    await page1.locator('[data-testid="password"]').fill("Test@123");
    await page1.locator('button:has-text("Login")').click();
    
    const welcomeMessage1 = page.locator('[data-testid="welcome"]');
    await expect(welcomeMessage1).toBeVisible();
    
    await page.context().storageState({ 
        path: './utils/userStorageState.json' });
*/

}

export default globalConfig;