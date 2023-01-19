// const { describe } = require("mocha");

describe('flaky test', function () {

    it.only('single query command', function () {

        cy.visit("https://pokedexpokemon.netlify.app/")

        cy.get('#root > div.container > div:nth-child(1) > div:nth-child(1) > div > center > div.card-header > h1')
            .contains("Bulbasaur");

        //mas recomendable de esta forma porque cypress espera y hace varios intentos
        // cy.contains("#root > div.container > div:nth-child(1) > div:nth-child(1) > div > center > div.card-header > h1",
        //     "Bulbaaaasaur"
        // )

    })

    it('Alternar comando con aserciones', function () {
        cy.visit("https://pokedexpokemon.netlify.app/")

        // cy.get('#submit').click()
        // esto va a reintentar el cy.get hasta que la asercion pase
        // cy.get('#submit').should('not.to.be.disabled').click()

        cy.get(
            "#root > div.container > div:nth-child(1) > div:nth-child(1) > div > center > div.card-header > h1"
        )
            .should("contain", "Bulbasaur")
            //Aqui ya tenemos el elemento correcto
            .parent()
                .should("have.class", "card-header");
    })

})