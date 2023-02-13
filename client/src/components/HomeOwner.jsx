import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/Table";
import Navbar from "../components/Navbar";
import magnifiyIc from "../assets/images/magnifiyIc.svg";
import { useEffect } from "react";

function HomeOwner(props) {
  useEffect(() => {
    document.body.style.background = "rgba(196, 196, 196, 0.25)";
  });

  return (
    <>
      <Navbar  />
      <Container style={{ marginTop: "200px" }}>
        <h1>Incoming Transaction</h1>
        <Table className="" striped hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Users</th>
              <th>Type of Rent</th>
              <th>Bukti Transfer</th>
              <th>Status Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
                <tr>
                  <td className="py-3"></td>
                  <td className="py-3"></td>
                  <td className="py-3"></td>
                  <td className="py-3"></td>
                  <td className="py-3"></td>
                  <td className="py-3">
                  </td>
                </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default HomeOwner;

