/* @flow */
import { LOAD_FROM_FAKE_SECURE_SITE } from "actions/fakesecuresite2";

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_FROM_FAKE_SECURE_SITE:
      return [...state, action.value.data];
    default:
      return state;
  }
};

