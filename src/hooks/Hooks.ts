import { BeforeAll, After, Before, AfterAll, Status, AfterStep } from "@cucumber/cucumber";
import { chromium, Browser, Page, BrowserContext } from "@playwright/test";
import { pageFixture } from "./PageFixture";
import { invokeBrowser } from "../helper/browsers/BrowserManager";
import { getEnv } from "../helper/env/env";

let browser: Browser;
let context: BrowserContext;

BeforeAll (async function () {
    // Para obtener el ambiente 
    getEnv();
    // Para invocar el browser
    browser = await invokeBrowser();
});

Before (async function () {
    context = await browser.newContext();
    const page = await browser.newPage();
    pageFixture.page = page;
});

After (async function ({ pickle }) {
    // Screenshot
    const img = await pageFixture.page.screenshot({ path: `./test-results/screenshots/${pickle.name}.png`, type: "png"});
    await this.attach(img, "image/png");
    await pageFixture.page.close();
    await context.close();
});

AfterAll (async function () {
    await browser.close();
});