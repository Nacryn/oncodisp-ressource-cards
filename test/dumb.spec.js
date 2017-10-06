// Init Chai and Should
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const should = chai.should();

// Load service to test
const useless = require('../service/dumb');

// And on we go with testing
describe('Dumb service', () => {

  it('should give a generic sentence with no param', () => {
    useless().should.equal('Holding in your words is not going to save you.');
  });

  it('should give back constructed sentence with a given word', () => {
    useless('test').should.equal('The word \'test\' you gave me is useless for now.');
  });
})
