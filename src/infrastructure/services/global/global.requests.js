// import axios from "axios";
// import { environment } from "../../../util/env";

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
