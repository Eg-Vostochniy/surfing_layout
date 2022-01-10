$(function(){
    $('.header__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider__left" src="img/arrows-left.svg">',
        nextArrow: '<img class="slider-arrows slider__right" src="img/arrows-right.svg">',
        asNavFor: '.slider-dots'
    })

    $('.slider-dots').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider' 
    })

    $('.slider-map').slick({
        focusOnSelect: true,
        infinite: false,
        slidesToShow: 8,
        slidesToScroll: 8,
        arrows: false,
        asNavFor: '.surf-slider'
    })

    $('.surf-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider__left" src="img/arrows-left.svg">',
        nextArrow: '<img class="slider-arrows slider__right" src="img/arrows-right.svg">',
        asNavFor: '.slider-map'
    })

    $('.travel__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider__left" src="img/arrows-left.svg">',
        nextArrow: '<img class="slider-arrows slider__right" src="img/arrows-right.svg">',
    })
})


const pricing = document.getElementById('pricing'),
      count_nights = document.getElementById('count_nights'),
      count_guests = document.getElementById('count_guests'),
      count_price = document.getElementById('count_price'),
      input = pricing.querySelectorAll('input'),
      button = pricing.querySelectorAll('button'),
      count_nights_plus = document.getElementById('count_nights-plus'),
      count_nights_minus = document.getElementById('count_nights-minus'),
      count_guest_plus = document.getElementById('count_guests-plus'),
      count_guests_minus = document.getElementById('count_guests-minus')

count_nights_plus.addEventListener('click', changeInputNightsPlus)
count_nights_minus.addEventListener('click', changeInputNightsMinus)
count_guest_plus.addEventListener('click', changeInputGuestsPlus)
count_guests_minus.addEventListener('click', changeInputGuestsMinus)

function calculatePricing(){
    let price_night = 140
    const end_price = price_night * (strtoNum(count_nights) + strtoNum(count_guests))
    count_price.value = end_price
}

function changeInputNightsPlus(){
    if(count_nights.value < 15){
        count_nights.value++
        calculatePricing()
    }
}
function changeInputNightsMinus(){
    if(count_nights.value > 1){
        count_nights.value--
        calculatePricing()
    }
}

function changeInputGuestsPlus(){
    if(count_guests.value < 10){
        count_guests.value++
        calculatePricing()
    }
}

function changeInputGuestsMinus(){
    if(count_guests.value > 1){
        count_guests.value--
        calculatePricing()
    }
}

function strtoNum(str){
    if(str.value) return parseInt(str.value)
    else return 0
}

document.body.onload = function(){ 
const west_shore__map = document.querySelector('.west-shore__map'),
      south_shore__map = document.querySelector('.south-shore__map'),
      north_shore__map = document.querySelector('.north-shore__map'),
      east_shore__map = document.querySelector('.east-shore__map'),
      header__north = document.getElementById('header__north'),
      header__south = document.getElementById('header__south'),
      header__west = document.getElementById('header__west'),
      header__east = document.getElementById('header__east'),
      header__slider = document.querySelector('.header__slider'),
      slider__arrows = header__slider.querySelectorAll('.slider-arrows') 

for(item of slider__arrows){
    if(header__north.classList.contains('slick-active'))
        north_shore__map.classList.add('active')
    else north_shore__map.classList.remove('active')
    item.addEventListener('click', () => {
        mapIllusrate()
    })
}

function mapIllusrate(){
    const active = 'active'

    if(header__north.classList.contains('slick-active'))
        addClass(north_shore__map, active)
    else removeClass(north_shore__map, active)

    if(header__south.classList.contains('slick-active'))
        addClass(south_shore__map, active)
    else removeClass(south_shore__map, active)

    if(header__west.classList.contains('slick-active'))
        addClass(west_shore__map, active)
    else removeClass(west_shore__map, active)

    if(header__east.classList.contains('slick-active'))
        addClass(east_shore__map, active)
    else removeClass(east_shore__map, active)
}

function addClass(str, content){
    str.classList.add(content)
}

function removeClass(str, content){
    str.classList.remove(content)
}

}

