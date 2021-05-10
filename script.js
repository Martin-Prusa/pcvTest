let buttons

let onLoadFunc = function f() {
    buttons = document.querySelectorAll('[data-toggle="dropdown"]')
    buttons.forEach(btn => {
        if(btn.dataset.target) {
            let menu = document.querySelector(btn.dataset.target)
            let c = btn.getBoundingClientRect()
            menu.style.display = 'none'
            menu.style.top = `${c.top+btn.offsetHeight}px`
            menu.style.left = `${c.left}px`
            menu.style.width = `${btn.offsetWidth + 20}px`
            menu.style.position = 'absolute'
            btn.addEventListener('click', () => {
                menu.style.display = menu.style.display === 'none' ? 'block' : 'none'
            })
        }
    })
}

window.onload = onLoadFunc
