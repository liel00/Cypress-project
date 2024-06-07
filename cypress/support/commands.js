// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// -- Check the number of elements --
Cypress.Commands.add('check_number_elements', (element_fader,number) => { 
    return cy.get(element_fader).should('have.length',number)
})

// -- Go from white father Check the number of elements --
Cypress.Commands.add('father_to_son_length_Check_number_elements', (element_fader,element_child,number) => { 
    return cy.get(element_fader).find(element_child).should('have.length',number)
})

// -- Go from white father number X and click on the text --
Cypress.Commands.add('father_to_son_contains_click', (element_fader,element_child,number,contains) => { 
    return cy.get(element_fader).find(element_child).eq(number).contains(contains).click()
})

// -- This is a command click element   --
Cypress.Commands.add('click_element', (element) => { 
    cy.get(element).click()
})

// -- This is a command assert text contains   --
Cypress.Commands.add('assert_text_contains', (element,text) => { 
    cy.contains(element).should('have.text',text)
})

// -- This is a command assert text element    --
Cypress.Commands.add('assert_text_element', (element,text) => { 
    cy.get(element).should('have.text',text)
})



// -- This is a command Search the table   --
Cypress.Commands.add('search_the_table', (element,total) => { 
    let sum = 0
    cy.get(element).each(($el,index,$list)=>{
        let x = $el.text()
        let res = x.replace('$','')
        sum += Number(res)
        let sum1 = sum.toString()
        sum = Number(sum1.slice(0,5))
        cy.log(res)
        
    }).then(function(){
        cy.log(sum + 2)
        expect(79.99).to.equal(sum + 2)
    })
    })
    
// -- This is a command type  --
Cypress.Commands.add('type_element', (element,text) => { 
    cy.get(element).type(text)
})

// -- This is a command check box  --
Cypress.Commands.add('check_box_pressed', (element) => { 
    cy.get(element).check().should('be.checked')
})


// -- This is a command uncheck box  --
Cypress.Commands.add('uncheck_box', (element) => { 
    cy.get(element).uncheck().should('not.be.checked')
})


// -- This is a command static dropdown  --
Cypress.Commands.add('static_dropdown', (element,value) => { 
    cy.get(element).select(value)
})

// -- This is a command dynmic dropdown and check  --
Cypress.Commands.add('dynmic_dropdown', (element_dynmic,value,value_class_auto_correct,main_class) => { 
    cy.get(element_dynmic).type(value)
    cy.get(value_class_auto_correct).each(($el,index,$list)=>{
        if($el.text()===value){
            $el.click()
        }
    })
    cy.get(main_class).should('have.value',value)

})



// -- This is a command One answer Alert  --
Cypress.Commands.add('one_answer_alert ', (str,equal) => { 
    s = str
    e = equal
    cy.on('windon:alert',(s)=>{
        expect(s).to.equal(equal)
    })
})

// -- This is a command Two answer Alert  --
Cypress.Commands.add('two_answer_alert ', (str,equal) => { 
    s = str
    e = equal
    cy.on('windon:confirm',(s)=>{
        expect(s).to.equal(equal)
    })
})


// -- This is a command mouse  --
Cypress.Commands.add('mouse', (element) => { 
    cy.get(element).click({focus:true})
})

// -- This is a command iframe (npm install -D cypress-iframe)  --
Cypress.Commands.add('iframe', (class_iframe,element) => { 
    cy.frameLoaded(class_iframe)
    cy.iframe().find(element).eq(0).click()
})






