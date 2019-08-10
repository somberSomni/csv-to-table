import React from 'react';
import styled from 'styled-components';
//components
import Form from './components/Form.jsx';
import Table from './components/Table.jsx';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faExchangeAlt } from '@fortawesome/pro-regular-svg-icons';
import { faFileCsv, faTable } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
library.add(
  faFileCsv,
  faTable,
  faExchangeAlt
);

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  font-family: 'Julius Sans One', san-serif;
  margin-bottom: -10px;
  color: white;
`;

const HeadTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export default function App() {
  const fAStyle = {
    margin: 10
  }

  return (
    <div className='App'>
      <Title>
        <HeadTitle>
          <h1 style={{ fontSize: '3em'}}>CSV to Table</h1>
          <FontAwesomeIcon size='4x' style={fAStyle} icon={['fal', 'file-csv']} />
          <FontAwesomeIcon size='4x' style={fAStyle} icon={['far', 'exchange-alt']} />
          <FontAwesomeIcon size='4x' style={fAStyle} icon={['fal', 'table']} />
        </HeadTitle>
        <h5 style={{ marginTop: -10 }}>Can take a csv file and turns it into a table</h5>
      </Title>
      <Form />
      <Table />
    </div>
  );
}
