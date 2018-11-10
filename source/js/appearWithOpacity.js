import isAnyPartOfElementInViewport from './isElementInViewport'

let items = document.querySelectorAll('.appear'),
	setAttributeForAppearingElements = (items) => {
		items.forEach((item) => {
			let items = item.querySelectorAll('.appear__item')

			items.forEach((item, index) => {
				item.setAttribute('data-cnt', index + 1)
			})
		})
	},
	checkForVisibility = (items) => {
		items.forEach((item) => {
			isAnyPartOfElementInViewport(item) ? item.classList.add('active') : false
		})
	}

setAttributeForAppearingElements(items)
checkForVisibility(items)
window.addEventListener('scroll', () => {
	checkForVisibility(items)
})