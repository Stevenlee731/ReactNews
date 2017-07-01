import Api from '../api/newsApi'
import * as types from './actionTypes'
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadSourcesSuccess(sources) {
  return {type: types.LOAD_SOURCES_SUCCESS, sources};
}

export function loadSources() {
  return function (dispatch) {
    // dispatch(beginAjaxCall());
    return Api.getSources().then(response => {
      dispatch(loadSourcesSuccess(response));
    }).catch(error => {
      throw(error);
    });
  };
}
