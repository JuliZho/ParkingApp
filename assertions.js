const { expect } = require('@playwright/test');
const { getTodayDate, getFutureDateTime, getPastDateTime } = require('./commonFunctions');

//Assert price
async function assertPrice(page, expectedPrice) {
    const priceElement = await page.waitForSelector('#resultValue');
    const priceText = await priceElement.innerText();
    const actualPrice = parseFloat(priceText.replace('€', '')); 
    expect(actualPrice).toBe(expectedPrice);
}
//Assert parking duration text
async function assertTextParkingDuration(page, selector, exitDateTime) {
    const element = await page.waitForSelector(selector);
    const actualText = await element.innerText();
    expect(actualText).toBe(exitDateTime.duration);
}
//Assert booking details text
async function assertTextBookingDetails(page, selector) {
    const expectedText='Booking Details';
    const element = await page.waitForSelector(selector);
    const actualText = await element.innerText();
    expect(actualText).toBe(expectedText);
}
//Assert booking summary text
async function assertTextBookingSummary(page, selector) {
    const expectedText='Booking Summary';
    const element = await page.waitForSelector(selector);
    const actualText = await element.innerText();
    expect(actualText).toBe(expectedText);
}

module.exports = {
    assertPrice,
    assertTextParkingDuration,
    assertTextBookingDetails,
    assertTextBookingSummary
};

