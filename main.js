// блоки верхнего контейнера
const block1 = document.querySelector('.block1_js')
const block2 = document.querySelector('.block2_js')
const block3 = document.querySelector('.block3_js')
const block4 = document.querySelector('.block4_js')
const block5 = document.querySelector('.block5_js')
const name1 = document.querySelector('.name1_js')
const name2 = document.querySelector('.name2_js')
const name3 = document.querySelector('.name3_js')
const name4 = document.querySelector('.name4_js')
const name5 = document.querySelector('.name5_js')
// блоки основного конейнера
const mainColor = document.querySelector('.mainColor_js')
const color1 = document.querySelector('.palette1_js')
const color2 = document.querySelector('.palette2_js')
const color3 = document.querySelector('.palette3_js')
const color4 = document.querySelector('.palette4_js')

// функция hex в RGB
function hexToRgbValue(hex, x, y, z)
{
    hex = hex.replace(/^#/, '');

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return "rgb(" +  (r+x) + "," + (g+y) + "," + (b+z) + ")";
}

//функция подписи цветов в палетке
function colorDescription(main, c1, c2, c3, c4) {
    let a = hexToRgbValue(main.value, 46, 53, 43);
    let b = hexToRgbValue(main.value, -18, 28, -42);
    let c = hexToRgbValue(main.value, 60, 93, 43);
    let d = hexToRgbValue(main.value, -41, -6, -59);
    let f = hexToRgbValue(main.value, 0, 0, 0);
    c1.setAttribute('title', a)
    c2.setAttribute('title', b)
    c3.setAttribute('title', c)
    c4.setAttribute('title', d)
    main.setAttribute('title', f)
}

// главный блок в палетке
mainColor.value = "#7109AA";
// пишем главный цвет в консоль 
console.log(hexToRgbValue(mainColor.value))
// изменяем цвета смежных блоков палетки
color1.style.backgroundColor = hexToRgbValue(mainColor.value, 46, 53, 43) ;
color2.style.backgroundColor = hexToRgbValue(mainColor.value, -18, 28, -42);
color3.style.backgroundColor = hexToRgbValue(mainColor.value, 60, 93, 43);
color4.style.backgroundColor = hexToRgbValue(mainColor.value, -41, -6, -59);
// изменяем цвета и названия блоков верхнего контейнера
block1.style.backgroundColor = color1.style.backgroundColor;
block2.style.backgroundColor = color2.style.backgroundColor;
block3.style.backgroundColor = hexToRgbValue(mainColor.value, 0, 0, 0)
block4.style.backgroundColor = color3.style.backgroundColor;
block5.style.backgroundColor = color4.style.backgroundColor;
name1.textContent = hexToRgbValue(mainColor.value, 46, 53, 43);
name2.textContent = hexToRgbValue(mainColor.value, -18, 28, -42);
name3.textContent = hexToRgbValue(mainColor.value, 0, 0, 0);
name4.textContent = hexToRgbValue(mainColor.value, 60, 93, 43);
name5.textContent = hexToRgbValue(mainColor.value, -41, -6, -59);

colorDescription(mainColor, color1, color2, color3, color4);

// смена цветов
mainColor.addEventListener('input', function colorChange ()
{
    // пишем главный цвет в консоль 
    console.log(hexToRgbValue(mainColor.value))
    //меняем блоки палетки 
    color1.style.backgroundColor =  hexToRgbValue(mainColor.value, 46, 53, 43);
    color2.style.backgroundColor = hexToRgbValue(mainColor.value, -18, 28, -42);
    color3.style.backgroundColor = hexToRgbValue(mainColor.value, 60, 93, 43);
    color4.style.backgroundColor = hexToRgbValue(mainColor.value, -41, -6, -59);
    //меняем содержимое верхнего контейнера
    block1.style.backgroundColor = color1.style.backgroundColor;
    block2.style.backgroundColor = color2.style.backgroundColor;
    block3.style.backgroundColor = hexToRgbValue(mainColor.value, 0, 0, 0)
    block4.style.backgroundColor = color3.style.backgroundColor;
    block5.style.backgroundColor = color4.style.backgroundColor;
    name1.textContent = hexToRgbValue(mainColor.value, 46, 53, 43);
    name2.textContent = hexToRgbValue(mainColor.value, -18, 28, -42);
    name3.textContent = hexToRgbValue(mainColor.value, 0, 0, 0);
    name4.textContent = hexToRgbValue(mainColor.value, 60, 93, 43);
    name5.textContent = hexToRgbValue(mainColor.value, -41, -6, -59);
    //переподписываем все цвета
    colorDescription(mainColor, color1, color2, color3, color4);
})

// Копирование названий цветов
block1.addEventListener('click', function ()
{
    navigator.clipboard.writeText(name1.textContent)

})
block2.addEventListener('click', function ()
{
    navigator.clipboard.writeText(name2.textContent)
})
block3.addEventListener('click', function ()
{
    navigator.clipboard.writeText(name3.textContent)
})
block4.addEventListener('click', function ()
{
    navigator.clipboard.writeText(name4.textContent)
})
block5.addEventListener('click', function ()
{
    navigator.clipboard.writeText(name5.textContent)
})

// // Функция для преобразования RGB в HEX
// function rgbToHex(rgb) {
//     const rgbArray = rgb.match(/\d+/g);
//     return ((1 << 24) + (parseInt(rgbArray[0]) << 16) + (parseInt(rgbArray[1]) << 8) + parseInt(rgbArray[2])).toString(16).slice(1);
// }

// mainColor.value = rgbToHex(getComputedStyle(color1).backgroundColor);

// //
// function componentToHex(comp) {
//     var hex = comp.toString(16);
//     return hex.length == 1 ? "0" + hex : hex;
// }
// function rgbToHex(r, g, b) {
//     return #${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)};
// }

// //
// color1.addEventListener('click', function()
// {
//     mainColor.value = rgbToHex(componentToHex(color1.style.backgroundColor));
// })
// color2.addEventListener('click', function()
// {
//     mainColor.value = color2.style.backgroundColor;
// })
// color3.addEventListener('click', function()
// {
//     mainColor.value = color3.style.backgroundColor;
// })
// color4.addEventListener('click', function()
// {
//     mainColor.value = color4.style.backgroundColor;
// })
