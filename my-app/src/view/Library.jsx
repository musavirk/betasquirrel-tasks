import React, { useState } from "react";
import Main from "../layouts/Main";
import { Row, Col, Table } from "react-bootstrap";

const Library = () => {
  const [libraries, setLibraries] = useState([]);
  setTimeout(() => {
    setLibraries([
      { name: "Musavir", contact: "9747843836" },
      { name: "midlaj", contact: "9478584798573" },
    ]);
  }, 5000);

  return (
    <>
      <Main>
        <Row>
          <h2>Library</h2>
          <hr />
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                </tr>
              </thead>
              <tbody>
                {libraries.map((library, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{library.name}</td>
                      <td>{library.contact}</td>
                    </tr>
                  );
                })}
                {libraries.length === 0 ? (
                  <tr>
                    <td colSpan={3}>No records</td>
                  </tr>
                ) : null}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Library;
