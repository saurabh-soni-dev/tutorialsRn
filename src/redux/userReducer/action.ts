import { UserDataState } from "./interface";
import types from "./types";

const saveUserData = (payload: UserDataState) => ({
    type: types.saveUserData,
    payload
})

export {
    saveUserData
}