describe('Prueba pagina tyerra', { testIsolation: false } , () => {

    Cypress.on('uncaught:exception', (err, runnable) =>{
        //returnint alce here prevents Cypress from failing the test
        return false
    });

    beforeEach( ()=> {
        // cy.viewport('samsung-s10')
        cy.visit('localhost:3000',{
            onBeforeLoad: (win) => {
                Object.defineProperty(win.navigator, 'userAgent', {
                    value: `Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) 
                        Version/11.0 Mobile/15A372 Safari/604.1`
                });
                win.ontouchstart = true
                localStorage.setItem('noTutorial', true)
            }
        })
        cy.viewport('samsung-s10')
        cy.wait(3000)
    })

    it('Comprobacion de Login', function (){
        // cy.clearCookies()
        // cy.wait(1000)
        // cy.get('p').contains('Arrastra y suelta').parent()
        //     .trigger('mousedown', 'left')
        // cy.get('button')
        // cy.contains('Entendido').click()
        // cy.get('img[alt="Perfil"]').click()
        cy.get('#home-iconPerfil').click()
        cy.get('#menu-login').click()
        cy.wait(1000)
        cy.get('#email-input').type('eduardodan.glez.h96@gmail.com')
        cy.get('#password-input').type('TyerraPass@123')
        // //TyerraPass@123
        cy.get('button').contains('Iniciar sesión').click()
        // cy.get('.swal2-popup').should('not.be.visible')
        cy.wait(1500)
        cy.get('#home-iconPerfil').click()
        cy.get('#menu-cerrarSesion').should('be.visible')
    })


    // it('Apartado de mas informacion', ()=> {
    //     // cy.visit('localhost:3000')
    //     cy.get('button').contains('Más Información').click()
    //     cy.wait(1000)
    //     cy.get('video').should('exist')
    //     cy.wait(1000)
    //     cy.get('p').contains('Precio').parent().then( ($precio)=> {
    //         // cy.log('Precio log :', $precio)
    //         console.log('Precio consolelog cypress :', $precio.text())
    //     })
    // })

})