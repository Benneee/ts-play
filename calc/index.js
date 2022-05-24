"use strict";
exports.__esModule = true;
exports.screen = void 0;
var button = document.querySelector('.button');
var firstInput = document.querySelector('#first-input'); // TypeCasting
var secondInput = document.querySelector('#second-input');
// Adding the export keyword because we need to change the content of "screen" in the function below
exports.screen = document.querySelector('.screen');
function addNumbers(a, b) {
    exports.screen.innerHTML = (a + b).toString();
}
button.addEventListener('click', function () {
    return addNumbers(parseInt(firstInput.value), parseInt(secondInput.value));
});
