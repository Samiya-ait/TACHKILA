//buttons ajouter,modal(annuler,x)

const ajoutModal = document.querySelector('#ajouterBtn')
const pop = document.querySelector('#modal')
const annuler = document.querySelector('.btn-annuler')
// const ajoutPlayer = document.querySelector('btn-ajouter')

ajoutModal.addEventListener('click', () => {
    pop.classList.add('open-modal')
})

annuler.addEventListener('click', () => {
    pop.classList.remove('open-modal')
})


//players list
const playerList = document.querySelector('.playerList')

const nom = document.querySelector('#name')
const number = document.querySelector('#num')
const posts = document.querySelectorAll('input[name="poste"]')



const form = document.querySelector('form')
form.addEventListener('submit', (event) => {
    event.preventDefault()

    const players = [];
    let playerPost;
    for (const post of posts) {
        if (post.checked) {
            playerPost = post.value;
            break;
        }
    }


    const playerInfo = {
        name: nom.value,
        post: playerPost,
        number: number.value
    }

    players.push(playerInfo);


    const container = document.createElement("div")
    container.classList.add("flex,width-full,height-auto")


    const info_container = document.createElement("div")
    info_container.classList.add("flex")


    const nbr_container = document.createElement("p")
    nbr_container.textContent = (playerInfo.number)
    nbr_container.classList.add("rounded-lg")


    const nomPost_container = document.createElement("div")
    nomPost_container.classList.add('flex', 'flex-col')

    const nom_container = document.createElement("p")
    nom_container.textContent = (playerInfo.name)

    const post_container = document.createElement("p")
    post_container.textContent = (playerInfo.post)



    nomPost_container.append(nom_container, post_container)
    // nbr_container.append(nomPost_container)
    info_container.append(nbr_container, nomPost_container)
    container.append(info_container)
    playerList.append(container)

    // form.reset();
    // pop.classList.remove('open-modal')

})




form.addEventListener('submit', function (event) {
    if (event.target.id == 'name') {
        validateName;
    } else if (event.target.id == 'num') {
        validateNbr;
    }

})


function validateName() {
    const name = document.querySelector('#name')
    const mssg_err = document.querySelector('#errName')
    const nm = name.value.trim()

    if (nm === "") {
        mssg_err.textContent = "le champ ne peut pas etre vide";

    } else {
        mssg_err.textContent = '';

    }
}



function validateNbr() {
    const number = document.querySelector('#num')
    const mssg_err = document.querySelector('#errNb')
    const nbr = number.value.trim()

    if (nbr === "") {
        mssg_err.textContent = "le champ ne peut pas etre vide";
    } else {
        mssg_err.textContent = '';
    }
}
function validatePost() {
    const mssg_err = document.querySelector('#errpost')
    const post_checked = document.querySelector('input[name="poste"]:checked');
    if (!post_checked) {
        mssg_err.textContent = "il faut selectionner un post";
    } else {
        mssg_err.textContent = '';
    }
}



form.addEventListener('submit', function (e) {
    e.preventDefault();

    validateName();
    validateNbr();
    validatePost()


})