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
const propertyContainer = document.querySelector('.properties')

const reviews: {
    name: string;
    stars: number;
    loyaltyUser: boolean;
    date: string;
}[] = [
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

function populateUser(isReturning: boolean, userName: string) {
    if (isReturning){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
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

// Array of Properties
const properties : {
    image: string;
    title: string;
    price: number;
    location: {
        firstLine: string;
        city: string;
        code: number;
        country: string;
    };
    contact: string;
    isAvailable: boolean;
}[] = [
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
            country: 'United Kingdom',
        },
        contact: 'andyluger@aol.com',
        isAvailable: true
    }
]

populateUser(you.isReturning, you.firstName)

//Add the properties
for (let i = 0; i < properties.length; i++) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = properties[i].title
    const image = document.createElement('img')
    image.setAttribute('src', properties[i].image)
    card.appendChild(image)
    propertyContainer.appendChild(card)
}