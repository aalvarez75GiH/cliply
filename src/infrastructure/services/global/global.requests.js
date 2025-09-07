import axios from "axios";
import { environment } from "../../../util/env";

// export const get_User_Data_Request = async () => {
//     const { transcriptionEndPoint } = environment;
//     //const { categoryListEndPoint } = environment;
//     return await axios
//       .post(
//         `${transcriptionEndPoint}/postTranscription_to_whisper`,
//         audioBuffer,
//         {
//           headers: {
//             "Content-Type": "audio/m4a", // OR "audio/m4a" — both usually work for M4A
//           },
//         }
//       )
//       .then((response) => {
//         return response;
//       })
//       .catch((error) => {
//         return error;
//       });
//   };

export const post_user_Request = async (user_to_create_at_firebase) => {
  const { usersEndPoint } = environment;
  console.log(
    "USER TO CREATE AT FIREBASE AT REQUEST:",
    JSON.stringify(user_to_create_at_firebase, null, 2)
  );
  return await axios
    .post(`${usersEndPoint}`, user_to_create_at_firebase, {
      headers: {
        "Content-Type": "application/json", // Assuming the data is JSON
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};
