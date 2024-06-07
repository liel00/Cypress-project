
class HomePage{


    element_contains_click_Printed_Dress(){
        cy.father_to_son_contains_click('.center_column','.product-container:visible',3,'Add to cart')
    }

    click_Continue_shopping(){
        cy.click_element('.continue > span')
    }

    element_contains_click_Blouse(){
        cy.father_to_son_contains_click('.center_column','.product-container:visible',1,'Add to cart')
    }
    click_cart(){
        cy.click_element('[title="View my shopping cart"]')
    }

    

}

    export default HomePage;

  