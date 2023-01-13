describe('Prueba pagina tyerra', () => {

    beforeEach( ()=> {
        cy.viewport('samsung-s10')
    })

    it('Visitar la pagina tyerra y hacer login', function (){
        cy.visit('http://www.tyerra.com',{
            onBeforeLoad: (win) => {
                Object.defineProperty(win.navigator, 'userAgent', {
                    value: `Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) 
                        Version/11.0 Mobile/15A372 Safari/604.1`
                });
                win.ontouchstart = true
            }
        })
        cy.pause()
        cy.wait(8000)
        cy.get('button')
        cy.contains('Entendido').click()
        cy.get('img[alt="Perfil"]').click()
        cy.get('.TyListMenu_root__PhyEN > :nth-child(1)').click()
        cy.wait(2000)
        cy.get('#email-input').type('eduardodan.glez.h96@gmail.com')
        cy.get('#password-input').type('TyerraPass@123')
        //TyerraPass@123
        cy.get('button').contains('Iniciar sesión').click()
    })

})