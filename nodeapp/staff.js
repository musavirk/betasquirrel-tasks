const getStaff = (input, callback) => {
  const staff = [
    { name: 'Varma', email: 'varma@gmail.com', phone: '978657757' },
    { name: 'Ragu', email: 'ragu@gmail.com', phone: '908756666' },
    { name: 'Jhone', email: 'jhonr@gmail.com', phone: '986547474' },
  ];
  callback(200, { message: '', data: staff });
};

module.exports = getStaff;
