const assert = require('assert');
const axios = require('axios').default;

describe('Array', function () {
	describe('#indexOf()', function () {
		it('should return -1 when the value is not present', function () {
			assert.equal([1, 2, 3].indexOf(4), -1);
		});
	});
});

describe('HTTP Request', function () {
	it('should get name from simple endpoint', async function () {
		try {
			const response = await axios.get('http://localhost:4000/nome');
			assert.equal(response, 'Marcelo Souza');
		} catch (error) {
			console.error(error);
		}
	});
});
