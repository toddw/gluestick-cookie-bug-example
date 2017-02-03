/* @flow */
import { LOAD_FROM_WEBSITE } from "actions/website1";

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_FROM_WEBSITE:
      return [...state, action.value.data];
    default:
      return state;
  }
};
