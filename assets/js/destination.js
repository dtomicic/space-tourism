const LINK = "assets/js/data/data.json";


const LINES = document.getElementsByClassName('destination__choiceItemLine');
const ITEMS = document.getElementsByClassName('destination__choiceItem');
console.log(LINES);
console.log(document.querySelectorAll('.destination__choiceItem'));
const HEADER = document.getElementById('planetHeader');
const PICTURE = document.getElementById('planetPicture');
const DESC = document.getElementById('planetDesc');
const DIST = document.getElementById('planetDistance');
const TRAVEL = document.getElementById('planetTime');


window.onload = () => {
    loadItem();
}


document.querySelectorAll('.destination__choiceItem')
.forEach(element => {
    element.addEventListener('click', () => {
        document.querySelector('.activeChoice').classList.remove('activeChoice');
        document.querySelector('.currentItem').classList.remove('currentItem');
        element.classList.add('currentItem');
        checkItem();
    })
})







// Functions 
const checkItem = () => {
    fetch(LINK)
    .then (response => {
    return response.json();
    })
    .then(data => {
        console.log(data.destinations[0].images.webp);
        if(ITEMS[0].classList.contains('currentItem')){
            LINES[0].classList.add('activeChoice');
            HEADER.innerHTML = `${data.destinations[0].name}`;
            PICTURE.src = data.destinations[0].images.webp;
            PICTURE.alt = 'Picture of the Moon';
            DESC.innerHTML = `${data.destinations[0].description}`;
            DIST.innerHTML = `${data.destinations[0].distance}`;
            TRAVEL.innerHTML = `${data.destinations[0].travel}`;
        }
        else if(ITEMS[1].classList.contains('currentItem')){
            LINES[1].classList.add('activeChoice');
            HEADER.innerHTML = `${data.destinations[1].name}`;
            PICTURE.src = data.destinations[1].images.webp;
            PICTURE.alt = 'Picture of the Moon';
            DESC.innerHTML = `${data.destinations[1].description}`;
            DIST.innerHTML = `${data.destinations[1].distance}`;
            TRAVEL.innerHTML = `${data.destinations[1].travel}`;
        }
        else if(ITEMS[2].classList.contains('currentItem')){
            LINES[2].classList.add('activeChoice');
            HEADER.innerHTML = `${data.destinations[2].name}`;
            PICTURE.src = data.destinations[2].images.webp;
            PICTURE.alt = 'Picture of the Moon';
            DESC.innerHTML = `${data.destinations[2].description}`;
            DIST.innerHTML = `${data.destinations[2].distance}`;
            TRAVEL.innerHTML = `${data.destinations[2].travel}`;
        }
        else if(ITEMS[3].classList.contains('currentItem')){
            LINES[3].classList.add('activeChoice');
            HEADER.innerHTML = `${data.destinations[3].name}`;
            PICTURE.src = data.destinations[3].images.webp;
            PICTURE.alt = 'Picture of the Moon';
            DESC.innerHTML = `${data.destinations[3].description}`;
            DIST.innerHTML = `${data.destinations[3].distance}`;
            TRAVEL.innerHTML = `${data.destinations[3].travel}`;
        };
    });
}

const loadItem = () => {
    fetch(LINK)
    .then (response => {
    return response.json();
    })
    .then(data => {
        console.log(data.destinations[0].images.webp);
        LINES[0].classList.add('activeChoice');
        HEADER.innerHTML = `${data.destinations[0].name}`;
        PICTURE.src = data.destinations[0].images.webp;
        PICTURE.alt = 'Picture of the Moon';
        DESC.innerHTML = `${data.destinations[0].description}`;
        DIST.innerHTML = `${data.destinations[0].distance}`;
        TRAVEL.innerHTML = `${data.destinations[0].travel}`;
    })
}