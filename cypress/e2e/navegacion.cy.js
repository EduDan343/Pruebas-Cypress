//el objeto que pasamos en el describe podemos especificar con que browser
//podemos o debe correr la prueba, tambien podemos elegir que corra en todos
//los navegadores del sistema excepto en uno, usando el signo de negacion antes
//del nombre del navegador, ejemplo {browser:!firefox}
describe('Navegacion', {browser: '!chrome'} , ()=>{

    it('Navegar a nuestra primer pagina', ()=>{
        cy.visit('https://platzi.com')
    })

    it('Recargar pagina', ()=>{
        cy.reload()
    })

    it('Recargar la pagina de forma forzada', ()=>{
        cy.visit('https://www.google.com')
        cy.reload(true)
    })

    it('Navegar hacia atras', ()=>{
        cy.visit('https://www.google.com')
        cy.visit('https://www.google.com/search?q=platzi&oq=platzi&aqs=chrome..69i57j69i60l3j69i61.1279j0j1&sourceid=chrome&ie=UTF-8')
        //cy.go('back')     //usando el nombre
        cy.go(-1) //usando un indice recoorremos 1 hacia atras... 
    })

    it('Navegar hacia adelante', ()=>{
        cy.visit('https://www.google.com')
        cy.visit('https://www.google.com/search?q=platzi&oq=platzi&aqs=chrome..69i57j69i60l3j69i61.1279j0j1&sourceid=chrome&ie=UTF-8')
        cy.go('back')
        //cy.go('forward') //usando nombre de propiedad
        cy.go(1)  //usando indice...
    })
})