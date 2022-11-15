import React, { useState } from 'react'
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
      idUser:null,
      name: null,
      username: null,
      email: null,
      website: null
  }
  });

  return (
    <Container className="mt-5">
      <Row>
        <Search></Search>
        <Table listUsers={data} dispatch={dispatch} setModalSettings={setModalSettings} />
      </Row>

      <RenderIf isTrue={editModalSettings.show}>
        <ModalEdit editModalSettings={editModalSettings} dispatch={dispatch} setModalSettings={setModalSettings} />
      </RenderIf>

    </Container>
  )
}
