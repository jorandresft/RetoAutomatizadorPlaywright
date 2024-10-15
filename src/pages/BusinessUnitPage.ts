import { pageFixture } from "../hooks/PageFixture";

export class BusinessUnitPage {

    private Elements = {
        btn_new_business_unit_loc: '//div[@data-action="add"]'
    }

    async clickOnNewBusinessUnit(){
        await pageFixture.page.locator(this.Elements.btn_new_business_unit_loc).click();
    }
}