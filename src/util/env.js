// ************* Development Environment
// export const environment = {
//   userEndPoint: `http://10.0.2.2:5001/budgy-bd9b1/us-central1/usersEndPoint`,
//   transactionEndPoint: `http://10.0.2.2:5001/budgy-bd9b1/us-central1/transactionsEndPoint`,
//   categoryListEndPoint: `http://10.0.2.2:5001/budgy-bd9b1/us-central1/categoryListEndPoint`,
//   categoryDataEndPoint: `http://10.0.2.2:5001/budgy-bd9b1/us-central1/categoryDataEndPoint`,
//   realIncomeEndPoint: `http://10.0.2.2:5001/budgy-bd9b1/us-central1/realIncomeEndPoint`,
//   expectedIncomeEndPoint: `http://10.0.2.2:5001/budgy-bd9b1/us-central1/expectedIncomeEndPoint`,
//billsEndPoint: `http://10.0.2.2:5001/budgy-bd9b1/us-central1/billsEndPoint`,
// };

// ************* Production Environment
export const environment = {
  transcriptionEndPoint:
    "https://us-central1-cliplybe.cloudfunctions.net/transcriptionsEndPoint",
  typeMessageEndPoint:
    "https://us-central1-cliplybe.cloudfunctions.net/typeMessageEndPoint",
};
