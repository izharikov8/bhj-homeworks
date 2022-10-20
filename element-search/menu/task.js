const menu_link = Array.from(document.querySelectorAll('.menu__link'));

for (let idx = 0; idx <= menu_link.length; idx++) {
	menu_link[idx].onclick = function () {
		const parent = menu_link[idx].closest('.menu__item');
		if (parent.querySelector('.menu_sub').className === 'menu menu_sub') {
			parent.querySelector('.menu_sub').className = 'menu menu_sub menu_active';
		} else {
			parent.querySelector('.menu_sub').className = 'menu menu_sub'
		}

		if (menu_link[idx].closest('.menu_main')) {
			return false
		}
	}
}