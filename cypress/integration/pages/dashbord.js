export class Dashbord {

elements={

inventoryList:'.inventory_list',
inventoryItem:'.inventory_item',
}
listofProduct(){

    cy.get(this.elements.inventoryItem).should('have.length',6)
}
addingPrice(){

    let sum = []
    cy.get('.inventory_item_price').each(function(el){
       let pri = el.text().replace('$',' ').trim()
       cy.log(pri)
    //    pri.each(function(el){
    //     sum+= sum.push(el)
    //    })
    //        // sum+= sum.push(pri) 
    })
}
findElement(){
cy.get('.inventory_item_name').each(function(el){

    cy.log(el.text())
})

}

}