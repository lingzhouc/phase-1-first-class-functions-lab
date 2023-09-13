// first two drivers
const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2);
}

// last two drivers
const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2);
}

// new array of the above fns
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// multiply fare for ride
function createFareMultiplier(int) {
    return (function(fare) {
        return fare * int;
    });
}

// accept fare as lone arg and doubles it
const fareDoubler = (createFareMultiplier) => {
    return createFareMultiplier * 2;
}

// triples fare
const fareTripler = (createFareMultiplier) => {
    return createFareMultiplier * 3;
}

// apply arg2 function on arg1 array
function selectDifferentDrivers(arg1, arg2) {
    return arg2(arg1);
}

// test
// console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));
// console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));
// console.log(selectingDrivers);
