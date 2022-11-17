import React, { useEffect, useState } from 'react'
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2'
import { validateExistenceOfLetterInName } from '../../helpers/validateExistenceOfLetterInName';
import { types } from '../../reducer/types';
import { Pagination } from '../pagination/Pagination';
import { RenderIf } from '../renderIf/RenderIf';
import { Button, TableUsers, Tbody, Td, Tfoot, Th, Thead, TrBody } from './styles'

const USER_PER_PAGE = 3;

export const Table = React.memo(({ listUsers, dispatch, setModalSettings }) => {

   
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [listPagination, setListPagination] = useState([]);

    useEffect(() => {
        setTotalPages(Math.ceil(listUsers.length / USER_PER_PAGE))
    }, [listUsers])

    useEffect(() => {
        if (listUsers.length > 0) {
            handlePagination();
        } else {
            setListPagination([])
        }
    }, [currentPage, listUsers])


    const handlePagination = () => {

        let initPagination = (currentPage - 1) * USER_PER_PAGE
        let count = 0
        let newList = []
        while (count < USER_PER_PAGE) {
            const user = listUsers.find((user) => user.position === initPagination)
          
            if (typeof user != "undefined") {
                newList.push(user)
            }
            initPagination++
            count++
        }
        setListPagination(newList)
    }

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
                <RenderIf isTrue={listPagination.length === 0}>
                    <tr><Td colSpan={6} >Sin registros ...</Td></tr>
                </RenderIf>
                <RenderIf isTrue={listPagination.length > 0}>
                    {
                        listPagination.map((user) => <TrBody key={user.id} isDiferent={validateExistenceOfLetterInName(user.name)} >
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
                    <th colSpan={3}>
                        <span>Motrando {listPagination.length} de {listUsers.length} Registros</span>
                    </th>
                    <th colSpan={3}>
                        <Pagination
                            listUsers={listUsers}
                            setCurrentPage={setCurrentPage}
                            currentPage={currentPage}
                            totalPages={totalPages}

                        />
                    </th>
                </tr>
            </Tfoot>
        </TableUsers>
    )
})
