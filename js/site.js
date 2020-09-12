$('.carousel').carousel({
    interval: 3500
})

var menu = document.getElementById('menu');
var subMenu = document.getElementById('sub-menu');
var menu1 = document.getElementById('menu-1');
var subMenu1 = document.getElementById('sub-menu-1');

var menu2 = document.getElementById('menu-2');
var subMenu2 = document.getElementById('sub-menu-2');
var menu3 = document.getElementById('menu-3');
var subMenu3 = document.getElementById('sub-menu-3');

menu.addEventListener('click', function (e) {
    if (menu1.classList.contains('active')) {
        subMenu1.classList.remove('show');
        menu1.classList.remove('active');
        setTimeout(function () {
            subMenu.classList.contains('show') == true ? subMenu.classList.remove('show') : subMenu.classList.add('show');
            menu.classList.contains('active') == true ? menu.classList.remove('active') : menu.classList.add('active');
        }, 200);
    } else {
        subMenu.classList.contains('show') == true ? subMenu.classList.remove('show') : subMenu.classList.add('show');
        menu.classList.contains('active') == true ? menu.classList.remove('active') : menu.classList.add('active');
    }
});

menu1.addEventListener('click', function (e) {
    if (menu.classList.contains('active')) {
        subMenu.classList.remove('show');
        menu.classList.remove('active');
        setTimeout(function () {
            subMenu1.classList.contains('show') == true ? subMenu1.classList.remove('show') : subMenu1.classList.add('show');
            menu1.classList.contains('active') == true ? menu1.classList.remove('active') : menu1.classList.add('active');
        }, 200);
    } else {
        subMenu1.classList.contains('show') == true ? subMenu1.classList.remove('show') : subMenu1.classList.add('show');
        menu1.classList.contains('active') == true ? menu1.classList.remove('active') : menu1.classList.add('active');
    }
});

menu2.addEventListener('click', function (e) {
    if (menu3.classList.contains('active')) {
        subMenu3.classList.remove('show-1');
        menu3.classList.remove('active');
        setTimeout(function () {
            subMenu2.classList.contains('show-1') == true ? subMenu2.classList.remove('show-1') : subMenu2.classList.add('show-1');
            menu2.classList.contains('active') == true ? menu2.classList.remove('active') : menu2.classList.add('active');
        }, 200);
    } else {
        subMenu2.classList.contains('show-1') == true ? subMenu2.classList.remove('show-1') : subMenu2.classList.add('show-1');
        menu2.classList.contains('active') == true ? menu2.classList.remove('active') : menu2.classList.add('active');
    }
});

menu3.addEventListener('click', function (e) {
    if (menu2.classList.contains('active')) {
        subMenu2.classList.remove('show-1');
        menu2.classList.remove('active');
        setTimeout(function () {
            subMenu3.classList.contains('show-1') == true ? subMenu3.classList.remove('show-1') : subMenu3.classList.add('show-1');
            menu3.classList.contains('active') == true ? menu3.classList.remove('active') : menu3.classList.add('active');
        }, 200);
    } else {
        subMenu3.classList.contains('show-1') == true ? subMenu3.classList.remove('show-1') : subMenu3.classList.add('show-1');
        menu3.classList.contains('active') == true ? menu3.classList.remove('active') : menu3.classList.add('active');
    }
});

function showAnswer(question) {
    question.classList.toggle("active");
    var answerId = question.getAttribute("data-for");
    var answer = document.getElementById(answerId);
    answer.classList.toggle("show-answer");
}

document.getElementsByClassName("question")[document.getElementsByClassName("question").length - 1].style.border = "none";