const textarea = document.querySelector(".textarea1")
const verticalMenu = document.querySelector("#vertical-menu__select")

function reverse(content) {
    return content.split('').reverse().join('');
}

function toUpper(content) {
    return content.toUpperCase()
}

function toLower(content) {
    return content.toLowerCase()
}

function toCapitalize(content) {
    return content.charAt(0).toUpperCase() + content.slice(1);
}

function show_reverse() {
    const swype = reverse(textarea.value)
    textarea.value = swype
    textarea.select()
    document.execCommand('copy')
}

function show_upper() {
    const swype = toUpper(textarea.value)
    textarea.value = swype
    textarea.select()
    document.execCommand('copy')
}

function show_lower() {
    const swype = toLower(textarea.value)
    textarea.value = swype
    textarea.select()
    document.execCommand('copy')
}

function show_firstU() {
    const swype = toCapitalize(textarea.value)
    textarea.value = swype
    textarea.select()
    document.execCommand('copy')
}

function show_result() {
    if (verticalMenu.value === "reverse") {
        console.log(verticalMenu.value)
        show_reverse()
    }
    if (verticalMenu.value === "upper") {
        console.log(verticalMenu.value)
        show_upper()
    }
    if (verticalMenu.value === "lower") {
        console.log(verticalMenu.value)
        show_lower()
    }
    if (verticalMenu.value === "first_U") {
        console.log(verticalMenu.value)
        show_firstU()
    }
}