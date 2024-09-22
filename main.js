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
function colorDescription() {
    let a = hexToRgbValue(mainColor.value, 46, 53, 43);
    let b = hexToRgbValue(mainColor.value, -18, 28, -42);
    let c = hexToRgbValue(mainColor.value, 60, 93, 43);
    let d = hexToRgbValue(mainColor.value, -41, -6, -59);
    let f = hexToRgbValue(mainColor.value, 0, 0, 0);
    color1.setAttribute('title', a)
    color2.setAttribute('title', b)
    color3.setAttribute('title', c)
    color4.setAttribute('title', d)
    mainColor.setAttribute('title', f)
}

//функция изменений цветов
function colorsChange() {
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
}

// главный блок в палетке
mainColor.value = "#7109AA";
// изменяем цвета и добавляем подписи
colorsChange();
//переподписываем все цвета
colorDescription();

// смена цветов
mainColor.addEventListener('input', function () {
    // изменяем цвета и добавляем подписи
    colorsChange();
    //переподписываем все цвета
    colorDescription();
})

// копирование названий цветов
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

// функция для преобразования HEX в RGB
function rgbToHex(rgb) {
    const rgbValues = rgb.match(/\d+/g); // Извлекаем числовые значения
    const hex = rgbValues.map(value => {
        const hexValue = parseInt(value).toString(16).padStart(2, '0'); // Конвертируем в hex и добавляем нули
        return hexValue;
    }).join('');
    return `#${hex}`; // Возвращаем строку в формате #RRGGBB
}

function updateMainColor(color) {
    const backgroundColor = color.style.backgroundColor; // Получаем цвет фона
    const hexColor = rgbToHex(backgroundColor); // Преобразуем в HEX
    mainColor.value = hexColor; // Устанавливаем значение в input
}

color1.addEventListener('click', function()
{
    updateMainColor(color1);
    // изменяем цвета и добавляем подписи
    colorsChange();
    //переподписываем все цвета
    colorDescription();
});

color2.addEventListener('click', function()
{
    updateMainColor(color2);
    // изменяем цвета и добавляем подписи
    colorsChange();
    //переподписываем все цвета
    colorDescription();
})
color3.addEventListener('click', function()
{
    updateMainColor(color3);
    // изменяем цвета и добавляем подписи
    colorsChange();
    //переподписываем все цвета
    colorDescription();
})
color4.addEventListener('click', function()
{
    updateMainColor(color4);
    // изменяем цвета и добавляем подписи
    colorsChange();
    //переподписываем все цвета
    colorDescription();
})
