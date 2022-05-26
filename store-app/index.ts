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

const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')
const reviewTotalDisplay = document.querySelector('#reviews')

const reviews = [
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
]

function totalReviews(value: number, visitor: string, isLoyaltyUser: boolean) {
    reviewTotalDisplay.innerHTML = `Review Total: ${value.toString()}, Latest Visitor: ${visitor} ${isLoyaltyUser === true ? '⭐️' : '' } `;
}

function formatDate(date: string) {
    return date.split('-').reverse().join('-')
}

function getLatestVisitorData(reviews: any[]) {
    let arrayOfDates = []
    let latestVisitorObject = {};
    reviews.map(review => {
        if(review['date']) {
            arrayOfDates.push(formatDate(review['date']))
        }
    })

    let convertedDates: any = arrayOfDates.map(date => new Date(date))
    const latestDate = new Date(Math.max(...convertedDates)).getUTCDate()
    const convLatestDate = latestDate.toString().length === 1 ? `0${latestDate}` : latestDate.toString()

    reviews.map(review => {
        if (review['date']) {
            let splittedDate = review['date'].split('-')
            if (splittedDate[0] === convLatestDate) {
                latestVisitorObject = review
            }
        }
    })

    return latestVisitorObject;
}

getLatestVisitorData(reviews)

totalReviews(
    reviews.length, 
    getLatestVisitorData(reviews)['name'], 
    getLatestVisitorData(reviews)['loyaltyUser']
)

const you: {
    firstName: string;
    lastName: string;
    isReturning: boolean;
    age: number;
    // stayedAt: string[];
    stayedAt: (string | number)[];
} = {
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
}


function populateUser(isReturning: boolean, userName: string) {
    if (isReturning){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}

populateUser(you.isReturning, you.firstName)