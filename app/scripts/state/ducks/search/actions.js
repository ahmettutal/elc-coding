import {searchTypes} from "./types";
import {action} from "typesafe-actions";

export const search = (data) => action(searchTypes.QUERY, {data})
export const searchSuccess = (data) => action(searchTypes.QUERY_SUCCESS, data);
export const searchError = (data) => action(searchTypes.QUERY_ERROR, data);
