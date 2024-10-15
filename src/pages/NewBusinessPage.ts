import { DataTable } from "@cucumber/cucumber";
import { pageFixture } from "../hooks/PageFixture";

export class NewBusinessPage {

    private Elements = {
        btn_save_loc: 'div[data-action="save-and-close"]',
        select_parent_unit_loc: 'span[id^="select2-chosen"]',
        text_name_loc: '//input[@name="Name"]',
        ul_list_loc: '//*[@id="select2-results-1"]/li'
    }

    async fillName(name: string){
        await pageFixture.page.locator(this.Elements.text_name_loc).fill(name);
    }

    async clickOnSelectParentUnit(){
        await pageFixture.page.locator(this.Elements.select_parent_unit_loc).click();
    }

    async clickOnSave(){
        await pageFixture.page.locator(this.Elements.btn_save_loc).click();
    }

    async selectParentUnit (unit: string){
        await this.clickOnSelectParentUnit();
        const list = await pageFixture.page.locator(this.Elements.ul_list_loc).allInnerTexts();
        let index = 1;
        for (let text of list) {
            if(text === unit){
                await pageFixture.page.locator(`${this.Elements.ul_list_loc}[${index}]`).click();
            }
            index++;
        }
    }

    async fillFormBusiness(dataBusnessUnit: DataTable){
        const data = dataBusnessUnit.hashes();
        for (const row of data) {
            await this.fillName(row["name"]);
            await this.selectParentUnit(row["mainUnit"]);
        }
    }
}