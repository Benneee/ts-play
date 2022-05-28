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
var returningUserDisplay = document.querySelector('#returning-user');
var userNameDisplay = document.querySelector('#user');
var reviewTotalDisplay = document.querySelector('#reviews');
var propertyContainer = document.querySelector('.properties');
var reviews = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
    {
        name: 'Victor',
        stars: 4,
        loyaltyUser: true,
        date: '23-03-2022'
    }
];
function totalReviews(value, visitor, isLoyaltyUser) {
    reviewTotalDisplay.innerHTML = "Review Total: ".concat(value.toString(), ", Latest Visitor: ").concat(visitor, " ").concat(isLoyaltyUser === true ? '⭐️' : '', " ");
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
var you = {
    firstName: 'Bobby',
    lastName: 'Samuels',
    isReturning: true,
    age: 23,
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
        contact: 'marywinkle@gmail.com',
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
        contact: 'garydavis@hotmail.com',
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
        contact: 'andyluger@aol.com',
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
