import React from 'react'
import { FaFileExcel, FaSearch } from "react-icons/fa";
import { ButtonExport, ContenedorSearch, InputSearch, Title, WrapperSearch } from './styles';

export const Search = React.memo(({ searchValue, handleInputChage }) => {
  console.log("Render Search")
  return (
    <ContenedorSearch>
      <Title>Usuarios</Title>
      <WrapperSearch>
        <InputSearch
          type="text"
          value={searchValue.inputSearch}
          onChange={handleInputChage}
          name="inputSearch"
          placeholder='Buscar...'
        />
        <FaSearch className='icon-search' />
        <ButtonExport>
          <FaFileExcel />
        </ButtonExport>
      </WrapperSearch>
    </ContenedorSearch>
  )
})
