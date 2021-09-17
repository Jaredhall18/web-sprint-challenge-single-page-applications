describe("Form App", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza');
        });
    it("sanity check", () => {
        expect(1 + 1).to.equal(2);
      });

    const nameInput = () => cy.get('input[name=name]');
    
    const specialInput = () => cy.get('input[name=special]');
    const meatballsInput = () => cy.get('input[name=meatballs]');
    const chickenInput = () => cy.get('input[name=chicken]');
    const cheeseInput = () => cy.get('input[name=cheese]');
    const olivesInput = () => cy.get('input[name=olives]');
    
    const submitBtn = () => cy.get('button[id=order-button');

    describe('add text to boxes', () => {
        it('can type in inputs', () => {
            nameInput()
            .should('have.value', '')
            .type('Jared')
            .should('have.value', 'Jared' )

            specialInput()
            .should('have.value', '')
            .type('Special')
            .should('have.value', 'Special' )
        })
    })

    describe('checking boxes', () => {
        it('can check each topping box', () => {
            meatballsInput().click();
            meatballsInput().should('have.checked', 'true');

            chickenInput().click();
            chickenInput().should('have.checked', 'true')

            cheeseInput().click();
            cheeseInput().should('have.checked', 'true')

            olivesInput().click();
            olivesInput().should('have.checked', 'true')
        })
    })

    describe('filling out and submitting form', () => {
        it('can type in inputs', () => {
            nameInput()
            .should('have.value', '')
            .type('Jared')
            .should('have.value', 'Jared' )

            specialInput()
            .should('have.value', '')
            .type('Special')
            .should('have.value', 'Special' )
            
            meatballsInput().click();
            meatballsInput().should('have.checked', 'true');

            chickenInput().click();
            chickenInput().should('have.checked', 'true')

            cheeseInput().click();
            cheeseInput().should('have.checked', 'true')

            olivesInput().click();
            olivesInput().should('have.checked', 'true')
            cy.get('select').select('small');
            submitBtn().click();
          
        })
      

    })


})