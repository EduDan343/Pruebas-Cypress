describe('Guardando elementos', ()=> {

    it('Evitar repeticion', ()=> {
        Cypress.on('uncaught:exception', (err, runnable) =>{
            //returnint alce here prevents Cypress from failing the test
            return false
        })

        cy.visit('/automation-practice-form')
        //obteniendo el elemento padre
        cy.get('input[placeholder="First Name"]').parents('form').then( (form)=> {
            //podemos usarlo de esta forma gracias a que form esta usando JQUERY
            const inputs = form.find('input')
            const divs = form.find('div')
            const labels = form.find('label')

            expect(inputs.length).to.eq(15)
            //wrap envuelve en elemento de jquery y hace qe podamos usar sintaxis
            //de cypress con todos sus metodos
            cy.wrap(inputs).should('have.length', 15)

            expect(divs.length).to.eq(70)
            expect(labels.length).to.eq(16)

        })
    })

})