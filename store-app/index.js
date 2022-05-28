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
var returningUserDisplay = document.querySelector('#returning-user');
var userNameDisplay = document.querySelector('#user');
var reviewTotalDisplay = document.querySelector('#reviews');
var propertyContainer = document.querySelector('.properties');
var footer = document.querySelector('.footer');
var GOLD_USER = 'Gold User';
var BRONZE_USER = 'Bronze User';
var SILVER_USER = 'Silver User';
var UserTypes;
(function (UserTypes) {
    UserTypes[UserTypes["GOLD"] = 0] = "GOLD";
    UserTypes[UserTypes["SILVER"] = 1] = "SILVER";
    UserTypes[UserTypes["BRONZE"] = 2] = "BRONZE";
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
function totalReviews(value, visitor, isLoyaltyUser) {
    reviewTotalDisplay.innerHTML = "Review Total: ".concat(value.toString(), ", Latest Visitor: ").concat(visitor, " ").concat(isLoyaltyUser === UserTypes.GOLD ? '⭐️' : '', " ");
}
function formatDate(date) {
    return date.split('-').reverse().join('-');
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
totalReviews(reviews.length, getLatestVisitorData(reviews)['name'], getLatestVisitorData(reviews)['loyaltyUser']);
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
var ADMIN = 'admin';
var READ_ONLY = 'read_only';
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 0] = "ADMIN";
    Roles[Roles["READ_ONLY"] = 1] = "READ_ONLY";
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
        price: 34,
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
        price: 23,
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
//Add the properties
for (var i = 0; i < properties.length; i++) {
    var card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = properties[i].title;
    var image = document.createElement('img');
    image.setAttribute('src', properties[i].image);
    card.appendChild(image);
    propertyContainer.appendChild(card);
}
// Place, Time, Weather (celsius)
var currentLocation = ['Lagos', '17:10', 28];
footer.innerHTML = "".concat(currentLocation[0], " ").concat(currentLocation[1], " ").concat(currentLocation[2], "\u00B0C");
