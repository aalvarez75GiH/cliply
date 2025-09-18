import axios from "axios";
import { environment } from "../../../util/env";

export const get_user_by_uid_and_user_data_Request = async (uid) => {
  const { usersEndPoint } = environment;
  return await axios
    .get(`${usersEndPoint}/userByUId?uid=${uid}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};
export const post_user_Request = async (user_to_create_at_firebase) => {
  const { usersEndPoint } = environment;

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
export const put_preference_language_Request = async (
  user_id,
  language_chosen
) => {
  const { usersEndPoint } = environment;
  return await axios
    .put(
      `${usersEndPoint}/updatePreferenceLanguage?user_id=${user_id}&preference_language=${language_chosen}`
    )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};
