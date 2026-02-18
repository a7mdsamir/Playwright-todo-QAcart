import { test, expect } from '@playwright/test';

test("login using api test case", async ({ request }) => {
    const response = await request.post(
        "https://qacart-todo.herokuapp.com/api/v1/users/login",
        {
            data: {
                email: "ahmed@example.com",
                password: "Test@123"
            }
        }
    );


    const body = await response.json();
    console.log(body);

    console.log(await response.headers());
    console.log(response.ok());

    await expect(await response.json()).toHaveProperty("firstName", "111");
    await expect(await response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    const token = body.access_token;
    console.log("Token is: " + token);

    
});
