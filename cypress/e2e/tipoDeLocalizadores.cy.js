describe('Tipos de localizadores', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) =>{
        //returnint alce here prevents Cypress from failing the test
        return false
    })

    it('Obtenerlo por medio de un tag o etiqueta', ()=> {
        //hicimos un base url y por eso lo usamos con ruta relativa...
        cy.visit('/automation-practice-form')
        cy.get('input')
    })

    it('Obtenerlo por medio de un atributo', ()=>{
        cy.visit('/automation-practice-form')
        cy.get('[placeholder="First Name"]')
    })

    it('Obtenerlo por medio de un atributo y un tag', ()=> {
        cy.visit('/automation-practice-form')
        cy.get('input[placeholder="First Name"]')
    })

    it('Obtenerlo por medio de un input', ()=> {
        cy.visit('/automation-practice-form')
        cy.get('#firstName')
    })

    it('Obtener por medio de un classn', ()=> {
        cy.visit('/automation-practice-form')
        cy.get('.col-md-4.col-sm-6')
    })

    it('Usando contains', ()=> {
        cy.visit('/automation-practice-form')
        // cy.contains('Reading')
        cy.contains('.header-wrapper', 'Widgets')
    })

    it('Usando parent', ()=> {
        cy.visit('/automation-practice-form')
        //Obteniendo el elemento padre
        cy.get('input[placeholder="First Name"]').parent()
        cy.get('input[placeholder="First Name"]').parents()
        cy.get('input[placeholder="First Name"]').parents().find('label')
        cy.get('form').find('label')
    })
})