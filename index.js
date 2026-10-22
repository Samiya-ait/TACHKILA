const ajoutModal=document.querySelector('#ajouterBtn')
const pop=document.querySelector('#modal')
const annuler=document.querySelector('.btn-annuler')
const ajoutPlayer=document.querySelector('btn-ajouter')

ajoutModal.addEventListener('click', () => {
    pop.classList.add('open-modal')
})

annuler.addEventListener('click',()=>{
    pop.classList.remove('open-modal')
})

