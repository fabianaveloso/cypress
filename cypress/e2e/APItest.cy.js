describe('getTest',()=> {

    it('get_test',()=>{
        cy.request({
            method:'GET',
            url:'localhost:3000/books',
            headers:{
              'G-TOKEN':'ROM831ESV'
            }
        }).then((response)=>{
            cy.log(response.status)//201
            cy.log(response.duration)//11
            cy.log(response.body[0]['id'])
            cy.log(response.body[0]['title'])
        })
    })
    it('get_test',()=>{
        cy.request({
            method:'POST',
            url:'localhost:3000/books',
            headers:{
              'G-TOKEN':'ROM831ESV'
            },
            body:{
                
                    "title":"Livro de Cypress",
                    "author": "Veloso",
                    "isbn":"asdfg!@#$%",
                    "releaseDate":"2023-02-06"
                
            }
        }).then((response)=>{
            cy.log(response.status)//201
            cy.log(response.duration)//11
           // cy.log(response.body[0]['id'])
            //cy.log(response.body[0]['title'])
        })
    })
})
