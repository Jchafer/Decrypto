/// <reference types="cypress" />

import { result } from "cypress/types/lodash"

describe('Vamos a comprobar que cargue al menos 1 elemento de la tabla,'+ 
        'que esté ordenado descententemente por capitalización de mercado'+
        'si el valor de la columna 24H es positivo que sea verde, por lo contrario que sea rojo,'+
        'si junto al precio aparece el símbolo del dólar', () => {

    beforeEach(() => {
        cy.visit('/')

    })
    context('Entramos en la aplicación y accedemos al primer elemento de la tabla, comprobando que su valor sea 1'+
        'comprobamos que el primer elemento de Marketcap sea el mayor respecto al resto'+
        'si el valor de la columna 24H es positivo que sea verde, por lo contrario que sea rojo'+
        'si junto al precio está el símbolo del dólar en todos los elementos', () => {
        
        it('Comprobar que el primer elemento de la tabla contiene el texto 1', () => {
            cy.get('tbody > :nth-child(1) > :nth-child(1)').should('have.text', '1')
        })

        it('Obtener el valor del primero elemento marketCap y comparar que sea mayor o igual al resto', () => {
            let firstMarketCap;
            cy.get('tbody > :nth-child(1) > :nth-child(5)').then((result) =>{
                let valueFirstElement = result[0].textContent.split("$");
                firstMarketCap = parseFloat(valueFirstElement[1].split(',').join(''));
            })

            cy.get('.marketCap').each(($el, index, $list) =>{
                let valueOtherElements = $list[index].textContent.split("$");
                let otherMarketCap = parseFloat(valueOtherElements[1].split(',').join(''));
                expect(firstMarketCap >= otherMarketCap).to.be.true;
            })
        });

        it('Obtener el primer caracter de los elementos que hay en la columna 24H, si es - comprobar'+
            'que sea rojo, de lo contrario que sea verde', () => {
                cy.get('.24H').each(($el, index, $list) =>{
                    let valueElements = $list[index].textContent;
                    if (valueElements.charAt(0) == '-'){
                        expect($el).to.have.css('color','rgb(255, 0, 0)');
                    }else{
                        expect($el).to.have.css('color','rgb(0, 128, 0)');
                    }
                })
        })

        it('Obtener el primer caracter del elemento precio y comprobar que sea el $', () => {
            cy.get('.price').each(($el, index, $list) =>{
                let valueElements = $list[index].textContent;
                expect(valueElements.charAt(0)).equal('$');
            })
        })
    })

})