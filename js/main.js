const swiper = new Swiper('.channel-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      1900:{
        slidesPerView: 6
      },
      1600:{
        slidesPerView: 5
      },
      1300:{
        slidesPerView: 4
      },
      1100:{
        slidesPerView: 3
      },
      800:{
        slidesPerView: 2
      }
    },
    // Navigation arrows
    navigation: {
      nextEl: '.channel-button-next',
      prevEl: '.channel-button-prev',
      
    },
  });

const recommend = new Swiper('.channel-recommend', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      1600:{
        slidesPerView: 3
      },
      1110:{
        slidesPerView: 2
      }
    },
    // Navigation arrows
    navigation: {
      nextEl: '.recommend-button-next',
      prevEl: '.recommend-button-prev',
      
    },
  });

const recomm = new Swiper('.group-channel', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      1900:{
        slidesPerView: 6
      },
      1600:{
        slidesPerView: 5
      },
      1300:{
        slidesPerView: 4
      },
      1100:{
        slidesPerView: 3
      },
      800:{
        slidesPerView: 2
      }
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.group-button-next',
      prevEl: '.group-button-prev',
      
    },
  });
const searchButton = document.querySelector('.mobile-search');
const mobileSearch = document.querySelector('.input-group');

searchButton.addEventListener('click', () => {
  mobileSearch.classList.toggle('is-open');
});

if (document.documentElement.scrollWidth <= 440) {
  swiper.destroy();
  recommend.destroy();
  recomm.destroy();
}