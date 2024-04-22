import React from 'react';
import { netIncomes } from './components/data/Data.js';
import './App.css';
import { Container, Row, Col, Table as BootstrapTable } from "react-bootstrap";
import Table from './components/table/Table.jsx';


const totalIncomes = netIncomes.reduce((accumulator, current) => accumulator + current.income, 0);
const averageIncome = totalIncomes / netIncomes.length;
function App() {
  return (

    <>
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <BootstrapTable striped bordered hover>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Ingreso</th>
                </tr>
              </thead>
              <tbody>
                {netIncomes.map((income, index) => (
                  <Table
                    key={index}
                    brand={income.brand}
                    income={income.income}
                  />
                ))}
              </tbody>
              <tfoot>
                <p>Promedio Neto ${averageIncome.toFixed(2)}</p>
              </tfoot>
            </BootstrapTable>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  )
}

export default App;

