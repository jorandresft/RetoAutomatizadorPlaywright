import { DataTable } from "@cucumber/cucumber";
import { pageFixture } from "../hooks/PageFixture";
import { expect } from "@playwright/test";

export class NewMeetingPage {

    private Elements = {
        btn_save_loc: 'div[data-action="save-and-close"]',
        text_meeting_name_loc: '//input[@name="MeetingName"]',
        text_name_loc: '//input[@name="Name"]',
        select_meeting_type_loc: 'div[data-itemname="MeetingTypeId"] > div:nth-child(2)',
        text_meeting_number_loc: '//input[@name="MeetingNumber"]',
        text_start_date_loc: '//input[@name="StartDate"]',
        text_end_date_loc: '//input[@name="EndDate"]',
        select_location_loc: 'div[data-itemname="LocationId"] > div:nth-child(2)',
        select_unit_loc: 'div[data-itemname="UnitId"] > div:nth-child(2)',
        select_organized_by_loc: 'div[data-itemname="OrganizerContactId"] > div:nth-child(2)',
        select_reporter_loc: 'div[data-itemname="ReporterContactId"] > div:nth-child(2)',
        select_attendee_list_loc: 'div[id^="s2id_autogen"]',
        ul_list_meeting_type: '//*[@id="select2-results-6"]/li',
        ul_list_location: '//*[@id="select2-results-7"]/li',
        ul_list_unit: '//*[@id="select2-results-8"]/li',
        ul_list_organizedBy: '//*[@id="select2-results-9"]/li',
        ul_list_reporter: '//*[@id="select2-results-10"]/li',
        ul_list_attendee_list: '//*[@id="select2-results-12"]/li'
    }

    async fillMeetingName(name: string){
        await pageFixture.page.locator(this.Elements.text_meeting_name_loc).fill(name);
    }

    async fillMeetingNumber(number: string){
        await pageFixture.page.locator(this.Elements.text_meeting_number_loc).fill(number);
    }

    async fillStartDate(startDate: string){
        await pageFixture.page.locator(this.Elements.text_start_date_loc).fill(startDate);
    }

    async fillEndDate(endDate: string){
        await pageFixture.page.locator(this.Elements.text_end_date_loc).fill(endDate);
    }

    async clickOnSelectMeetingType(){
        await pageFixture.page.locator(this.Elements.select_meeting_type_loc).click();
    }

    async clickOnSelectLocation(){
        await pageFixture.page.locator(this.Elements.select_location_loc).click();
    }

    async clickOnSelectUnit(){
        await pageFixture.page.locator(this.Elements.select_unit_loc).click();
    }

    async clickOnSelectOrganizedBy(){
        await pageFixture.page.locator(this.Elements.select_organized_by_loc).click();
    }

    async clickOnSelectReporter(){
        await pageFixture.page.locator(this.Elements.select_reporter_loc).click();
    }

    async clickOnSelectAttendeeList(){
        await pageFixture.page.locator(this.Elements.select_attendee_list_loc).click();
    }

    async clickOnSave(){
        await pageFixture.page.locator(this.Elements.btn_save_loc).click();
    }

    async selectListMeetingType (meetingType: string){
        await this.clickOnSelectMeetingType()
        const list = await pageFixture.page.locator(this.Elements.ul_list_meeting_type).allInnerTexts();
        let index = 1;
        for (let text of list) {
            if(text === meetingType){
                await pageFixture.page.locator(`${this.Elements.ul_list_meeting_type}[${index}]`).click();
            }
            index++;
        }
    }

    async selectListLocation (location: string){
        await this.clickOnSelectLocation()
        const list = await pageFixture.page.locator(this.Elements.ul_list_location).allInnerTexts();
        let index = 1;
        for (let text of list) {
            if(text === location){
                await pageFixture.page.locator(`${this.Elements.ul_list_location}[${index}]`).click();
            }
            index++;
        }
    }

    async selectListUnit (unit: string){
        await this.clickOnSelectUnit()
        const list = await pageFixture.page.locator(this.Elements.ul_list_unit).allInnerTexts();
        let index = 1;
        for (let text of list) {
            if(text === unit){
                await pageFixture.page.locator(`${this.Elements.ul_list_unit}[${index}]`).click();
                break;
            }
            index++;
        }
    }

    async selectListOrganizedBy (organizedBy: string){
        await this.clickOnSelectOrganizedBy()
        const list = await pageFixture.page.locator(this.Elements.ul_list_organizedBy).allInnerTexts();
        let index = 1;
        for (let text of list) {
            if(text === organizedBy){
                await pageFixture.page.locator(`${this.Elements.ul_list_organizedBy}[${index}]`).click();
            }
            index++;
        }
    }

    async selectListReporter (reporter: string){
        await this.clickOnSelectReporter()
        const list = await pageFixture.page.locator(this.Elements.ul_list_reporter).allInnerTexts();
        let index = 1;
        for (let text of list) {
            if(text === reporter){
                await pageFixture.page.locator(`${this.Elements.ul_list_reporter}[${index}]`).click();
            }
            index++;
        }
    }

    async selectListAttendeeList (attendeeList: string){
        await this.clickOnSelectAttendeeList()
        const list = await pageFixture.page.locator(this.Elements.ul_list_attendee_list).allInnerTexts();
        let index = 1;
        for (let text of list) {
            if(text === attendeeList){
                await pageFixture.page.locator(`${this.Elements.ul_list_attendee_list}[${index}]`).click();
            }
            index++;
        }
    }

    async fillFormMeeting(dataMeeting: DataTable){
        const data = dataMeeting.hashes();
        for (const row of data) {
            await this.fillMeetingName(row["meetingName"]);
            await this.selectListMeetingType(row["meetingType"]);
            await this.fillMeetingNumber(row["meetingNumber"]);
            await this.fillStartDate(row["startDate"]);
            await this.fillEndDate(row["endDate"]);
            await this.selectListLocation(row["location"]);
            await this.selectListUnit(row["unit"]);
            await this.selectListOrganizedBy(row["organizedBy"]);
            await this.selectListReporter(row["reporter"]);
            await this.selectListAttendeeList(row["attendeeList"]);
        }
    }
}