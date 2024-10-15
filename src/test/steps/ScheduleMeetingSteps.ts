import { Given, When, Then, DataTable } from '@cucumber/cucumber'
import { pageFixture } from '../../hooks/PageFixture';
import { LoginPage } from '../../pages/LoginPage';
import { HomePage } from '../../pages/HomePage';
import { BusinessUnitPage } from '../../pages/BusinessUnitPage';
import { NewBusinessPage } from '../../pages/NewBusinessPage';
import { MeetingPage } from '../../pages/MeetingPage';
import { NewMeetingPage } from '../../pages/NewMeetingPage';

const loginPage = new LoginPage();
const homePage = new HomePage();
const businessUnitPage = new BusinessUnitPage();
const newBusinessUnitPage = new NewBusinessPage();
const meetingPage = new MeetingPage();
const newMeetingPage = new NewMeetingPage();

Given('the user is on the serenity demo page', async function () {
    await pageFixture.page.goto(process.env.BASEURL);
});

Given('attempts to log in', {timeout: 30000}, async function (dataUser: DataTable) {
    await loginPage.onTheSite(dataUser);
    await loginPage.clickOnSignIn();
});

When('click on Organization and Business Units', {timeout: 30000}, async function () {
    await homePage.clickOnOrganization();
    await homePage.clickOnBusinessUnits();
});

When('New Business Unit and Save', {timeout: 30000}, async function (dataBusiness: DataTable) {
    await businessUnitPage.clickOnNewBusinessUnit();
    await newBusinessUnitPage.fillFormBusiness(dataBusiness);
    await newBusinessUnitPage.clickOnSave();
});

Then('click on Meeting and Meetings', {timeout: 30000}, async function () {
    await homePage.clickOnMeeting();
    await homePage.clickOnSubMeeting();
});

Then('New Meeting and Save', {timeout: 30000}, async function (dataMeeting: DataTable) {
    await meetingPage.clickOnNewMeeting();
    await newMeetingPage.fillFormMeeting(dataMeeting);
    await newMeetingPage.clickOnSave();
});

Then('validate meeting creation {string}', {timeout: 30000}, async function (meeting: string) {
    await meetingPage.fillSearch(meeting);
    await meetingPage.clickOnRefresh();
    await meetingPage.validateText(meeting);
});