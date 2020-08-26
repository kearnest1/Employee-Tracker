const inputEmployee = require('utils/inputEmployee.js');

test('inputEmployee() returns null when all properties exist', () => {
  const obj = {name: 'bella'};

  expect(inputEmployee(obj, 'name')).toBe(null);
});

test('inputEmployee() returns an object when a property is missing', () => {
  const obj = {name: 'bella', occupation: '', id: '', salary: ''};

  expect(inputEmployee(obj, 'name', 'occupation', 'id', 'salary')).toEqual(
    expect.objectContaining({
      error: expect.stringContaining('No occupation specified')
    })
  );
});