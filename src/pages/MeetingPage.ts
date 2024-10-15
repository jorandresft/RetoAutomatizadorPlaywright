import { expect } from "@playwright/test";
import { pageFixture } from "../hooks/PageFixture";

export class MeetingPage {

    private Elements = {
        btn_new_meeting_loc: 'div[data-action="add"] > span',
        btn_refresh_loc: '.refresh-button',
        text_search_loc: '#Serenity_Pro_Meeting_MeetingGrid0_QuickSearchInput',
        text_loc: '.slick-row >div:nth-child(2)'
    }

    async clickOnNewMeeting(){
        await pageFixture.page.locator(this.Elements.btn_new_meeting_loc).click();
    }

    async fillSearch(search: string){
        await pageFixture.page.waitForSelector(this.Elements.text_search_loc);
        await pageFixture.page.locator(this.Elements.text_search_loc).fill(search);
        pageFixture.page.waitForSelector(this.Elements.text_loc);
    }

    async clickOnRefresh(){
        await pageFixture.page.waitForSelector(this.Elements.btn_refresh_loc);
        await pageFixture.page.locator(this.Elements.btn_refresh_loc).click();
    }

    async validateText(meeting: string){
        await pageFixture.page.waitForSelector(this.Elements.text_loc);
        const text = await pageFixture.page.locator(this.Elements.text_loc).allInnerTexts();
        pageFixture.page.waitForSelector(this.Elements.text_loc);
        expect(text).toContain(meeting);
    }
}