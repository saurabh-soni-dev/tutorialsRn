import { UserDataState } from "./interface"
import types from "./types";

const initialState = {
    userData: undefined
}

const UserReducer = (state: UserDataState = initialState, action: any) => {
    switch (action.type) {
        case types.saveUserData:
            return {
                ...state,
                userData: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default UserReducer