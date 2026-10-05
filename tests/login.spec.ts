import { test,expect } from '@playwright/test';

test('login_otro', async({ page })=> {


    await page.goto('https://opensource-demo.orangehrmlive.com/')
    await page.getByRole('textbox',{name:'username'}).fill('Admin')
    await page.getByRole('textbox',{name: 'password'}).fill('admin123')
    await page.getByRole('button',{name:'login'}).click()
    await expect(page.getByRole('link',{name:'Admin'})).toBeVisible()
    


}
)