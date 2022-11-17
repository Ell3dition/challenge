import { useEffect, useReducer } from "react";
import { listUsersReducer } from "../reducer/listUsersReducer";
import { types } from "../reducer/types";

export const useGetFetch = (url) => {

    const [state, dispatch] = useReducer(listUsersReducer, [])

    const getFetch = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();

            const formatData = data.map(user => ({
                id: user.id,
                name: user.name,
                username: user.username,
                email: user.email,
                address: `${user.address.street} ${user.address.suite} ${user.address.city} ${user.address.zipcode}`,
                website: user.website
            }))
            const accion = {
                type: types.getUsers,
                payload: formatData
            }
            dispatch(accion)
        } catch (error) {
            console.error(error)
            const accion = {
                type: types.getUsers,
                payload: []
            }
            dispatch(accion)
        }
    };

    useEffect(() => {
        getFetch();
    }, []);

    return {
        data: state,
        dispatch
    };
};
