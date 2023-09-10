import React, { useState } from "react";
import Main from "../layouts/Main";
import { Col, Row, Table } from "react-bootstrap";
const Inventory = () => {
  const [inventories, setInventories] = useState([]);
  setTimeout(() => {
    setInventories([
      { book: "To Kill a Mockingbird", author: "Harper Lee", available: "Yes" },
      { book: "1984", author: "George Orwell", available: "No" },
      { book: "A", author: "AA", available: "Yes" },
    ]);
  }, 5000);
  return (
    <>
      <Main>
        <Row>
          <h2>Inventory</h2>
          <hr />
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>SI</th>
                  <th>Book</th>
                  <th>Author Name</th>
                  <th>Availability</th>
                </tr>
              </thead>
              <tbody>
                {inventories.map((inventory, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{inventory.book}</td>
                    <td>{inventory.author}</td>
                    <td>{inventory.available}</td>
                  </tr>
                ))}
                {inventories.length === 0 ? (
                  <tr>
                    <td colspan="4">No records</td>
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

export default Inventory;
