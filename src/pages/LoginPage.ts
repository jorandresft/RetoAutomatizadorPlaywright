import { DataTable } from "@cucumber/cucumber";
import { pageFixture } from "../hooks/PageFixture";

export class LoginPage {

    private Elements = {
        username_loc: '[id="LoginPanel0_Username"]',
        password_loc: '//input[@id="LoginPanel0_Password"]',
        btn_submit_loc: '//button[@id="LoginPanel0_LoginButton"]',
        text_validation_loc: '//h1'
    }

    async fillUsername(username: string){
        await pageFixture.page.locator(this.Elements.username_loc).fill(username);
    }

    async fillPassword(password: string){
        await pageFixture.page.locator(this.Elements.password_loc).fill(password);
    }

    async clickOnSignIn(){
        await pageFixture.page.locator(this.Elements.btn_submit_loc).click();
    }

    async onTheSite (dataUser: DataTable){
        const data = dataUser.hashes();
        for (const row of data) {
            await this.fillUsername(row["user"]);
            await this.fillPassword(row["pass"]);
        }
    }
}