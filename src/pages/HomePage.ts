import { pageFixture } from "../hooks/PageFixture";

export class HomePage {

    private Elements = {
        menu_organization_loc: '#nav_menu1_3 >li:nth-child(1) > a',
        submenu_business_loc: '#nav_menu1_3_1:nth-child(2) > li:nth-child(1) span',
        menu_meeting_loc: '#nav_menu1_3 >li:nth-child(2) > a',
        submenu_meeting_loc: '#nav_menu1_3 >li:nth-child(2) > ul > li:nth-child(1)'
    }

    async clickOnOrganization(){
        await pageFixture.page.locator(this.Elements.menu_organization_loc).click();
    }

    async clickOnBusinessUnits(){
        await pageFixture.page.locator(this.Elements.submenu_business_loc).click();
    }

    async clickOnMeeting(){
        await pageFixture.page.locator(this.Elements.menu_meeting_loc).click();
    }

    async clickOnSubMeeting(){
        await pageFixture.page.locator(this.Elements.submenu_meeting_loc).click();
    }
}