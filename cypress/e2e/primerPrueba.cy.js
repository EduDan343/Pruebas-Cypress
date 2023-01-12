describe('Primer Prueba!!', () => {

    it('Navegar a nuestar primer pagina', () => {
        cy.visit('https://www.platzi.com')
    })

    it('Recargar pagina', ()=> {
        cy.reload()
    })

    it('Recargar pagina de forma forzada', ()=>{
        cy.visit('https://www.google.com/')
        cy.reload(true)
    })
})