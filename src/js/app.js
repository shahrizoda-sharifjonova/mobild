import * as functions from "./modules/functions.js";

functions.isWebp();

// import Swiper, { Navigation, Pagination } from 'swiper';

// const swiper = new Swiper();

const img = document.querySelector('.intro__img');
const right = document.querySelector('.intro__right');

window.addEventListener('resize', (e)=>{
    if(window.innerWidth <= 576){
        const h = img.clientHeight / 2 + 10
        right.style.paddingTop = `${h}px`
        console.log(right )
    }
    else if(window.innerWidth > 576 && window.innerWidth <= 1400){
        right.style.paddingTop = '166px'
    }
    else{
        right.style.paddingTop = '0'
    }
})
window.addEventListener('load', (e)=>{
    if(window.innerWidth <= 576){
        const h = img.clientHeight / 2 + 10
        right.style.paddingTop = `${h}px`
        console.log(right )
    }
    else if(window.innerWidth > 576 && window.innerWidth <= 1400){
        right.style.paddingTop = '166px'
    }
    else{
        right.style.paddingTop = '0'
    }
})