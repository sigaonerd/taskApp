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
	it('should get name from simple endpoint', async () => {
		const response = await axios.get('http://localhost:4000/nome');
		assert.equal(response.data, 'Marcelo Souza Silva');
	});

	it('should get name from graphql"', async () => {
		const response = await axios.post(
			'http://localhost:4000/graphql',
			{ query: 'query { meuNome }' },
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
		assert.equal(response.data.data.meuNome, 'Marcelo Souza Silva');
	});
});
