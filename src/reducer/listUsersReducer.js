import { orderAlphabetically } from "../helpers/orderAlphabetically";
import { types } from "./types";

export const listUsersReducer = (state = [], action) => {
    switch (action.type) {
        case types.getUsers:
            return [...action.payload].sort((a, b) => orderAlphabetically(a, b))
        case types.deletUser:
            return state.filter((user) => user.id !== action.payload.idUser).sort((a, b) => orderAlphabetically(a, b))
        case types.editUser:

            return state.map((user) => {
                if (user.id === action.payload.idUser) {
                    return {
                        ...user,
                        name: action.payload.name,
                        username: action.payload.username,
                        email: action.payload.email,
                        website: action.payload.website,
                    }
                }
                return user;

            }).sort((a, b) => orderAlphabetically(a, b));

        default:
            return state;
    }
}


