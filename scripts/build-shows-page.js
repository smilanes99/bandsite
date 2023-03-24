

const shows = [
    {   dateTitle: "Date",
        date: 'Mon Sept 06 2021',
        venueTitle: "Venue",
        venue: 'Madison Square Garden',
        locationTitle: "Location",
        location: 'San Francisco, CA'
        
    },
    {
        dateTitle: "Date",
        date: 'Tue Sept 21 2021',
        venueTitle: "Venue",
        venue: 'Pier 3 East',
        locationTitle: "Location",
        location: 'San Francisco, CA'
    },
    {
        dateTitle: "Date",
        date: 'Fri Oct 15 2021',
        venueTitle: "Venue",
        venue: 'View Lounge',
        locationTitle: "Location",
        location: 'San Francisco, CA'
    },
    {
        dateTitle: "Date",
        date: 'Sat Nov 06 2021',
        venueTitle: "Venue",
        venue: 'Hyatt Agency',
        locationTitle: "Location",
        location: 'San Francisco, CA'
    },
    {
        dateTitle: "Date",
        date: 'Fri Nov 26 2021',
        venueTitle: "Venue",
        venue: 'Moscow Center',
        locationTitle: "Location",
        location: 'San Francisco, CA'
    },
    {
        dateTitle: "Date",
        date: 'Wed Dec 15 2021',
        venueTitle: "Venue",
        venue: 'Press Club',
        locationTitle: "Location",
        location: 'San Francisco, CA'
    },
];

console.log(shows);

// Function to create show cards
const showSelector = document.querySelector (".shows");
const showSection = document.createElement ("section");
showSelector.appendChild(showSection);

showSection.classList.add ("showSection")

showCards(shows)

// function showCards(showsArray) {
    

//     for (let i = 0; i < showsArray.length; i++) {
//         const card= document.createElement('div');
//         card.classList.add('card');
//         showSection.appendChild(card)
//     }
    function showCards(showsArray) {
        for (let i = 0; i < showsArray.length; i++) {
            const card = document.createElement('div');
            card.classList.add('card');
    
            const dateElement = document.createElement('p');
            dateElement.classList.add('date');
            dateElement.textContent = showsArray[i].date;
    
            const venueElement = document.createElement('p');
            venueElement.classList.add('venue');
            venueElement.textContent = showsArray[i].venue;
    
            const locationElement = document.createElement('p');
            locationElement.classList.add('location');
            locationElement.textContent = showsArray[i].location;

            const venueTitleElement = document.createElement('p');
            venueTitleElement.classList.add('venueTitle');
            venueTitleElement.textContent = showsArray[i].venueTitle;
            
            const dateTitleElement = document.createElement('p');
            dateTitleElement.classList.add('dateTitle');
            dateTitleElement.textContent = showsArray[i].dateTitle;
           
            const locationTitleElement = document.createElement('p');
            locationTitleElement.classList.add('locationTitle');
            locationTitleElement.textContent = showsArray[i].locationTitle;

            const buttonElement = document.createElement('button');
            buttonElement.classList.add('button');
            buttonElement.textContent = 'BUY TICKETS';
    
            card.appendChild(dateTitleElement);
            card.appendChild(dateElement);
            card.appendChild(venueTitleElement);
            card.appendChild(venueElement);
            card.appendChild(locationTitleElement);
            card.appendChild(locationElement);
            card.appendChild(buttonElement);
    
            showSection.appendChild(card);
        }
    }
    showCards(shows);