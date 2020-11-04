// // const оператор объявления переменной. определяет постоянную ссылку на значение.
// // popupLinks, body, lockPadding переменные
// // = оператор присваивания. присваивает значение правого операнда, левому
// // document.querySelectorAll оператор для выбора нескольких элементов
// // document.querySelector оператор для выбора одного элемента
// // объявляю переменную popupLinks. в переменную popupLinks получаю все объекты с классом .popup-link, чтобы popup открывался при клике на любой объект с классом .popup-link
// const popupLinks = document.querySelectorAll('.popup-link');
// // получаю в переменную body тег body, чтобы блокировать скролл внутри тега
// const body = document.querySelector('body');

// const lockPadding = document.querySelectorAll(".lock-padding");

// // let оператор объявления переменной. объявляет переменную с блочной областью видимости
// let unlock = true;

// // 800. та же цифра указана в свойстве transition: all 0.8s ease 0s; классa .popup в css. цифры должны быть одинаковыми для блокировки скролла
// const timeout = 800;

// // if условный оператор. выполняет команды, если условие true.
// // (popupLinks.length > 0) проверяю есть ли на странице ссылки .popup-link
// if (popupLinks.length > 0) {
// 	// for оператор создания цикла.
// 	// ++ инкремент. увеличивает переменную на единицу.
// 	// запускаю цикл
// 	for (let index = 0; index < popupLinks.length; index++) {
// 		// ищу ссылки и найденные возвращаю в переменную popupLink
// 		const popupLink = popupLinks[index];
// 		// addEventListener метод позволяет добавлять несколько обработчиков на одно событие одного элемента. синтаксис добавления обработчика: element.addEventListener(event, handler[, options]); event - имя события. handler - ссылка на функцию-обработчик. options - дополнительный объект со свойствами.
// 		// click – событие мыши. происходит, когда кликнули на элемент левой кнопкой мыши (на устройствах с сенсорными экранами при касании). событие – это сигнал от браузера о том, что что-то произошло
// 		// function (e) объявление функции. состоит из ключевого слова function, имени функции, списка параметров в круглых скобках () разделенных запятыми, инструкции выполняемые после вызова функции в фигурных скобках { }. нам надо повторять одно и то же действие во многих частях программы. функции придуманы, чтобы не повторять один и тот же код и являются основными строительными блоками программы.
// 		// на переменную popupLink вешаю событие click
// 		popupLink.addEventListener("click", function (e) {
// 			// getAttribute() возвращает значение указанного атрибута элемента
// 			// replace() метод выполняет внутри строки поиск и возвращает новую строку, в которой будут заменены найденные значения
// 			// при клике у атрибута href убираю знак # получаю имя без #
// 			const popupName = popupLink.getAttribute('href').replace('#', '');
// 			// getElementById() метод возвращает ссылку на элемент, который имеет атрибут id с указанным значением.
// 			// в переменную curentPopup получаю элемент id которого равен popupName
// 			const curentPopup = document.getElementById(popupName);
// 			// полученный объект отправляю в функцию popupOpen открывающую popup
// 			popupOpen(curentPopup);
// 			// event.preventDefault() метод отмены действия браузера
// 			// запрещаю ссылке перезагружать страницу
// 			e.preventDefault();
// 		});
// 	}
// }

// // объект с классом close-popup закрывает popup.
// const popupCloseIcon = document.querySelectorAll('.close-popup');
// if (popupCloseIcon.length > 0) {
// 	for (let index = 0; index < popupCloseIcon.length; index++) {
// 		const el = popupCloseIcon[index];
// 		el.addEventListener('click', function (e) {
// 			// closest метод ищет ближайший родительский элемент, подходящий под указанный CSS селектор, при этом сам элемент тоже включается в поиск
// 			// отправляю в функцию popupClose объект ближайшего родителя с классом popup. при клике функция ищет объект с классом popup и закрывает его.
// 			popupClose(el.closest('.popup'));
// 			e.preventDefault();
// 		})
// 	}
// }

// // открываю popup. передаю готовый объект curentPopup
// function popupOpen(curentPopup) {
// 	// && логический оператор И
// 	// проверяю наличие объекта curentPopup и открытость unlock
// 	if (curentPopup && unlock) {
// 		// получаю объект класса popup с классом open
// 		const popupActive = document.querySelector('.popup.open');
// 		// если popup с классом open существует, то закрыть его
// 		if (popupActive) {
// 			popupClose(popupActive, false);
// 		} else {
// 			// блокировка скролла
// 			bodylock();
// 		}
// 		// classList.add добавляет элементу указанные классы
// 		// добавляю класс open и открывается popup
// 		curentPopup.classList.add('open');
// 		// открытому popup вешаю событие при клике
// 		curentPopup.addEventListener("click", function (e) {
// 			// "!" логический оператор НЕ
// 			// event.target – это «целевой» элемент, на котором произошло событие, в процессе всплытия он неизменен.
// 			// отсекаю все кроме темной области вокруг popup. если у нажатого объекта нет родителя с классом popup__content то передаю в функцию popupClose ближайший объект с классом popup. при клике на любой объект внутри объекта с классом popup__content ничего не произойдет. вся затемненная область выходит за пределы объекта с классом popup__content, поэтому при клике на нее popup закроется.
// 			if (!e.target.closest('popup__content')) {
// 				popupClose(e.target.closest('.popup'));
// 			}
// 		});
// 	}
// }
// // передаю открытый popup и значение стоит ли нам блокировать скролл или нет, чтобы можно было открыть еще popup
// function popupClose(popupActive, doUnlock = true) {
// 	if (unlock) {
// 		// когда открываю новый popup и понимаю, что есть открытый, то запрещаю выполнение bodyUnlock. так же у активного popup убираю класс open
// 		popupActive.classList.remove('open');
// 		if (doUnlock) {
// 			bodyUnlock();
// 		}
// 	}
// }

// function bodylock() {
// 	// window.innerWidth получаю ширину рабочей области окна браузера
// 	// offsetWidth содержит полную ширину элемента (включает ширину элемента, ширину границ, padding, полосы прокрутки).
// 	// считаю разницу между шириной окна браузера и шириной объекта внутри него, чтобы получить ширину скрываемого скролла. результат получаю в переменную lockPaddingValue.  если этого не делать, то при появлении popup сдвигается контент, потому что пропадает скролл, тоже при закрытии, появляется скролл и контент двигается.
// 	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
// 	// проверяю есть ли на странице объекты lockPadding
// 	if (lockPadding.length > 0) {
// 		// для фиксированных объектов, также добавляю отступ, чтобы не было смещения при выходе popup у header
// 		for (let index = 0; index < lockPadding.length; index++) {
// 			const el = lockPadding[index];
// 			// присваиваю разницу в виде падинга справа
// 			el.style.paddingRight = lockPaddingValue;
// 		}
// 	}
// 	// присваиваю разницу body. в css добавляется padding-right
// 	body.style.paddingRight = lockPaddingValue;
// 	// объект с классом lock убирает скролл. в css у body с классом lock скрыто переполнение
// 	body.classList.add('lock');
// 	// меняю значение unlock на false. блокирую
// 	unlock = false;
// 	// setTimeout метод выполняет функцию, указанную в первом аргументе, асинхронно, с задержкой в delay миллисекунд.
// 	setTimeout(function () {
// 		unlock = true;
// 		// через определенный промежуток времени (800) возвращаю значение true. это нужно чтобы не было повторных нажатий при открытом popup. это приводит к ошибке с фиксированным скроллом и получается так, что popup открыт, а скролл не блокируется.
// 	}, timeout);
// }

// // разблокирую скролл. убираю правый паддинг через промежуток времени (800), чтобы скролл не появлялся моментально и не сдвигал popup. скролл появляется когда закончится анимация. в общем после определенного таймаута возвращаю все обратно.
// function bodyUnlock() {
// 	setTimeout(function () {
// 		if (lockPadding.length > 0) {
// 			for (let index = 0; index < lockPadding.length; index++) {
// 				const el = lockPadding[index];
// 				el.style.paddingRight = '0px';
// 			}
// 		}
// 		body.style.paddingRight = '0px';
// 		// убираю у body класс lock
// 		body.classList.remove('lock');
// 	}, timeout);

// 	unlock = false;
// 	setTimeout(function () {
// 		unlock = true;
// 	}, timeout);
// }

// // закрытие popup клавишей esc
// // document.addEventListener('keydown', function (e) {
// // 	if (e.keyCode === 27) {
// // 		const popupActive = document.querySelector('.popup.open');
// // 		popupClose(popupActive);
// // 	}
// // });

// // polyphill
// (function () {
// 	// checking support
// 	if (!Element.prototype.closest) {
// 		// implement
// 		Element.prototype.closest = function (css) {
// 			var node = this;
// 			while (node) {
// 				if (node.matches(css)) return node;
// 				else node = node.parentElement;
// 			}
// 			return null;
// 		};
// 	}
// })();
// (function () {
// 	// checking support
// 	if (!Element.prototype.matches) {
// 		// defining property
// 		Element.prototype.matches = Element.prototype.matchesSelector ||
// 			Element.prototype.webkitMatchesSelector ||
// 			Element.prototype.mozMatchesSelector ||
// 			Element.prototype.msMatchesSelector;
// 	}
// })();
