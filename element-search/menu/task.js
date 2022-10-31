const menuLink = Array.from(document.querySelectorAll('.menu__link'));
const menuItem = Array.from(document.querySelectorAll('.menu__item'));

for (let idx = 0; idx < menuLink.length; idx++) {
	menuLink[idx].onclick = function () {
		if (menuItem[idx].querySelector('.menu_sub') !== null && menuItem[idx].querySelector('.menu_active') === null) {
			for (let i = 0; i < menuItem; i++) {
				if (menuItem[i].querySelector('.menu_active')) {
					menuItem[i].querySelector('.menu_sub').className = 'menu menu_sub'
				}
			}
		    menuItem[idx].querySelector('.menu_sub').className = 'menu menu_sub menu_active';
            return menuItem[idx].href = false;
		}
		else if (menuItem[idx].querySelector('.menu_sub') !== null && menuItem[idx].querySelector('.menu_active') !== null) {
			menuItem[idx].querySelector('.menu_sub').className = 'menu menu_sub';
			return menuItem[idx].href = false;
		}
	}
}
