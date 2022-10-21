const menuLink = Array.from(document.querySelectorAll('.menu__link'));

for (let idx = 0; idx <= menuLink.length; idx++) {
	menuLink[idx].onclick = function () {
		const parent = menuLink[idx].closest('.menu__item');
		if (parent.querySelector('.menu_sub').className === 'menu menu_sub') {
			parent.querySelector('.menu_sub').className = 'menu menu_sub menu_active';
		} else {
			parent.querySelector('.menu_sub').className = 'menu menu_sub'
		}

		if (menuLink[idx].closest('.menu_main')) {
			return false
		}
	}
}