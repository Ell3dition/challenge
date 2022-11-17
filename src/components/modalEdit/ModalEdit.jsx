import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useForm } from '../../hooks/useForm';
import { types } from '../../reducer/types';

const EMPTY_USER = {
    idUser: null,
    name: null,
    username: null,
    email: null,
    website: null
}

export const ModalEdit = ({ editModalSettings, dispatch, setModalSettings }) => {
    
    const userInformation = editModalSettings.user;

    const [values, handleInputChange] = useForm({
        name: userInformation.name,
        username: userInformation.username,
        email: userInformation.email,
        website: userInformation.website
    });


    const handleSaveChanges = () => {
        const accion = {
            type: types.editUser,
            payload: {
                idUser: userInformation.idUser,
                name: values.name,
                username: values.username,
                email: values.email,
                website: values.website
            }
        }
        dispatch(accion)
        handleClose();
    }



    const handleClose = () => setModalSettings({
        show: false,
        user: EMPTY_USER
    });


    return (
        <Modal show={editModalSettings.show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Editar Usuario</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={values.name}
                            onChange={handleInputChange}
                            placeholder="Ingrese un Nombre" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>UserName</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingres eun nombre de usuario"
                            name="username"
                            value={values.username}
                            onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Ingrese un correo electrónico"
                            name="email"
                            value={values.email}
                            onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Website</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese una página web"
                            name="website"
                            value={values.website}
                            onChange={handleInputChange} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={handleSaveChanges}>
                    Guardar Cambios
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
