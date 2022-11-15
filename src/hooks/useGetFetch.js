import { useEffect, useReducer } from "react";
import { listUsersReducer } from "../reducer/listUsersReducer";
import { types } from "../reducer/types";

export const useGetFetch = (url) => {

    const [state, dispatch] = useReducer(listUsersReducer, [])

    const getFetch = async () => {
        const response = await fetch(url);
        const data = await response.json();
        const accion = {
            type: types.getUsers,
            payload: data
        }
        dispatch(accion)
    };

    useEffect(() => {
        getFetch();
    }, []);

    return {
        data: state,
        dispatch
    };
};
