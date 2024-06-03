//Parking Cost Calculator page selectors
const submitButton = '#calculateCost';
const durationTextSelector = '#resultMessage';
const bookNowButton = '#reserveOnline';
const parkingLotType = '#parkingLot';
const entryDateSelector = '#entryDate';
const exitDateSelector =  '#exitDate';
const entryTimeSelector = '#entryTime';
const exitTimeSelector =  '#exitTime';

//Booking Details page selectors
const bookingDetailsSelector = 'text=Booking Details';
const bookingSummarySelector = 'text=Booking Summary';
const firstName = '#firstName';  
const lastName = '#lastName';   
const emailAddress = '#email'; 
const phoneNumber = '#phone'; 
const vehicleSize = '#vehicleSize'; 
const licensePlate = '#lpNumber'; 
const continueButton = '#continue'; 
const parkingTypeLocatorBD = '#reservationDetails ul.list-group li:nth-of-type(1) span.text-muted' ;
const CheckInLocatorBD = '#reservationDetails ul.list-group li:nth-of-type(2) span.text-muted';
const CheckOutLocatorBD = '#reservationDetails ul.list-group li:nth-of-type(3) span.text-muted'  ;
const TotalCostLocatorBD =  '#reservationDetails ul.list-group li:nth-of-type(4) strong'    ;

// Valid credentials
const validCredentials = {
  name: 'Yuliia',
  lastName: 'Zhol',
  email: 'klm@m.com',
  phoneNumber: '35800890000',
  licensePlateNumber: 'JOGGHJKL'
};

// Invalid credentials 
const invalidCredentials = {
  name: '8u%9',
  lastName: 'jdj%password123',
  email: 'kkh  j',
  phoneNumber: '+358  08900',
  licensePlateNumber: '80_?0^7*8900'
};

//Parking type drop down indentificators 
const dropDownSelection = {
  valetParking: 'Valet',
  shortTermParking: 'ShortTerm',
  longTermGarageParking: 'LongTermGarage',
  longTermSurfaceParking: 'LongTermSurface',
  economyParking: 'Economy'
};

//Vehicle size drop down indentificators 
const dropDownSelectionvehicleSize = {
  chooseSize: '000',
  smallCar: 'small',
  mediumCar: 'medium',
  
};

module.exports = {
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
  dropDownSelectionvehicleSize,
};