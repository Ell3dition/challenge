import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm';
import { useGetFetch } from '../../hooks/useGetFetch';
import { ModalEdit } from '../modalEdit/ModalEdit';
import { RenderIf } from '../renderIf/RenderIf';
import { Search } from '../search/Search';
import { Table } from '../table/Table';
import { Container, Row } from './styles';

const URL_ENDPOINT = "https://jsonplaceholder.typicode.com/users";
export const Main = () => {
  const { data, dispatch } = useGetFetch(URL_ENDPOINT);
  //edit modal settings
  const [editModalSettings, setModalSettings] = useState({
    show: false,
    user: {
      idUser: null,
      name: null,
      username: null,
      email: null,
      website: null
    }
  });

  const [searchValue, handleInputChage] = useForm({
    inputSearch: ""
  });


  //filter users by name property
  let filteredUserList = [];
  if (searchValue.inputSearch.length > 0) {
    filteredUserList = data.filter(user => {
      const lowercaseName = user.name.toLowerCase()
      return lowercaseName.includes(searchValue.inputSearch)
    })
  } else {
    filteredUserList = data
  }


  return (
    <Container className="mt-5">
      <Row>
        <Search
          handleInputChage={handleInputChage}
          searchValue={searchValue}
        />

        <Table
          dispatch={dispatch}
          listUsers={filteredUserList}
          setModalSettings={setModalSettings}
        />
      </Row>

      <RenderIf isTrue={editModalSettings.show}>
        <ModalEdit
          dispatch={dispatch}
          editModalSettings={editModalSettings}
          setModalSettings={setModalSettings} />
      </RenderIf>

    </Container>
  )
}
