import { useContext } from "react";
import axios from "axios";
import { environment } from "../../../util/env";

export const post_a_voice_message_Request = async (audioBuffer) => {
  const { transcriptionEndPoint } = environment;

  //const { categoryListEndPoint } = environment;
  return await axios
    .post(
      `${transcriptionEndPoint}/postTranscription_to_whisper`,
      audioBuffer,
      {
        headers: {
          "Content-Type": "audio/m4a", // OR "audio/m4a" — both usually work for M4A
        },
      }
    )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export const get_User_Data_Request = async (user_id) => {
  const { usersEndPoint } = environment;
  //const { categoryListEndPoint } = environment;
  return await axios
    .get(`${usersEndPoint}/userDataByUserId?user_id=${user_id}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};
