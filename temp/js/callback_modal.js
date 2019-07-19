var popupBtn = document.getElementById('popup__toggle');
var popupWin = document.getElementById('popup__overlay');
var popupClose = document.getElementById('popup__close');
var cell_btns = document.querySelectorAll('.buy');
var model_input = document.getElementById('model');

var popup_on = function (e) {

    popupWin.style.display = 'block';
    model_input.style.display = 'block';
    model_input.value = 'Модель ' + e.target.name;
};

popupBtn.onclick = function () {model_input.style.display = 'none'; popupWin.style.display = 'block';};
popupClose.onclick = function() {popupWin.style.display = 'none';};

popupBtn.ontouchend = function () {model_input.style.display = 'none'; popupWin.style.display = 'block';};
popupClose.ontouchend = function() {popupWin.style.display = 'none';};

for (let i = 0; i < cell_btns.length; i++) {
    cell_btns[i].addEventListener('click', popup_on);
    cell_btns[i].addEventListener('touch', popup_on);
}



