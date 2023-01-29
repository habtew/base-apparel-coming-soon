const img = document.querySelector('.hero-image')
const form = document.querySelector('form')
const mql = window.matchMedia('(min-width: 500px)')
function changeHeroImage(){
    if(mql.matches){
        img.src = './images/hero-desktop.jpg'
    }
    else{
        img.src = './images/hero-mobile.jpg'
    }
}

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const input = document.querySelector('.user-input')
    const regex = /\@/gi
    const errorImage = document.querySelector('.error-image')
    const errorMessage =document.querySelector('.error-message')
    if(input.value && regex.test(input.value)){
       form.reset()
       errorImage.classList.add('none')
       errorMessage.textContent = 'Success'
    }
    else{
        errorMessage.textContent = 'please provide valid email'
        errorImage.classList.remove('none')
    }
})


changeHeroImage()
mql.addListener(changeHeroImage)