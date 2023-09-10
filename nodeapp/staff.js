const getStaff = (input, callback) => {
  const staff = [
    { name: 'Varma', email: 'varma@gmail.com' },
    { name: 'Ragu', email: 'ragu@gmail.com' },
    { name: 'Jhone', email: 'jhonr@gmail.com' },
  ];
  callback(200, { message: '', data: staff });
};

module.exports = getStaff;
