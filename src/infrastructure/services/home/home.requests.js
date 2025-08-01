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
