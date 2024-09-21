const mainColor = document.querySelector('mainColor_js')
const block1 = document.querySelector('block1_js')
const block2 = document.querySelector('block2_js')
const block3 = document.querySelector('block3_js')
const block4 = document.querySelector('block4_js')

mainColor.addEventListener('input', function() {
    block1.style.backgroundColor = hexToRgbValue(mainColor.value, x, y, z)
    block2.style.backgroundColor = hexToRgbValue(mainColor.value, x, y, z)
    block3.style.backgroundColor = hexToRgbValue(mainColor.value, x, y, z)
    block4.style.backgroundColor = hexToRgbValue(mainColor.value, x, y, z)
})

function hexToRgbValue(hex, x, y, z) {
    
}