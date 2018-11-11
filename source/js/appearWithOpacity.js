import isAnyPartOfElementInViewport from './isElementInViewport'

let items = document.querySelectorAll('.appear'),
	setAttributeForAppearingElements = (items) => {

		for (let i = 0; i < items.length; i++) {
			let item = items[i].querySelectorAll('.appear__item')

			for (let i = 0; i < item.length; i++) {
				item[i].setAttribute('data-cnt', i + 1)
			}
		}
	},
	checkForVisibility = (items) => {
		for (let i = 0; i < items.length; i++) {
			isAnyPartOfElementInViewport(items[i]) || items[i].offsetTop < window.pageYOffset ? items[i].classList.add('active') : false
		}
	}

setAttributeForAppearingElements(items)
checkForVisibility(items)
window.addEventListener('scroll', () => {
	checkForVisibility(items)
})