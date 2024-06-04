$(function () {
	const list = document.querySelector('.product__menu')
	const items = document.querySelectorAll('.product__card')
	const listItems = document.querySelectorAll('.product__btn')

	function filter() {
		list.addEventListener('click', (event) => {
			// Найти ближайший элемент с классом 'product__btn'
			const target = event.target.closest('.product__btn')
			if (!target) return

			const targetId = target.dataset.id

			// Убедиться, что клик был по кнопке или её дочернему элементу
			listItems.forEach((listItem) =>
				listItem.classList.remove('product__btn--active')
			)
			target.classList.add('product__btn--active')

			switch (targetId) {
				case 'burgers':
				case 'pizza':
				case 'sandwiches':
				case 'asian-cuisine':
				case 'sets':
					getItems(targetId)
					break
			}
		})
	}

	function getItems(className) {
		items.forEach((item) => {
			if (item.classList.contains(className)) {
				item.style.display = 'flex'
			} else {
				item.style.display = 'none'
			}
		})
	}

	// Изначально показываем бургеры и устанавливаем активный класс на кнопку бургеров
	getItems('burgers')
	const initialActiveButton = document.querySelector('[data-id="burgers"]')
	if (initialActiveButton) {
		initialActiveButton.classList.add('product__btn--active')
	}

	filter()
})
