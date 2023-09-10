const getStudent = (input, callback) => {
  const student = [
    { name: 'Midlaj', email: 'midlaj@gmail.com' },
    { name: 'Musavir', email: 'musavir@gmail.com' },
    { name: 'Ram', email: 'ram@gmail.com' },
  ];

  callback(200, { message: '', data: student });
};
module.exports = getStudent;
