import axios from "axios";
import { environment } from "../../../util/env";

export const post_a_voice_message_Request = async (audioBuffer, user_id) => {
  const { transcriptionEndPoint, usersDataEndPoint } = environment;

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
export const posting_new_text_clip_request = async (new_text_clip_data) => {
  const { usersDataEndPoint } = environment;
  return await axios
    .post(`${usersDataEndPoint}/postNewMessageAtUserData`, new_text_clip_data)
    .then((response) => {
      console.log("RESPONSE AT REQUEST:", response.data);
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export const deleteRecentTextClipRequest = async (requestBody) => {
  const { usersDataEndPoint } = environment;
  return await axios
    .delete(`${usersDataEndPoint}/deleteOneRecentMessageByUserID`, {
      data: requestBody,
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};
