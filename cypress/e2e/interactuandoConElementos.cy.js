describe('Interactuar con los elementos', {browser: 'firefox'} , function() {
    
    Cypress.on('uncaught:exception', (err, runnable) =>{
        //returnint alce here prevents Cypress from failing the test
        return false
    })
    let texto

    it('Click', ()=> {
        cy.visit('/buttons')
        cy.get('button').eq(3).click()
        cy.get('#dynamicClickMessage').should('be.visible').and('contain', 'You have done a dynamic click')
    })

    it('Double click', ()=> {
        cy.visit('/buttons')
        cy.get('#doubleClickBtn').dblclick()
        cy.get('#doubleClickMessage').should('be.visible').and('contain', 'You have done a double click')
        
    })

    it('Rigth click', ()=> {
        cy.visit('/buttons')
        cy.get('#rightClickBtn').rightclick()
        cy.get('#rightClickMessage').should('be.visible').and('contain', 'You have done a right click')
    })

    it('Force click', ()=> {
        cy.visit('/dynamic-properties')
        // cy.get('#enableAfter').click({timeout: 0})
        cy.get('#enableAfter').click({timeout: 0, force: true})
    })

    it('Click por posicion', ()=> {
        cy.visit('/buttons')
        cy.get('button').eq(3).parent().parent().click('topRight')
        cy.get('button').eq(3).parent().parent().click('bottomLeft')
        //tambien podemos especificarle por coordenadas donde va a hacer click(x,y)
        cy.get('button').eq(3).parent().parent().click(5, 80)
    })

    it('Input type text', ()=> {
        cy.visit('/automation-practice-form')
        cy.get('#firstName').type('Eduardo')
        cy.get('#lastName').type('Gonzalezz')
        //para borrar un texto de un input que tenga info podemos usar lo smetdos de cypress
        //dentro de las llaves {}
        // cy.get('#firstName').type('{selectAll}{backspace}')
        //tambien podemos usar un metodo que hace el borrado del input que es clear
        cy.get('#firstName').clear()
    })

    it('Checkboxes y radio buttons', ()=> {
        cy.visit('/automation-practice-form')
        // cy.get('#gender-radio-1').click()
        //solucion 1
        // cy.get('#gender-radio-1').click({force:true})
        //opcion 2
        // cy.get('#gender-radio-1').check({force: true})
        cy.get('label[for="gender-radio-1"]').click()

        //click a checkbox
        // cy.get('#hobbies-checkbox-1').click({force: true})
        // cy.get('#hobbies-checkbox-1').check({force: true})
        // cy.get('#hobbies-checkbox-1').uncheck({force: true})

        cy.get('label[for="hobbies-checkbox-1"]').click()
        cy.get('label[for="hobbies-checkbox-1"]').click()
    })

    it('Extrayendo info', function() { //usamos function porque usamos su contexto 
        //porque con arrowfuncion como son anonimas no se puede...
        cy.visit('/automation-practice-form')

        cy.get('#firstName').as('nombre')
        cy.get('@nombre').type('Eduardo')

        cy.get('@nombre').then( ($nombre) => {
            texto = $nombre.val() //no recomendado usar variables es solo de ejemplo
                                  //para guardar una info en esta variable 
            expect($nombre.val()).to.equal('Eduardo')
        })
        cy.get('@nombre').invoke('val').should('equal','Eduardo')
        cy.get('@nombre').invoke('val').as('nombreGlobal')

    })

    it('Compartir info', function() { //usamos funcion por el contexto a usar
        cy.visit('/automation-practice-form')
        cy.get('#lastName').as('nombre2')
        cy.get('@nombre2').type(texto)
        cy.get('#firstName').type(this.nombreGlobal)

    })

    it('Interactuando con los dropdows(select)', function(){
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
        cy.get('.custom-select').select(10)
        cy.get('.custom-select').select('3').should('have.value', '3')
        cy.get('.custom-select').select('Greece').should('have.value', '4')
    })

    it('Interactuano con los dropdows(select) dinamicos', function() {
        cy.visit('https://react-select.com/home')
        cy.get('#react-select-4-input').click()

        // cy.get('#react-select-4-listbox').children().children().each( ($elemento, index, $lista)=> {

        //     if($elemento.text() === 'Red'){
        //         // $elemento.on('click')
        //         $elemento.click()
        //     }

        // })

        cy.get('#react-select-4-option-4').click()
    })

    it.only('Interactuando con tablas', function(){
        cy.visit('https://www.w3schools.com/html/html_tables.asp')
        cy.get('#customers').find('th').each(($el, index, $list)=> {
            cy.log($el.text())
        })
    })

})