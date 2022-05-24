// Number Types mini-challenge
// Write a function to show total number of reviews that will only accept numbers and attend to all 'any' TypeScript weakness flags.
// String Types mini-challenge
// Write a function that will display the most recent reviewers name next to the review total, making sure to assign a type to the parameter, to prevent unwanted behaviour.
var reviewTotalDisplay = document.querySelector('#reviews');
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
function totalReviews(value, visitor) {
    reviewTotalDisplay.innerHTML = "Review Total: ".concat(value.toString(), ", Latest Visitor: ").concat(visitor);
}
function formatDate(date) {
    return date.split('-').reverse().join('-');
}
function getLatestDate(reviews) {
    var arrayOfDates = [];
    var latestVisitor = '';
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
                latestVisitor = review['name'];
            }
        }
    });
    return latestVisitor;
}
getLatestDate(reviews);
totalReviews(reviews.length, getLatestDate(reviews));
