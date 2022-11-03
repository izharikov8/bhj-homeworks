const tabsArr = Array.from(document.querySelectorAll('.tab'));
const tabsContentArr = Array.from(document.querySelectorAll('.tab__content'));

for (idx = 0; idx < tabsArr.length; idx++) {
    tabsArr[idx].addEventListener('click', function(event) {
        i = tabsArr.indexOf(event.target)
        for (var el = 0; el < tabsArr.length; el++) {
            if (tabsArr[el] === tabsArr[i]) {
                tabsArr[el].className = 'tab tab_active';
                tabsContentArr[el].className = 'tab__content tab__content_active';
            } else {
                tabsArr[el].className = 'tab';
                tabsContentArr[el].className = 'tab__content';
            }
        }
    })
    }

