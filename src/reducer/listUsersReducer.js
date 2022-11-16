import { orderAlphabetically } from "../helpers/orderAlphabetically";
import { types } from "./types";

export const listUsersReducer = (state = [], action) => {
    switch (action.type) {
        case types.getUsers:
            const listUsers = [...action.payload]
            const orderedListUsers = listUsers.sort((a, b) => orderAlphabetically(a, b))
            return orderedListUsers

        case types.deletUser:
            const newListUsers = state.filter((user) => user.id !== action.payload.idUser)
            const newOrderedListUsers = newListUsers.sort((a, b) => orderAlphabetically(a, b))
            return newOrderedListUsers

        case types.editUser:
            const listWithModifiedUser = state.map((user) => {
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

            })
            const sortedListWithModifiedUser = listWithModifiedUser.sort((a, b) => orderAlphabetically(a, b));
            return sortedListWithModifiedUser
        default:
            return state;
    }
}


