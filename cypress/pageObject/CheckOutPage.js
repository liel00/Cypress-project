class CheckOutPage{

    assert_Blouse(){
        cy.assert_text_contains('Blouse','Blouse')
    }

    assert_Printed_Dress(){
        cy.assert_text_contains('Printed Dress','Printed Dress')
    }
    total_sum(){
       cy.search_the_table('tr td:nth-child(6) span','#total_price')
       

       
    }
    Proceed_to_checkout(){
        cy.click_element('.cart_navigation > .button > span')
    }

    assert_email(){
        cy.assert_text_element(':nth-child(1) > label','Email address')
    }

    assert_Password(){
        cy.assert_text_element(':nth-child(2) > label','Password')
    }

    type_email(){
        cy.type_element('#email','aaa@gamil.com')
    }
    type_password(){
        cy.type_element('#passwd','Ts123456')
    }

    click_singin(){
        cy.click_element('#SubmitLogin > span')
    }
    check_box_address(){
        cy.check_box_pressed('#addressesAreEquals')
    }
    check_box_agree(){
        cy.check_box_pressed('#cgv')
    }
    click_pay_bank(){
        cy.click_element('.bankwire')
    }
    complete_buy(){
        cy.assert_text_element('.cheque-indent','\n\t\t\tYour order on My Store is complete.\n\t\t')
    }

   
    
}
export default CheckOutPage;