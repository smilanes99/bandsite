const apiKey = `?api_key=5a3fa11d-8c58-4c11-bd97-4c292d09c0d6`;
const apiBaseUrl = 'https://project-1-api.herokuapp.com/';

let shows = []

axios
    .get (`${apiBaseUrl}showdates${apiKey}`) 
    .then ((response) => {
    shows = response.data;
    console.log(shows);
    showCards(shows);
    })
    .catch (error => {
    console.error(error);
    });

// Function to create show cards
const showSelector = document.querySelector (".shows");
const showSection = document.createElement ("section");
showSelector.appendChild(showSection);

showSection.classList.add ("showSection")

function showCards(showsArray) {
    for (let i = 0; i < showsArray.length; i++) {
        const card = document.createElement('div');
        card.classList.add('card');

        const dateElement = document.createElement('p');
        dateElement.classList.add('date');
        const dateObj = new Date(showsArray[i].date);
        const dateString = `${dateObj.getMonth() + 1}/${dateObj.getDate()}/${dateObj.getFullYear()}`;
        dateElement.textContent = dateString;

        const venueElement = document.createElement('p');
        venueElement.classList.add('venue');
        venueElement.textContent = showsArray[i].place;

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
    } }





      