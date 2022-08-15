describe('MOVA', () => {
  
  beforeEach(() => {
    cy.visit('https://duckduckgo.com/')
  });

  it('Digitando e utilizando ENTER para buscar', () => {
    cy.get('[placeholder="Search without being tracked"]').type('Bitcoin{enter}') // box de pesquisa e tecla enter
    cy.get('.nrn-react-div').should('have.length',11) //confirma se tem mais de 10 resultados na pesquisa
  
  })
  
  it('Digitando e utilizando o clique na lupa para buscar', () => {
    cy.get('[placeholder="Search without being tracked"]').type('Bitcoin') // box de pesquisa 
    cy.get('.searchbox_searchButton__F5Bwq').click() //clique na lupa
    cy.get('.nrn-react-div').should('have.length',11) //confirma se tem mais de 10 resultados na pesquisa

  });

  it('Utilizando o formulário diretamente', () => {
    cy.get('[placeholder="Search without being tracked"]').type('Bitcoin') // box de pesquisa
    cy.get('#listbox--searchbox_homepage').contains('bitcoin').click()    //clique no dropdown
    cy.get('.nrn-react-div').should('have.length',11) //confirma se tem mais de 10 resultados na pesquisa
    
  });
})