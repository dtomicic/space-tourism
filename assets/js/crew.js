const LINK = "assets/js/data/data.json";
const PIC = document.getElementById('crewPicture');
const ROLE = document.getElementById('crewRole');
const NAME = document.getElementById('crewName');
const BIO = document.getElementById('crewBio');
const SELECTOR = document.getElementsByClassName('crew__mainTextSelectorItem');



window.onload = () => {
    loadItem();
}


document.querySelectorAll('.crew__mainTextSelectorItem')
.forEach(element => {
    element.addEventListener('click', () => {
        document.querySelector('.selectorCurrent').classList.remove('selectorCurrent');
        element.classList.add('selectorCurrent');
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
        console.log(data.crew[0].name);
        console.log(data.destinations[0].images.webp);
        if(SELECTOR[0].classList.contains('selectorCurrent')){
            ROLE.innerHTML = `${data.crew[0].role}`;
            PIC.src = data.crew[0].images.webp;
            PIC.alt = 'Picture of Douglas Hurley';
            NAME.innerHTML = `${data.crew[0].name}`;
            BIO.innerHTML = `${data.crew[0].bio}`;
        }
        else if(SELECTOR[1].classList.contains('selectorCurrent')){
            ROLE.innerHTML = `${data.crew[1].role}`;
            PIC.src = data.crew[1].images.webp;
            PIC.alt = 'Picture of Mark Shuttleworth';
            NAME.innerHTML = `${data.crew[1].name}`;
            BIO.innerHTML = `${data.crew[1].bio}`;
        }
        else if(SELECTOR[2].classList.contains('selectorCurrent')){
            ROLE.innerHTML = `${data.crew[2].role}`;
            PIC.src = data.crew[2].images.webp;
            PIC.alt = 'Picture of Victor Glover';
            NAME.innerHTML = `${data.crew[2].name}`;
            BIO.innerHTML = `${data.crew[2].bio}`;
        }
        else if(SELECTOR[3].classList.contains('selectorCurrent')){
            ROLE.innerHTML = `${data.crew[3].role}`;
            PIC.src = data.crew[3].images.webp;
            PIC.alt = 'Picture of Anousheh Ansari';
            NAME.innerHTML = `${data.crew[3].name}`;
            BIO.innerHTML = `${data.crew[3].bio}`;
        };
    });
}

const loadItem = () => {
    fetch(LINK)
    .then (response => {
    return response.json();
    })
    .then(data => {
        ROLE.innerHTML = `${data.crew[0].role}`;
        PIC.src = data.crew[0].images.webp;
        PIC.alt = 'Picture of Douglas Hurley';
        NAME.innerHTML = `${data.crew[0].name}`;
        BIO.innerHTML = `${data.crew[0].bio}`;
    })
}