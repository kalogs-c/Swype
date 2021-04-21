const textarea = document.querySelector(".textarea1")

function reverse(content) {
    return content.split('').reverse().join('');
}

function show_reverse() {
    const swype = reverse(textarea.value)
    textarea.value = swype
    textarea.select()
    document.execCommand('copy')
    console.log(swype)
}