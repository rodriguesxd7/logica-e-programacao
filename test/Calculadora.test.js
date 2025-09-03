const { somarDoisNumeros } = require("../src/calculadora.js")
const { expect } = require('chai')


describe('Somar dois numeros', function(){
    it('Somar dois numeros positivos', function() {
     const result = somarDoisNumeros(5, 3)
        
        expect(result).to.equal(8)
    })
})