describe('Esperando por elementos', ()=> {

    beforeEach(()=> {
        cy.visit('https://platzi.com')
    })

    it('Esperar por un tiempo definido', ()=> {
        //esperamos este tiempo para que avanze a la siguiente tarea
        //con la propiedad wait yespecificamos en milisegundos...
        cy.wait(5000)
    })

    it('Esperar por un elemento', ()=> {
        //esperamos a que un elemento cargue por completo para interactuar
        //con el...
        //el timout por defecto por elemento es de 4 segundos, o podemos
        //especificarlo
        cy.get('.ButtonLogin-cta',{timeout:6000})
    })

    it('Esperar por un elemento y hacer una asercion', ()=> {
        cy.get('.ButtonLogin-cta', {timeout:6000}).should('be.visible')
    })

})

describe('Esperando por elementos', ()=> {
    
    beforeEach( ()=> {
        cy.visit('/')
    })

    it.only('Deshabilitar el retry', ()=> {
        // cy.get('.bannr-image444', { timeout:5000 })
        cy.get('.category-cards > :nth-child(4)', { timeout:0 })
    })

})


