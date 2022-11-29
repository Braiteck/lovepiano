document.addEventListener('DOMContentLoaded', function () {
	// Ширина окна для ресайза
	WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
	BODY = document.getElementsByTagName('body')[0]
	OVERLAY = document.querySelector('.overlay')


	// Основной слайдер на главной
	let mainSlider = document.querySelector('.main_slider .swiper')

	if (mainSlider) {
		new Swiper('.main_slider .swiper', {
			loop: true,
			speed: 750,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			}
		})
	}


	// Карусель товаров
	const productsSliders = [],
		products = document.querySelectorAll('.products .swiper')

	products.forEach(function (el, i) {
		el.classList.add('products_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			breakpoints: {
				0: {
					spaceBetween: 12,
					slidesPerView: 'auto'
				},
				480: {
					spaceBetween: 20,
					slidesPerView: 2
				},
				768: {
					spaceBetween: 30,
					slidesPerView: 3
				},
				1280: {
					spaceBetween: 30,
					slidesPerView: 4
				}
			},
			on: {
				init: swiper => setHeight(swiper.el.querySelectorAll('.product')),
				resize: swiper => {
					let products = swiper.el.querySelectorAll('.product')

					products.forEach(el => el.style.height = 'auto')

					setHeight(products)
				}
			}
		}

		productsSliders.push(new Swiper('.products_s' + i, options))
	})


	// Карусель товаров - удаление товара
	const productDelBtns = document.querySelectorAll('.products .product .del_btn')

	if (productDelBtns) {
		productDelBtns.forEach(el => {
			el.addEventListener('click', e => {
				e.preventDefault()

				el.closest('.swiper-slide').remove()

				productsSliders.forEach(slider => slider.updateSlides())
				productsSliders.forEach(slider => slider.updateProgress())

				// Сравнение товаров
				comparePositions()
			})
		})
	}


	// О сайте
	const aboutSliders = [],
		aboutInfo = document.querySelectorAll('.about_info .swiper')

	aboutInfo.forEach(function (el, i) {
		el.classList.add('about_info_s' + i)

		let options = {
			loop: false,
			speed: 500,
			spaceBetween: 24,
			slidesPerView: 1,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			}
		}

		aboutSliders.push(new Swiper('.about_info_s' + i, options))
	})


	// Карусель товаров
	const gallerySliders = [],
		gallery = document.querySelectorAll('.gallery .swiper')

	gallery.forEach(function (el, i) {
		el.classList.add('gallery_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			breakpoints: {
				0: {
					spaceBetween: 12,
					slidesPerView: 1
				},
				768: {
					spaceBetween: 12,
					slidesPerView: 3
				},
				1280: {
					spaceBetween: 30,
					slidesPerView: 3
				}
			}
		}

		gallerySliders.push(new Swiper('.gallery_s' + i, options))
	})


	// Страница товара
	const productThumbs = document.querySelector('.product_info .thumbs'),
		productImages = document.querySelector('.product_info .big')

	if (productThumbs && productImages) {
		const productThumbs = new Swiper('.product_info .thumbs .swiper', {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					slidesPerView: 'auto',
					direction: 'horizontal',
					spaceBetween: 8
				},
				768: {
					slidesPerView: 3,
					direction: 'vertical',
					spaceBetween: 8
				}
			}
		})

		new Swiper('.product_info .big .swiper', {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 24,
			slidesPerView: 1,
			preloadImages: false,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			thumbs: {
				swiper: productThumbs
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			}
		})
	}


	// Мини всплывающие окна
	const miniModalBtns = document.querySelectorAll('.mini_modal_btn'),
		miniModals = document.querySelectorAll('.mini_modal')

	miniModalBtns.forEach(el => {
		let eventName = ''

		el.classList.contains('on_hover')
			? eventName = 'mouseenter'
			: eventName = 'click'

		el.addEventListener(eventName, e => {
			e.preventDefault()

			const modalId = el.getAttribute('data-modal-id')

			if (el.classList.contains('active')) {
				el.classList.remove('active')
				miniModals.forEach(modal => modal.classList.remove('active'))

				if (el.closest('.search') || el.closest('.catalog')) {
					OVERLAY.classList.remove('show')
				}

				if (is_touch_device()) BODY.style = 'cursor: default;'
			} else {
				miniModalBtns.forEach(btn => btn.classList.remove('active'))
				el.classList.add('active')

				miniModals.forEach(modal => modal.classList.remove('active'))

				const modal = document.getElementById(modalId)

				modal.classList.add('active')

				if (el.closest('.search') || el.closest('.catalog')) {
					OVERLAY.classList.add('show')
				}

				if (is_touch_device()) BODY.style = 'cursor: pointer;'
			}
		})
	})

	// Закрываем всплывашку при клике за её пределами
	document.addEventListener('click', e => {
		if (!e.target.closest('.modal_cont')) {
			miniModals.forEach(modal => modal.classList.remove('active'))
			miniModalBtns.forEach(btn => btn.classList.remove('active'))

			OVERLAY.classList.remove('show')

			if (is_touch_device()) BODY.style = 'cursor: default;'
		}
	})

	// Закрываем всплывашку при уводе курсора мыши
	const catalogMiniModal = document.querySelector('.catalog')

	catalogMiniModal.addEventListener('mouseleave', e => {
		miniModals.forEach(modal => modal.classList.remove('active'))
		miniModalBtns.forEach(btn => btn.classList.remove('active'))

		OVERLAY.classList.remove('show')

		if (is_touch_device()) BODY.style = 'cursor: default;'
	})


	// Товар в корзину
	const buyBtns = document.querySelectorAll('.buy_btn')

	if (buyBtns) {
		buyBtns.forEach(el => {
			el.addEventListener('click', e => {
				e.preventDefault()

				el.classList.toggle('active')
			})
		})
	}


	// Фильтр - раскрытие/сворачивание
	const filterLabels = document.querySelectorAll('.filter .label')

	if (filterLabels) {
		filterLabels.forEach(el => {
			el.addEventListener('click', e => {
				e.preventDefault()

				el.classList.toggle('active')
			})
		})
	}


	// Фильтр - удаление выбранного
	const filterSelectedBtns = document.querySelectorAll('.filter_selected .btn')

	if (filterSelectedBtns) {
		filterSelectedBtns.forEach(el => {
			el.addEventListener('click', e => {
				el.closest('div').remove()
			})
		})
	}


	// Фильтр - выбор чего либо
	const filterCheckboxes = document.querySelectorAll('.filter .checkbox')

	if (filterCheckboxes) {
		filterCheckboxes.forEach(el => {
			el.addEventListener('click', e => {
				showLoader()
			})
		})
	}


	// Фильтр - диапазон цены
	const nonLinearSlider = document.getElementById('nonlinear')

	if (nonLinearSlider) {
		noUiSlider.create(nonLinearSlider, {
			connect: true,
			behaviour: 'tap',
			start: [200000, 400000],
			range: {
				'min': [0],
				'85%': [300000, 1000],
				'max': [1000000]
			}
		})

		let rangeNodes = [
			document.getElementById('range_from'),
			document.getElementById('range_to')
		]

		nonLinearSlider.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
			if (handle == 0) {
				rangeNodes[handle].value = 'от ' + parseInt(values[handle]).toLocaleString() + ' ₽'
			}

			if (handle == 1) {
				rangeNodes[handle].value = 'до ' + parseInt(values[handle]).toLocaleString() + ' ₽'
			}
		})
	}


	// Фильтр - сброс
	const filterResetBtn = document.querySelector('.products .empty .reset_btn'),
		filterResetBtn2 = document.querySelector('.filter .reset_btn'),
		filterForm = document.querySelector('.filter form')

	if (filterResetBtn) {
		filterResetBtn.addEventListener('click', e => {
			e.preventDefault()

			filterForm.reset()
			nonLinearSlider.noUiSlider.reset()
		})
	}

	if (filterResetBtn2) {
		filterResetBtn2.addEventListener('click', e => {
			e.preventDefault()

			let parent = e.target.closest('.filter'),
				inputs = parent.querySelectorAll('.checkbox input')

			inputs.forEach(input => input.removeAttribute('checked'))

			filterForm.reset()
			nonLinearSlider.noUiSlider.reset()
		})
	}


	// Фильтр - выбрать все/снять все
	const filterToggleAllBtn = document.querySelectorAll('.filter .toggle_all_btn')

	if (filterToggleAllBtn) {
		filterToggleAllBtn.forEach(el => {
			el.addEventListener('click', e => {
				let parent = el.closest('.data'),
					inputs = parent.querySelectorAll('.checkbox input')

				el.classList.toggle('active')

				el.classList.contains('active')
					? inputs.forEach(input => input.setAttribute('checked', true))
					: inputs.forEach(input => input.removeAttribute('checked'))

				showLoader()
			})
		})
	}


	// Сортировка
	const sortBtn = document.querySelector('.sort .btn')

	if (sortBtn) {
		sortBtn.addEventListener('click', e => {
			e.preventDefault()

			sortBtn.classList.toggle('up')
		})
	}


	// Изменение количества товара
	const amountMinusBtns = document.querySelectorAll('.amount .minus'),
		amountPlusBtns = document.querySelectorAll('.amount .plus'),
		amountInputs = document.querySelectorAll('.amount .input')

	if (amountMinusBtns) {
		amountMinusBtns.forEach(el => {
			el.addEventListener('click', e => {
				e.preventDefault()

				const parent = el.closest('.amount'),
					input = parent.querySelector('.input'),
					inputVal = parseFloat(input.value),
					minimum = parseFloat(input.getAttribute('data-minimum')),
					step = parseFloat(input.getAttribute('data-step')),
					unit = input.getAttribute('data-unit')

				if (inputVal > minimum) input.value = inputVal - step + unit
			})
		})
	}

	if (amountPlusBtns) {
		amountPlusBtns.forEach(el => {
			el.addEventListener('click', e => {
				e.preventDefault()

				const parent = el.closest('.amount'),
					input = parent.querySelector('.input'),
					inputVal = parseFloat(input.value),
					maximum = parseFloat(input.getAttribute('data-maximum')),
					step = parseFloat(input.getAttribute('data-step')),
					unit = input.getAttribute('data-unit')

				if (inputVal < maximum) input.value = inputVal + step + unit
			})
		})
	}

	if (amountInputs) {
		amountInputs.forEach(el => {
			el.addEventListener('keydown', () => {
				const maximum = parseInt(el.getAttribute('data-maximum'))

				setTimeout(() => {
					if (el.value == '' || el.value == 0) el.value = parseInt(el.getAttribute('data-minimum'))
					if (el.value > maximum) el.value = maximum
				})
			})
		})
	}


	// Оформление заказа - Доставка
	const deliveryMethods = document.querySelectorAll('.checkout_info .delivery_methods .checkbox.big')

	if (deliveryMethods) {
		deliveryMethods.forEach(el => {
			el.addEventListener('click', () => {
				deliveryMethods.forEach(btn => btn.classList.remove('active'))
				el.classList.add('active')
			})
		})
	}


	const mapDataCloseBtn = document.querySelector('.checkout_info .map .close_btn'),
		mapData = document.querySelector('.checkout_info .map .data')

	if (mapDataCloseBtn) {
		mapDataCloseBtn.addEventListener('click', e => {
			e.preventDefault()

			mapData.style.display = 'none'
		})
	}


	// Оформление заказа - Вреям доставки
	const timeOptionBtns = document.querySelectorAll('.time .mini_modal > *'),
		timeSelectBtns = document.querySelector('.time .select_btn'),
		timeSelect = document.querySelector('.time select')

	if (timeOptionBtns) {
		timeOptionBtns.forEach(el => {
			el.addEventListener('click', e => {
				e.preventDefault()

				timeOptionBtns.forEach(btn => btn.classList.remove('active'))
				el.classList.add('active')

				timeSelectBtns.innerHTML = el.innerHTML

				miniModals.forEach(modal => modal.classList.remove('active'))
				miniModalBtns.forEach(btn => btn.classList.remove('active'))

				timeSelect.value = el.getAttribute('data-value')
			})
		})
	}


	// Оформление заказа - Выбор доп. услуги
	const addServiceChecks = document.querySelectorAll('.checkout_info .add_services .checkbox')

	if (addServiceChecks) {
		addServiceChecks.forEach(el => {
			el.addEventListener('click', e => {
				if (e.target.classList.contains('checkbox')) {
					let index = el.getAttribute('data-index')

					let addService = document.querySelector('.order_info .add_service[data-index="' + index + '"]')

					addService.classList.toggle('hide')
				}
			})
		})
	}


	// Fancybox
	Fancybox.defaults.autoFocus = false
	Fancybox.defaults.trapFocus = false
	Fancybox.defaults.dragToClose = false
	Fancybox.defaults.placeFocusBack = false
	Fancybox.defaults.l10n = {
		CLOSE: "Закрыть",
		NEXT: "Следующий",
		PREV: "Предыдущий",
		MODAL: "Вы можете закрыть это модальное окно нажав клавишу ESC"
	}

	Fancybox.defaults.template = {
		closeButton: '<svg><use xlink:href="images/sprite.svg#ic_close"></use></svg>',
		spinner: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="25 25 50 50" tabindex="-1"><circle cx="50" cy="50" r="20"/></svg>',
		main: null
	}


	// Всплывающие окна
	const modalBtns = document.querySelectorAll('.modal_btn')

	if (modalBtns) {
		modalBtns.forEach(el => {
			el.addEventListener('click', e => {
				e.preventDefault()

				Fancybox.close()

				Fancybox.show([{
					src: document.getElementById(el.getAttribute('data-modal')),
					type: 'inline'
				}])
			})
		})
	}


	// Увеличение картинки
	Fancybox.bind('.fancy_img', {
		Image: {
			zoom: false,
		},
		Thumbs: {
			autoStart: false,
		}
	})


	// Плавная прокрутка к якорю
	const scrollBtns = document.querySelectorAll('.scroll_btn')

	if (scrollBtns) {
		scrollBtns.forEach(element => {
			element.addEventListener('click', e => {
				e.preventDefault()

				let anchor = element.getAttribute('data-anchor')

				document.getElementById(anchor).scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				}, 1000)
			})
		})
	}


	// Характеристики товара
	const productFeaturesTitles = document.querySelectorAll('.product_features .section .title')

	if (productFeaturesTitles) {
		productFeaturesTitles.forEach(el => {
			el.addEventListener('click', e => {
				if (WW < 1024) {
					e.preventDefault()

					el.classList.toggle('active')

					el.classList.contains('active')
						? el.nextElementSibling.style.display = 'block'
						: el.nextElementSibling.style.display = 'none'
				}
			})
		})
	}


	// Моб. меню
	const mobMenuBtn = document.querySelector('header .mob_menu_btn'),
		mobMenu = document.querySelector('.mob_menu'),
		mobMenuCloseBtn = document.querySelector('.mob_menu .close_btn')

	if (mobMenuBtn) {
		mobMenuBtn.addEventListener('click', e => {
			e.preventDefault()

			mobMenuBtn.classList.toggle('active')
			BODY.classList.toggle('menu_open')
			mobMenu.classList.toggle('show')
		})
	}

	if (mobMenuCloseBtn) {
		mobMenuCloseBtn.addEventListener('click', e => {
			e.preventDefault()

			mobMenuBtn.classList.toggle('active')
			BODY.classList.toggle('menu_open')
			mobMenu.classList.toggle('show')
		})
	}


	// Моб. каталог
	const mobCatalogLinks = document.querySelectorAll('.mob_menu .catalog_link'),
		mobCatalogBackBtns = document.querySelectorAll('.mob_menu .back .btn')

	if (mobCatalogLinks) {
		mobCatalogLinks.forEach(el => {
			el.addEventListener('click', e => {
				e.preventDefault()

				let sub = el.getAttribute('data-sub')

				document.querySelector('.mob_menu .step.' + sub).classList.add('show')
			})
		})
	}

	if (mobCatalogBackBtns) {
		mobCatalogBackBtns.forEach(el => {
			el.addEventListener('click', e => {
				e.preventDefault()

				el.closest('.step').classList.remove('show')
			})
		})
	}


	// Каталог выпадающий
	const categoriesLinks = document.querySelectorAll('header .catalog .categories a'),
		categoriesSubs = document.querySelectorAll('header .catalog .sub')

	if (categoriesLinks) {
		categoriesLinks.forEach(el => {
			el.addEventListener('mouseenter', e => {
				let index = Array.prototype.indexOf.call(categoriesLinks, el)

				categoriesLinks.forEach(link => link.classList.remove('active'))
				el.classList.add('active')

				categoriesSubs.forEach(sub => sub.style.display = 'none')
				categoriesSubs.item(index).style.display = 'block'
			})
		})
	}


	// Корзина
	const cartDeleteBtns = document.querySelectorAll('.cart_info .product .delete_btn'),
		productBackBtns = document.querySelectorAll('.products .product .back_btn')

	if (cartDeleteBtns) {
		cartDeleteBtns.forEach(el => {
			el.addEventListener('click', e => {
				el.closest('.product').remove()
			})
		})
	}

	if (productBackBtns) {
		productBackBtns.forEach(el => {
			el.addEventListener('click', e => {
				el.closest('.product').remove()
			})
		})
	}


	// Оформление заказа - удаление товара
	const orderDeleteBtns = document.querySelectorAll('.order_info .product .delete_btn')

	if (orderDeleteBtns) {
		orderDeleteBtns.forEach(el => {
			el.addEventListener('click', e => {
				el.closest('.product').remove()
			})
		})
	}


	// Залипание блока
	if (WW > 1023) {
		const Sticky = new hcSticky('.sticky')
	}


	// Верхний баннер
	const bannerCloseBtn = document.querySelector('.banner_top .close_btn')

	if (bannerCloseBtn) {
		bannerCloseBtn.addEventListener('click', e => {
			e.preventDefault()

			bannerCloseBtn.closest('.banner_top').remove()
		})
	}


	// Маска ввода
	const phoneInputs = document.querySelectorAll('input[type=tel]')

	if (phoneInputs) {
		phoneInputs.forEach(el => {
			IMask(el, {
				mask: '+{7} (000) 000-00-00',
				lazy: false,
			})
		})
	}


	// Cookies
	const cookies = document.querySelector('.cookies')

	if (cookies) {
		cookies.querySelector('.close_btn').addEventListener('click', e => {
			e.preventDefault()

			cookies.remove()
		})
	}


	// Избранные товары
	const favoritesDeleteBtns = document.querySelectorAll('.favorites .product .delete_btn')

	if (favoritesDeleteBtns) {
		favoritesDeleteBtns.forEach(el => {
			el.addEventListener('click', e => {
				el.closest('.product').remove()
			})
		})
	}


	// Подъем/Сборка - Поиск
	const additionalServiceSearch = document.querySelector('.additional_service .search'),
		additionalServiceSearchForm = additionalServiceSearch.querySelector('form'),
		additionalServiceSearchClearBtn = additionalServiceSearch.querySelector('.clear_btn'),
		additionalServiceSearchTips = additionalServiceSearch.querySelector('.tips'),
		additionalServiceSearchTip = additionalServiceSearch.querySelector('.tip')

	if (additionalServiceSearch) {
		// Ввод жанных в поле
		additionalServiceSearch.querySelector('.input').addEventListener('keyup', e => {
			setTimeout(() => {
				e.target.value.length
					? e.target.classList.add('active')
					: e.target.classList.remove('active')

				e.target.value.length
					? additionalServiceSearchTips.classList.add('show')
					: additionalServiceSearchTips.classList.remove('show')
			})
		})

		// Очистка поля
		additionalServiceSearchClearBtn.addEventListener('click', e => {
			e.preventDefault()

			additionalServiceSearch.querySelector('.input').value = ''
			additionalServiceSearch.querySelector('.input').classList.remove('active')

			additionalServiceSearchTips.classList.remove('show')
		})

		// Выбор подсказки
		additionalServiceSearchTip.addEventListener('click', e => {
			e.preventDefault()

			additionalServiceSearchTips.classList.remove('show')
		})

		// Отправка формы
		additionalServiceSearchForm.addEventListener('submit', e => {
			e.preventDefault()
		})
	}
})



window.addEventListener('load', function () {
	// Выравнивание элементов в сетке
	document.querySelectorAll('.stocks .row').forEach(el => {
		let styles = getComputedStyle(el)

		stocksHeight(el, parseInt(styles.getPropertyValue('--stocks_count')))
	})

	document.querySelectorAll('.catalog_info .row').forEach(el => {
		let styles = getComputedStyle(el)

		catalogHeight(el, parseInt(styles.getPropertyValue('--catalog_count')))
	})


	// Сравнение товаров
	const compareInfo = document.querySelector('.compare_info')

	if (compareInfo) {
		comparePositions()
	}
})



window.addEventListener('resize', function () {
	let windowW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth

	if (typeof WW !== 'undefined' && WW != windowW) {
		// Моб. версия
		if (!firstResize) {
			document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'

			if (windowW < 375) document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'

			firstResize = true
		} else {
			firstResize = false
		}


		// Выравнивание элементов в сетке
		document.querySelectorAll('.stocks .row').forEach(el => {
			let styles = getComputedStyle(el)

			stocksHeight(el, parseInt(styles.getPropertyValue('--stocks_count')))
		})

		document.querySelectorAll('.catalog_info .row').forEach(el => {
			let styles = getComputedStyle(el)

			catalogHeight(el, parseInt(styles.getPropertyValue('--catalog_count')))
		})


		// Сравнение товаров
		const compareInfo = document.querySelector('.compare_info')

		if (compareInfo) {
			comparePositions()
		}


		// Перезапись ширины окна
		WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
	}
})



// Выравнивание товаров
function stocksHeight(context, step) {
	let start = 0,
		finish = step,
		stocks = [...context.querySelectorAll('.stock')],
		stocksDesc = context.querySelectorAll('.desc'),
		stocksTerms = context.querySelectorAll('.terms'),
		i = 0

	stocksDesc.forEach(el => el.style.height = 'auto')
	stocksTerms.forEach(el => el.style.height = 'auto')

	stocks.forEach(el => {
		stocks.slice(start, finish).forEach(el => el.setAttribute('nodeList', i))

		setHeight(context.querySelectorAll('[nodeList="' + i + '"] .desc'))
		setHeight(context.querySelectorAll('[nodeList="' + i + '"] .terms'))

		start = start + step
		finish = finish + step
		i++
	})
}


// Выравнивание в каталоге
function catalogHeight(context, step) {
	let start = 0,
		finish = step,
		items = [...context.querySelectorAll('.category')],
		itemsName = context.querySelectorAll('.name'),
		i = 0

	itemsName.forEach(el => el.style.height = 'auto')

	items.forEach(el => {
		items.slice(start, finish).forEach(el => el.setAttribute('nodeList', i))

		setHeight(context.querySelectorAll('[nodeList="' + i + '"] .name'))

		start = start + step
		finish = finish + step
		i++
	})
}


// Loader
function showLoader() {
	const loader = document.querySelector('.loader')

	if (loader) {
		loader.classList.add('show')
	}
}

function hideLoader() {
	const loader = document.querySelector('.loader')

	if (loader) {
		loader.classList.remove('show')
	}
}


// Compare positions
function comparePositions() {
	const compareFeaturesNames = document.querySelectorAll('.compare_info .features_names > *'),
		productFeaturesItems = document.querySelectorAll('.compare_info .features .item'),
		productFeatures = document.querySelectorAll('.compare_info .features'),
		compareFeaturesNamesHeight = [],
		featuresPosotions = []


	// Reset
	compareFeaturesNames.forEach(el => el.style.height = 'auto')
	productFeaturesItems.forEach(el => el.style.height = 'auto')
	document.querySelector('.compare_info .features_names').style.width = 'auto'


	// Set features names width
	document.querySelector('.compare_info .features_names').style.width = document.querySelector('.products .product').offsetWidth + 'px'


	// Get features names height
	compareFeaturesNames.forEach(el => {
		compareFeaturesNamesHeight.push(el.offsetHeight)
	})


	// Set features height
	productFeatures.forEach(el => {
		el.querySelectorAll('.item').forEach((el, index) => {
			el.setAttribute('nodeList', index)
			el.style.paddingTop = compareFeaturesNamesHeight[index] + 8 + 'px'

			setHeight(document.querySelectorAll('[nodeList="' + index + '"]'))
		})
	})


	// Set features names position
	compareFeaturesNames.forEach((el, index) => {
		let features = document.querySelector('.products .features')

		features.querySelectorAll('.item').forEach(el => {
			featuresPosotions.push(el.offsetTop)
		})

		el.style.top = featuresPosotions[index] + 'px'
		el.classList.add('show')
	})
}