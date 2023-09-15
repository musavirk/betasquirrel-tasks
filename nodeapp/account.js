const getAccounts = (input, callback) => {
  const account = [
    {
      firstName: 'Raj',
      lastName: 'Mohan',
      amount: '50000',
      date: '02/09/2023',
    },
    { firstName: 'Ram', lastName: 'B', amount: '75000', date: '03/09/2023' },
    { firstName: 'Vinay', lastName: 'K', amount: '45000', date: '04/09/2023' },
    { firstName: 'Vijay', lastName: 'M', amount: '100000', date: '05/09/2023' },
  ];
  callback(200, { message: '', data: account });
};
module.exports = getAccounts;
