import axios from "axios";
import { environment } from "../../../util/env";

export const post_a_typed_message_Request = async (text_to_operate_encoded) => {
  const { typeMessageEndPoint, transcriptionEndPoint } = environment;
  //const { categoryListEndPoint } = environment;
  console.log("TEXT ENCODED AT REQUEST:", text_to_operate_encoded);

  return await axios
    .post(
      `${transcriptionEndPoint}/postTypeMessage?text_to_operate=${text_to_operate_encoded}`
    )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};
