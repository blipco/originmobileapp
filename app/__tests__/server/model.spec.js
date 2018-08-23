const model = require('../../../common/models/user.json');

test('user model exists', () => {
  expect(model).toHaveProperty('name', 'user');
});
