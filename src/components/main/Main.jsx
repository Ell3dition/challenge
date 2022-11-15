import React from 'react'
import { Search } from '../search/Search';
import { Table } from '../table/Table';
import { Container, Row } from './styles';


export const Main = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Search></Search>
        <Table></Table>
      </Row>


    </Container>
  )
}
