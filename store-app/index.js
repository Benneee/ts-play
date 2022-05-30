// Number Types mini-challenge
// Write a function to show total number of reviews that will only accept numbers and attend to all 'any' TypeScript weakness flags.
// String Types mini-challenge
// Write a function that will display the most recent reviewers name next to the review total, making sure to assign a type to the parameter, to prevent unwanted behaviour.
// Boolean Types mini-challenge
// if the last reviewer is a loyalty User, can you add a star to the end of their name?
// please do so in the existing function, and make sure to declare what type of 
// parameters the function takes.
// Can you fix my code to show 'Welcome back Bobby' in the Nav Bar for 
// our couch surfing website? Do this by assigning types to the parameters
// we pass to our populateUser function, so that we can be aware of
// errors in our user objects in the future.
// Tuples challenge
// 1. Add an array to the variable of currentLocation I have added. This array
// must have your current location, time, and degrees celcius of your location
// NOTE: make sure to make this a Tuple, to only allow those types in that
// structure.
// 2. Add this visually to a footer on your site
// Enum Types mini-challenge
// Replace the value of loyaltyUser to a GOLD_USER, SILVER_USER or BRONZE_USER, making sure to
// use what we learnt about Enums in the previous lesson. Make Sheia GOLD, Andrzej BRONZE 
// and Omar SILVER.
// 2. export the enum
// 3. Fix the function in the utils to show Sheias star as she is a GOLD_USER.
// Union Types Challenge
// 1. Fix the function to show the price per night for each property card only
// if isLoggedIn is true, or the you object has Permissions. (all permissions should work)
// 2. See what happens when a null object to be passed to the you objects permissions.
// Literal Types
// 1. Based on what we have learnt about literal types with the price, can you make
// a Country literal type? You only have to include the countries we are dealing with in 
// the project.
// 2. Can you create a file and store all your types aliases in there?
// Function Return Types + Void Types mini-challenge
// Instead of having a long 'review total 3', can you make the line say '3 reviews', or '1 review'
// if there is only one? Use a function to do this and assign a type to the functions return.
var returningUserDisplay = document.querySelector('#returning-user');
var userNameDisplay = document.querySelector('#user');
var reviewTotalDisplay = document.querySelector('#reviews');
var propertyContainer = document.querySelector('.properties');
var footer = document.querySelector('.footer');
var UserTypes;
(function (UserTypes) {
    UserTypes["GOLD"] = "Gold User";
    UserTypes["BRONZE"] = "Bronze User";
    UserTypes["SILVER"] = "Silver User";
})(UserTypes || (UserTypes = {}));
var reviews = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: UserTypes.GOLD,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: UserTypes.BRONZE,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: UserTypes.SILVER,
        date: '27-03-2021'
    },
    {
        name: 'Victor',
        stars: 4,
        loyaltyUser: UserTypes.GOLD,
        date: '23-03-2022'
    }
];
var isLoggedIn = true;
function totalReviews(value, visitor, isLoyaltyUser) {
    reviewTotalDisplay.innerHTML = "".concat(value, " review").concat(makeMultiple(value), ", Latest Visitor: ").concat(visitor, " ").concat(isLoyaltyUser === UserTypes.GOLD ? '⭐️' : '', " ");
}
function formatDate(date) {
    return date.split('-').reverse().join('-');
}
function makeMultiple(value) {
    if (value > 1 || value == 0) {
        return 's';
    }
    else
        return '';
}
function getLatestVisitorData(reviews) {
    var arrayOfDates = [];
    var latestVisitorObject = {};
    reviews.map(function (review) {
        if (review['date']) {
            arrayOfDates.push(formatDate(review['date']));
        }
    });
    var convertedDates = arrayOfDates.map(function (date) { return new Date(date); });
    var latestDate = new Date(Math.max.apply(Math, convertedDates)).getUTCDate();
    var convLatestDate = latestDate.toString().length === 1 ? "0".concat(latestDate) : latestDate.toString();
    reviews.map(function (review) {
        if (review['date']) {
            var splittedDate = review['date'].split('-');
            if (splittedDate[0] === convLatestDate) {
                latestVisitorObject = review;
            }
        }
    });
    return latestVisitorObject;
}
function populateUser(isReturning, userName) {
    if (isReturning) {
        returningUserDisplay.innerHTML = 'back';
    }
    userNameDisplay.innerHTML = userName;
}
getLatestVisitorData(reviews);
totalReviews(1, getLatestVisitorData(reviews)['name'], getLatestVisitorData(reviews)['loyaltyUser']);
// const you: {
//     firstName: string;
//     lastName: string;
//     isReturning: boolean;
//     age: number;
//     // stayedAt: string[];
//     stayedAt: (string | number)[];
// } = {
//     firstName: 'Bobby',
//     lastName: 'Samuels',
//     isReturning: true,
//     age: 23,
//     stayedAt: [
//         'lagos',
//         'kano',
//         'jigawa',
//         'delta',
//         23
//     ]
// }
var Roles;
(function (Roles) {
    Roles["ADMIN"] = "admin";
    Roles["READ_ONLY"] = "read_only";
})(Roles || (Roles = {}));
var you = {
    firstName: 'Bobby',
    lastName: 'Samuels',
    isReturning: true,
    age: 23,
    permissions: Roles.ADMIN,
    stayedAt: [
        'lagos',
        'kano',
        'jigawa',
        'delta',
        23
    ]
};
// type Price = 45 | 30 | 25
// type Country = 'Colombia' | 'Poland' | 'United Kingdom'
// Array of Properties
var properties = [
    {
        image: '',
        title: 'Colombian Shack',
        price: 45,
        location: {
            firstLine: 'shack 37',
            city: 'Bogota',
            code: 45632,
            country: 'Colombia'
        },
        contact: [080912345, 'marywinkle@gmail.com'],
        isAvailable: true
    },
    {
        image: '',
        title: 'Polish Cottage',
        price: 30,
        location: {
            firstLine: 'no 23',
            city: 'Gdansk',
            code: 343903,
            country: 'Poland'
        },
        contact: [09092437898, 'garydavis@hotmail.com'],
        isAvailable: false
    },
    {
        image: '',
        title: 'London Flat',
        price: 25,
        location: {
            firstLine: 'flat 15',
            city: 'London',
            code: 35433,
            country: 'United Kingdom'
        },
        contact: [09086752459, 'andyluger@aol.com'],
        isAvailable: true
    }
];
populateUser(you.isReturning, you.firstName);
var authorityStatus;
function showDetails(authorityStatus, element, price) {
    if (authorityStatus) {
        var priceDisplay = document.createElement('div');
        priceDisplay.innerHTML = price.toString() + '/night';
        element.appendChild(priceDisplay);
    }
}
//Add the properties
for (var i = 0; i < properties.length; i++) {
    var card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = properties[i].title;
    var image = document.createElement('img');
    image.setAttribute('src', properties[i].image);
    card.appendChild(image);
    propertyContainer.appendChild(card);
    showDetails(you.permissions, card, properties[i].price);
}
// Place, Time, Weather (celsius)
var currentLocation = ['Lagos', '17:10', 28];
footer.innerHTML = "".concat(currentLocation[0], " ").concat(currentLocation[1], " ").concat(currentLocation[2], "\u00B0C");
function add(firstValue, secondValue) {
    var result;
    if (typeof firstValue === 'number' && typeof secondValue === 'number') {
        result = firstValue + secondValue;
    }
    if (typeof firstValue === 'string' && typeof secondValue === 'string') {
        result = firstValue + ' ' + secondValue;
    }
    if (typeof firstValue === 'number' && typeof secondValue === 'string') {
        console.log('cannot perform this addition');
    }
    if (typeof firstValue === 'string' && typeof secondValue === 'number') {
        console.log('cannot perform this addition');
    }
}
function addValues(firstValue, secondValue) {
    return firstValue + secondValue;
}
