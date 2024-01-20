import './test.css'
setTimeout(async () => {
    const { halo } = await import('./halo')
    halo()
}, 3000)
