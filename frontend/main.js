import './main.css'

const h1 = document.createElement('h1')
document.body.append(h1)

let i = 0
const intId = setInterval(() => {
    i += 1
    h1.innerText = i
}, 1000)

setTimeout(async () => {
    const { halo } = await import('./halo')
    clearInterval(intId)
    h1.innerText = halo()
}, 3000)

