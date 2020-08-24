var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
document.querySelectorAll('*'),
function(el) {
if (el.offsetWidth > docWidth) {
console.log(el);
}
}
);
var docHeight = document.documentElement.offsetHeight;

[].forEach.call(
document.querySelectorAll('*'),
function(el) {
if (el.offsetHeight > docHeight) {
console.log(el);
}
}
);
