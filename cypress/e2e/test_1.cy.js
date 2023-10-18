/// <reference types="Cypress" />


it('Iniciar sesión con la clave proporcionada', () => {

  const mi_clave = {
        username: 'mimail@gmail.com',
        password: 'laboratorio1'
        };
  
  
      cy.request({
          method: 'POST',
          url: 'https://www.donboscolabs.com.ar:3000/login',
          body: mi_clave,
          headers: {
              'Content-Type':'application/json'
          }
      }).then((respuesta) => {
          expect(respuesta.status).to.equal(200)
          expect(respuesta.body).to.have.property('mensaje','Usuario Autorizado')
      })
  });

  it('Artillery login', () => {

    cy.exec('artillery run test_art.yml > datos.txt') //> datos.txt genera un reporte por ejecución
    .its('code')
    .should('eq',0)

  });
  
