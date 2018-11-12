import Swiper from 'swiper'

const mySwiper = new Swiper('.swiper-container', {
	slidesPerView: 'auto',
	centeredSlides: true,
	loop: true
})

let slide = document.querySelectorAll('.swiper-slide')

for (let i = 0; i < slide.length; i++) {
	slide[i].addEventListener('click', (e) => {
		let current = e.target

		if (current.classList.contains('swiper-slide-prev')) {
			mySwiper.slidePrev()
		}

		if (current.classList.contains('swiper-slide-next')) {
			mySwiper.slideNext()
		}
	})
}