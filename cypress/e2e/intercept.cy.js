describe('Interceptando network request', function () {

    it('Repaso de request', function () {

        //Peticion a un API
        cy.request("http://pokeapi.co/api/v2/pokemon/ditto").then( response => {
            expect(response.body).to.have.property("name", "ditto")
            expect(response.status).to.eq(200)
            cy.log(response.body);
        })

    })

    it('Prueba de intercept simple', function () {
        cy.intercept('GET', "https://pokeapi.co/api/v2/pokemon-species/1").as("bulbasaur")

        cy.visit('https://pokedexpokemon.netlify.app/')

        cy.contains("Bulbasaur")
            .parent()
            .parent()
            .within(element => {
                cy.wrap(element).contains("Más detalles").click()
            });

        // cy.wait("@bulbasaur").then( interception => {
        //     cy.log(interception)
        //     expect(interception.response.body).to.have.property("name", "bulbasaur")
        //     expect(interception.response.statusCode).to.eq(200);
        // })

        //otra forma de usar y hacer esperar la carga del elemento
        // cy.wait('@bulbasaur', {timeout: 2000})

        //otra forma de hacer lo de arriba
        cy.wait('@bulbasaur').its('response.statusCode').should('eq', 200)
    })

    it('Probar intercept forzarlo a que falle', function () {
        cy.intercept('GET', "https://pokeapi.co/api/v2/pokemon-species/1", {
            forceNetworkError: true,
        }).as("error")
        cy.visit('https://pokedexpokemon.netlify.app/')

        cy.contains("Bulbasaur")
            .parent()
            .parent()
            .within(element => {
                cy.wrap(element).contains("Más detalles").click()
            });
        cy.wait("@error").should('have.property', 'error')

    })

    it.only("Prueba intercept cambiando el body", function() {
        cy.intercept("GET", 'https://pokeapi.co/api/v2/pokemon-species/1', {
            statusCode: 200,
            body: { },
        }).as("pickachu")

        cy.visit('https://pokedexpokemon.netlify.app/')
        
        cy.contains("Bulbasaur")
            .parent()
            .parent()
            .within((element) => {
                cy.wrap(element).contains("Más detalles").click()
            });
        
            cy.wait('@pickachu').then(interception => {
                expect(interception.response.body.to.have.property("name", "pickachu"))
                expect(interception.response.statusCode).to.eq(200)
            })
    })

})