import React from 'react'
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2'
import { validateExistenceOfLetterInName } from '../../helpers/validateExistenceOfLetterInName';
import { types } from '../../reducer/types';
import { Pagination } from '../pagination/Pagination';
import { RenderIf } from '../renderIf/RenderIf';
import { Button, TableUsers, Tbody, Td, Tfoot, Th, Thead, TrBody } from './styles'



export const Table = React.memo(({ listUsers, dispatch, setModalSettings }) => {

    const isLoading = false;
    console.log("Render Table")
    console.log(listUsers)

    const handleEdit = (idUser) => {

        const dataUser = listUsers.find(user => user.id === idUser)
        setModalSettings({
            show: true,
            user: {
                idUser,
                name: dataUser.name,
                username: dataUser.username,
                email: dataUser.email,
                website: dataUser.website
            }
        })
    }

    const handleDelete = async (idUser) => {
        const { isConfirmed } = await Swal.fire({
            title: 'Confirmación!',
            text: '¿Seguro que desea borrar este registro?',
            icon: 'warning',
            confirmButtonText: 'Si, borrar',
            showCancelButton: true,

        })

        if (!isConfirmed) return;

        const accion = {
            type: types.deletUser,
            payload: { idUser }
        }

        dispatch(accion);

    }

    return (
        <TableUsers>
            <Thead>
                <tr>
                    <Th>Name</Th>
                    <Th>Username</Th>
                    <Th>Email</Th>
                    <Th>Address</Th>
                    <Th>Website</Th>
                    <Th>Acciones</Th>
                </tr>
            </Thead>

            <Tbody>
                <RenderIf isTrue={isLoading}>
                    <tr><td colSpan={6}>Cargando...</td></tr>
                </RenderIf>
                <RenderIf isTrue={!isLoading}>
                    {
                        listUsers.map((user) => <TrBody key={user.id} isDiferent={validateExistenceOfLetterInName(user.name)} >
                            <Td>{user.name}</Td>
                            <Td>{user.username}</Td>
                            <Td>{user.email}</Td>
                            <Td>{user.address}</Td>
                            <Td>{user.website}</Td>
                            <Td>
                                <Button onClick={() => handleDelete(user.id)} ><FaTrashAlt style={{ width: "50%" }} /></Button>
                                <Button onClick={() => handleEdit(user.id)} ><FaEdit style={{ width: "50%" }} /></Button>
                            </Td>
                        </TrBody>)
                    }

                </RenderIf>
            </Tbody>
            <Tfoot>
                <tr>
                    <th colSpan={6}>
                        <Pagination listUsers={listUsers}></Pagination>
                    </th>
                </tr>
            </Tfoot>
        </TableUsers>
    )
})
