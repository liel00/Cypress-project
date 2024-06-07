/// <reference types="Cypress" />

import CheckOutPage from "../../pageObject/CheckOutPage"
import HomePage from "../../pageObject/HomePage"



describe('TEST ONE', () => {
  it('E2E buy two prodacts', () => {
    cy.visit(Cypress.env('url'))

    const checkout = new CheckOutPage()
    const homepage = new HomePage()
    homepage.element_contains_click_Printed_Dress()
    homepage.click_Continue_shopping()
    homepage.element_contains_click_Blouse()
    cy.wait(9000)
    homepage.click_Continue_shopping()
    homepage.click_cart()
    checkout.assert_Blouse()
    checkout.assert_Printed_Dress()
    checkout.total_sum()
    checkout.Proceed_to_checkout()
    checkout.assert_email()
    checkout.assert_Password()
    checkout.type_email()
    checkout.type_password()
    checkout.click_singin()
    checkout.check_box_address()
    checkout.Proceed_to_checkout()
    checkout.check_box_agree()
    checkout.Proceed_to_checkout()
    checkout.click_pay_bank()
    checkout.Proceed_to_checkout()
    checkout.complete_buy()
    
    
  })
})