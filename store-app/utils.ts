// Add the "export" keyword when you want to use these functions after sorting out previous `require` errors

// function totalReviews(value: number, visitor: string, isLoyaltyUser: UserTypes) {
//     reviewTotalDisplay.innerHTML = `Review Total: ${value.toString()}, Latest Visitor: ${visitor} ${isLoyaltyUser === UserTypes.GOLD ? '⭐️' : '' } `;
// }

// function formatDate(date: string) {
//     return date.split('-').reverse().join('-')
// }

// function getLatestVisitorData(reviews: any[]) {
//     let arrayOfDates = []
//     let latestVisitorObject = {};
//     reviews.map(review => {
//         if(review['date']) {
//             arrayOfDates.push(formatDate(review['date']))
//         }
//     })

//     let convertedDates: any = arrayOfDates.map(date => new Date(date))
//     const latestDate = new Date(Math.max(...convertedDates)).getUTCDate()
//     const convLatestDate = latestDate.toString().length === 1 ? `0${latestDate}` : latestDate.toString()

//     reviews.map(review => {
//         if (review['date']) {
//             let splittedDate = review['date'].split('-')
//             if (splittedDate[0] === convLatestDate) {
//                 latestVisitorObject = review
//             }
//         }
//     })

//     return latestVisitorObject;
// }

// function populateUser(isReturning: boolean, userName: string) {
//     if (isReturning){
//         returningUserDisplay.innerHTML = 'back'
//     }
//     userNameDisplay.innerHTML = userName
// }