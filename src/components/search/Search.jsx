import React from 'react'
import { FaFileExcel, FaSearch } from "react-icons/fa";
import { ButtonExport, ContenedorSearch, InputSearch, Title, WrapperSearch } from './styles';

export const Search = React.memo(() => {
  console.log("Render Search")
  return (
    <ContenedorSearch>
      <Title>Usuarios</Title>
      <WrapperSearch>
        <InputSearch type="text" placeholder='Buscar...' />
        <FaSearch className='icon-search'></FaSearch>
        <ButtonExport><FaFileExcel /></ButtonExport>
      </WrapperSearch>
    </ContenedorSearch>
  )
})
