import { useContext } from "react";
import axios from "axios";
import { environment } from "../../../util/env";

export const post_a_voice_message_Request = async (audioBuffer, user_id) => {
  const { transcriptionEndPoint } = environment;
  console.log("USER ID AT REQUEST:", user_id);

  //const { categoryListEndPoint } = environment;
  return await axios
    .post(
      `${transcriptionEndPoint}/postTranscription_to_whisper?user_id=${user_id}`,
      audioBuffer,
      {
        headers: {
          "Content-Type": "audio/m4a", // OR "audio/m4a" — both usually work for M4A
        },
      }
    )
    .then((response) => {
      console.log("RESPONSE AT REQUEST:", response.data);
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export const get_User_Data_Request = async (user_id) => {
  const { usersEndPoint } = environment;
  return await axios
    .get(`${usersEndPoint}/userDataByUserId?user_id=${user_id}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};
