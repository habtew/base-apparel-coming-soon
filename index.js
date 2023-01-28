const img = document.querySelector('.hero-image')
const mql = window.matchMedia('(min-width: 500px)')
function changeHeroImage(){
    if(mql.matches){
        img.src = './images/hero-desktop.jpg'
    }
    else{
        img.src = './images/hero-mobile.jpg'
    }
}

changeHeroImage()
mql.addEventListener('resize', changeHeroImage)