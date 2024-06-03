const { test, expect } = require('@playwright/test');
const path = require('path');
const { getTodayDate, getFutureDateTime, getPastDateTime } = require('./commonFunctions');
const { assertPrice, assertTextParkingDuration, assertTextBookingDetails, assertTextBookingSummary } = require('./assertions');
const {
  submitButton,
  durationTextSelector,
  validCredentials,
  invalidCredentials,
  dropDownSelection,
  bookNowButton,
  bookingDetailsSelector,
  bookingSummarySelector,
  parkingLotType,
  entryDateSelector,
  exitDateSelector,
  entryTimeSelector,
  exitTimeSelector,
  firstName,
  lastName,
  emailAddress,
  phoneNumber,
  vehicleSize,
  licensePlate,
  continueButton,
  parkingTypeLocatorBD,
  CheckInLocatorBD,
  CheckOutLocatorBD,
  TotalCostLocatorBD,
  dropDownSelectionvehicleSize
} = require('./constants');


test.describe('Test Suite', () => {
  test.describe('Login Tests', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('https://practice.expandtesting.com/webpark');
    });


    test('Verify Valet Parking Booking for Full Day with Valid Credentials', async ({ page }) => {
      //Parking Cost Calculator page 
      await page.waitForSelector(parkingLotType);
      await page.selectOption(parkingLotType, { value: dropDownSelection.valetParking });
      await page.click(entryDateSelector);
      const entryDateTime = getTodayDate();
      const exitDateTime = getFutureDateTime(1, 0, 0);
      await page.fill(entryDateSelector, entryDateTime.date);
      await page.fill(entryTimeSelector, entryDateTime.time);
      await page.fill(exitDateSelector, exitDateTime.date);
      await page.fill(exitTimeSelector, exitDateTime.time);
      await page.click(submitButton);
      const price = 18.00;
      await assertPrice(page, price);
      await assertTextParkingDuration(page, durationTextSelector, exitDateTime);
      await page.waitForSelector(bookNowButton);
      await page.click(bookNowButton);
      //Booking Details page 
      await assertTextBookingDetails(page, bookingDetailsSelector);
      await assertTextBookingSummary(page, bookingSummarySelector);
      const parkingType = await page.locator(parkingTypeLocatorBD);
      await expect(parkingType).toHaveText(dropDownSelection.valetParking);
      const checkIn = await page.locator(CheckInLocatorBD);
      await expect(checkIn).toHaveText(`${entryDateTime.date} ${entryDateTime.time}`);
      const checkOut = await page.locator(CheckOutLocatorBD);
      await expect(checkOut).toHaveText(`${exitDateTime.date} ${exitDateTime.time}`);
      const totalCost = await page.locator(TotalCostLocatorBD);
      await expect(totalCost).toHaveText(`${price.toFixed(2)}€`);
      await page.fill(firstName, validCredentials.name);
      await page.fill(lastName, validCredentials.lastName);
      await page.fill(emailAddress, validCredentials.email);
      await page.fill(phoneNumber, validCredentials.phoneNumber);
      await page.selectOption(vehicleSize, { value: dropDownSelectionvehicleSize.medium });
      await page.fill(licensePlate, validCredentials.licensePlateNumber);
      await page.click(continueButton);
    });

    test('Verify Short-Term Parking Booking for 24 h 1 min with Valid Credentials', async ({ page }) => {
      //Parking Cost Calculator page 
      await page.waitForSelector(parkingLotType);
      await page.selectOption(parkingLotType, { value: dropDownSelection.shortTermParking });
      await page.click(entryDateSelector);
      const entryDateTime = getTodayDate();
      const exitDateTime = getFutureDateTime(1, 0, 1);
      await page.fill(entryDateSelector, entryDateTime.date);
      await page.fill(entryTimeSelector, entryDateTime.time);
      await page.fill(exitDateSelector, exitDateTime.date);
      await page.fill(exitTimeSelector, exitDateTime.time);
      await page.click(submitButton);
      const price = 25.00;
      await assertPrice(page, price);
      await assertTextParkingDuration(page, durationTextSelector, exitDateTime);
      await page.waitForSelector(bookNowButton);
      await page.click(bookNowButton);
      //Booking Details page 
      await assertTextBookingDetails(page, bookingDetailsSelector);
      await assertTextBookingSummary(page, bookingSummarySelector);
      const parkingType = await page.locator(parkingTypeLocatorBD);
      await expect(parkingType).toHaveText(dropDownSelection.shortTermParking);
      const checkIn = await page.locator(CheckInLocatorBD);
      await expect(checkIn).toHaveText(`${entryDateTime.date} ${entryDateTime.time}`);
      const checkOut = await page.locator(CheckOutLocatorBD);
      await expect(checkOut).toHaveText(`${exitDateTime.date} ${exitDateTime.time}`);
      const totalCost = await page.locator(TotalCostLocatorBD);
      await expect(totalCost).toHaveText(`${price.toFixed(2)}€`);
      await page.fill(firstName, validCredentials.name);
      await page.fill(lastName, validCredentials.lastName);
      await page.fill(emailAddress, validCredentials.email);
      await page.fill(phoneNumber, validCredentials.phoneNumber);
      await page.selectOption(vehicleSize, { value: dropDownSelectionvehicleSize.medium });
      await page.fill(licensePlate, validCredentials.licensePlateNumber);
      await page.click(continueButton);
    });

    test('Verify Long-Term Garage Parking Booking for 1 h with Valid Credentials', async ({ page }) => {
      //Parking Cost Calculator page 
      await page.waitForSelector(parkingLotType);
      await page.selectOption(parkingLotType, { value: dropDownSelection.longTermGarageParking });
      await page.click(entryDateSelector);
      const entryDateTime = getTodayDate();
      const exitDateTime = getFutureDateTime(0, 1, 0);
      await page.fill(entryDateSelector, entryDateTime.date);
      await page.fill(entryTimeSelector, entryDateTime.time);
      await page.fill(exitDateSelector, exitDateTime.date);
      await page.fill(exitTimeSelector, exitDateTime.time);
      await page.click(submitButton);
      const price = 2.00;
      await assertPrice(page, price);
      await assertTextParkingDuration(page, durationTextSelector, exitDateTime);
      await page.waitForSelector(bookNowButton);
      await page.click(bookNowButton);
      //Booking Details page 
      await assertTextBookingDetails(page, bookingDetailsSelector);
      await assertTextBookingSummary(page, bookingSummarySelector);
      const parkingType = await page.locator(parkingTypeLocatorBD);
      await expect(parkingType).toHaveText(dropDownSelection.longTermGarageParking);
      const checkIn = await page.locator(CheckInLocatorBD);
      await expect(checkIn).toHaveText(`${entryDateTime.date} ${entryDateTime.time}`);
      const checkOut = await page.locator(CheckOutLocatorBD);
      await expect(checkOut).toHaveText(`${exitDateTime.date} ${exitDateTime.time}`);
      const totalCost = await page.locator(TotalCostLocatorBD);
      await expect(totalCost).toHaveText(`${price.toFixed(2)}€`);
      await page.fill(firstName, validCredentials.name);
      await page.fill(lastName, validCredentials.lastName);
      await page.fill(emailAddress, validCredentials.email);
      await page.fill(phoneNumber, validCredentials.phoneNumber);
      await page.selectOption(vehicleSize, { value: dropDownSelectionvehicleSize.medium });
      await page.fill(licensePlate, validCredentials.licensePlateNumber);
      await page.click(continueButton);
    });

    test('Verify Long-Term Surface Parking Booking for 168 h 1 min with Valid Credentials', async ({ page }) => {
      //Parking Cost Calculator page 
      await page.waitForSelector(parkingLotType);
      await page.selectOption(parkingLotType, { value: dropDownSelection.longTermSurfaceParking });
      await page.click(entryDateSelector);
      const entryDateTime = getTodayDate();
      const exitDateTime = getFutureDateTime(7, 0, 1);
      await page.fill(entryDateSelector, entryDateTime.date);
      await page.fill(entryTimeSelector, entryDateTime.time);
      await page.fill(exitDateSelector, exitDateTime.date);
      await page.fill(exitTimeSelector, exitDateTime.time);
      await page.click(submitButton);
      const price = 62.00;
      await assertPrice(page, price);
      await assertTextParkingDuration(page, durationTextSelector, exitDateTime);
      await page.waitForSelector(bookNowButton);
      await page.click(bookNowButton);
      //Booking Details page 
      await assertTextBookingDetails(page, bookingDetailsSelector);
      await assertTextBookingSummary(page, bookingSummarySelector);
      const parkingType = await page.locator(parkingTypeLocatorBD);
      await expect(parkingType).toHaveText(dropDownSelection.longTermSurfaceParking);
      const checkIn = await page.locator(CheckInLocatorBD);
      await expect(checkIn).toHaveText(`${entryDateTime.date} ${entryDateTime.time}`);
      const checkOut = await page.locator(CheckOutLocatorBD);
      await expect(checkOut).toHaveText(`${exitDateTime.date} ${exitDateTime.time}`);
      const totalCost = await page.locator(TotalCostLocatorBD);
      await expect(totalCost).toHaveText(`${price.toFixed(2)}€`);
      await page.fill(firstName, validCredentials.name);
      await page.fill(lastName, validCredentials.lastName);
      await page.fill(emailAddress, validCredentials.email);
      await page.fill(phoneNumber, validCredentials.phoneNumber);
      await page.selectOption(vehicleSize, { value: dropDownSelectionvehicleSize.medium });
      await page.fill(licensePlate, validCredentials.licensePlateNumber);
      await page.click(continueButton);
    });

    test('Verify Economy Parking Booking for 168 h 1 min with Valid Credentials', async ({ page }) => {
      //Parking Cost Calculator page 
      await page.waitForSelector(parkingLotType);
      await page.selectOption(parkingLotType, { value: dropDownSelection.economyParking });
      await page.click(entryDateSelector);
      const entryDateTime = getTodayDate();
      const exitDateTime = getFutureDateTime(0, 1, 0);
      await page.fill(entryDateSelector, entryDateTime.date);
      await page.fill(entryTimeSelector, entryDateTime.time);
      await page.fill(exitDateSelector, exitDateTime.date);
      await page.fill(exitTimeSelector, exitDateTime.time);
      await page.click(submitButton);
      const price = 2.00;
      await assertPrice(page, price);
      await assertTextParkingDuration(page, durationTextSelector, exitDateTime);
      await page.waitForSelector(bookNowButton);
      await page.click(bookNowButton);
      //Booking Details page 
      await assertTextBookingDetails(page, bookingDetailsSelector);
      await assertTextBookingSummary(page, bookingSummarySelector);
      const parkingType = await page.locator(parkingTypeLocatorBD);
      await expect(parkingType).toHaveText(dropDownSelection.economyParking);
      const checkIn = await page.locator(CheckInLocatorBD);
      await expect(checkIn).toHaveText(`${entryDateTime.date} ${entryDateTime.time}`);
      const checkOut = await page.locator(CheckOutLocatorBD);
      await expect(checkOut).toHaveText(`${exitDateTime.date} ${exitDateTime.time}`);
      const totalCost = await page.locator(TotalCostLocatorBD);
      await expect(totalCost).toHaveText(`${price.toFixed(2)}€`);
      await page.fill(firstName, validCredentials.name);
      await page.fill(lastName, validCredentials.lastName);
      await page.fill(emailAddress, validCredentials.email);
      await page.fill(phoneNumber, validCredentials.phoneNumber);
      await page.selectOption(vehicleSize, { value: dropDownSelectionvehicleSize.medium });
      await page.fill(licensePlate, validCredentials.licensePlateNumber);
      await page.click(continueButton);
    });

  });
});
