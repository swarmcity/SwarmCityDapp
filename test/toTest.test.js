const assert = require('assert');
require('../src/redux/sagas/testingJsImports')
const toBeTested = global.toBeTested

console.log(toBeTested)

describe('toBeTested', function() {
    it('should sum two numbers', function() {
        const result = toBeTested(1, 2)
        assert.equal(result, 3);
    });
});