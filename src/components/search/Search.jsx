import React from 'react'
import { FaFileExcel } from "react-icons/fa";
import { ContenedorSearch } from './styles';

export const Search = () => {
  return (
    <ContenedorSearch>
      <h4>Usuarios</h4>
      <div>
        <input type="text" />
        <button><FaFileExcel /></button>
      </div>
    </ContenedorSearch>
  )
}
