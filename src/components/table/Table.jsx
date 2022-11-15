import React from 'react'
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { TableUsers, Tbody, Td, Tfoot, Th, Thead } from './styles'

export const Table = () => {
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
                <tr>
                    <Td>Leanne Graham</Td>
                    <Td>Bret</Td>
                    <Td>Sincere@april.bi</Td>
                    <Td>Kulas Lighti</Td>
                    <Td>hildegard.org</Td>
                    <Td>
                        <FaTrashAlt style={{ width: "50%" }} />
                        <FaEdit style={{ width: "50%" }} />
                    </Td>
                </tr>
            </Tbody>
            <Tfoot>
               <tr>
                <th colSpan={6}>Paginación</th>
               </tr>
            </Tfoot>
        </TableUsers>
    )
}
