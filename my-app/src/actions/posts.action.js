import _ from "lodash";
import constants from "../constants";
import { PostAPIServices } from "../services";

export default {
  getAllPosts: () => async dispatch => {
    try {
      const response = await PostAPIServices.getAllPosts();
      const { data } = response;
      const payload = _.get(data, "_entity", []);

      dispatch({
        type: constants.FETCH_ALL_POSTS,
        payload
      });
    } catch (err) {
      throw err
    }
  }
};