// ************* Development Environment
// export const environment = {
//   transcriptionEndPoint:
//     "http://10.0.2.2.:5001/cliplybe/us-central1/transcriptionsEndPoint",
//   usersEndPoint: "http://10.0.2.2:5001/cliplybe/us-central1/usersEndPoint",
// };

// ************* Production Environment
export const environment = {
  transcriptionEndPoint:
    "https://us-central1-cliplybe.cloudfunctions.net/transcriptionsEndPoint",
  usersEndPoint:
    "https://us-central1-cliplybe.cloudfunctions.net/usersEndPoint",
  typeMessageEndPoint:
    "https://us-central1-cliplybe.cloudfunctions.net/typeMessageEndPoint",
};
