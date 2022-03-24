const LINK = "assets/js/data/data.json";
const PICLANDSCAPE = document.getElementById('pictureLandscape');
const PICPORTRAIT = document.getElementById('picturePortrait');
const TECHNAME = document.getElementById('techName');
const TECHBIO = document.getElementById('techBio');
const SELECTOR = document.getElementsByClassName('tech__mainTextSelectorItem');






window.onload = () => {
    loadItem();
}


document.querySelectorAll('.tech__mainTextSelectorItem')
.forEach(element => {
    element.addEventListener('click', () => {
        document.querySelector('.activeSelector').classList.remove('activeSelector');
        element.classList.add('activeSelector');
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
        if(SELECTOR[0].classList.contains('activeSelector')){
            TECHNAME.innerHTML = `${data.technology[0].name}`;
            TECHBIO.innerHTML = `${data.technology[0].description}`;
            PICLANDSCAPE.src = data.technology[0].images.landscape;
            PICPORTRAIT.src = data.technology[0].images.portrait;
        }
        else if(SELECTOR[1].classList.contains('activeSelector')){
            TECHNAME.innerHTML = `${data.technology[1].name}`;
            TECHBIO.innerHTML = `${data.technology[1].description}`;
            PICLANDSCAPE.src = data.technology[1].images.landscape;
            PICPORTRAIT.src = data.technology[1].images.portrait;
        }
        else if(SELECTOR[2].classList.contains('activeSelector')){
            TECHNAME.innerHTML = `${data.technology[2].name}`;
            TECHBIO.innerHTML = `${data.technology[2].description}`;
            PICLANDSCAPE.src = data.technology[2].images.landscape;
            PICPORTRAIT.src = data.technology[2].images.portrait;
        }
    });
}

const loadItem = () => {
    fetch(LINK)
    .then (response => {
    return response.json();
    })
    .then(data => {
        console.log(data.technology[0].images.landscape);
        TECHNAME.innerHTML = `${data.technology[0].name}`;
        TECHBIO.innerHTML = `${data.technology[0].description}`;
        PICLANDSCAPE.src = data.technology[0].images.landscape;
        PICPORTRAIT.src = data.technology[0].images.portrait;
    })
}