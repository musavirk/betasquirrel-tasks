const getStudent = (input, callback) => {
  const student = [
    {
      firstName: 'Midlaj',
      lastName: 'K',
      email: 'midlaj@gmail.com',
      phone: '974784836',
    },
    {
      firstName: 'Musavir',
      lastName: 'K',
      email: 'musavir@gmail.com',
      phone: '859093255',
    },
    {
      firstName: 'Ram',
      lastName: 'Raj',
      email: 'ram@gmail.com',
      phone: '97631166',
    },
  ];

  callback(200, { message: '', data: student });
};
module.exports = getStudent;
