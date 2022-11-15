import { useState } from "react";

export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);

    const resetForm = () => {
        setValues(initialState);
    };

    const handleInputChange = (event) => {
        const { target } = event;
        setValues({
            ...values,
            [target.name]: target.value,
        });
    };

    return [values, handleInputChange, resetForm];
};
