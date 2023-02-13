import { Container, Button, Col, Row } from "react-bootstrap"
import Logo from "../assets/images/Icon.svg";
import Navbar from "../components/Navbar";
import NavigateDetailProperty from "./NavbarDetailProperty";
import "../style/style.css"
import Kosong from "../assets/images/kosong.jpg";
import Isi from "../assets/images/isi.jpg";
import Garis from "../assets/images/garis.jpg";
import Qr from "../assets/images/qr.jpg";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { API } from "../config/api";

function Invoice(props) {
    useEffect(() => {
    document.body.style.background = "rgba(196, 196, 196, 0.25)";
    }); 
    let { data: invoice } = useQuery("invoiceCache", async () => {
      const response = await API.get("/transactions");
      return response.data.data;
    });
    console.log(invoice)
    return (
<div style={{marginTop:"9rem"}}>
        <NavigateDetailProperty userSignIn={props.userSignIn} setUserSignIn={props.setUserSignIn} />
        <Container className="myc fmb" style={{ width: "60%", marginTop: "200px" }}>
        <div className="border border-3 p-4 pe-0 pb-0" style={{backgroundColor:"white"}}>
          <Row style={{}} className="d-flex jcb">
            <Col className="" md="auto" lg={4}>
              <img src={Logo} alt="" />
            </Col>
            <Col className="" md="auto" lg={4}>
              <h2 className="text-center p-0 m-0 fw-bold mb-1">Invoice</h2>
              <p className="text-center p-0 m-0">1111</p>
            </Col>
          </Row>
          <Row style={{}} className="d-flex jcb align-items-center pb-3">
            <Col className="" md="auto" lg={4}>
              <h5 className="fw-bold">House Astina</h5>
              <p>house</p>
              <p className="bg-success w-50 text-center p-1 bg-opacity-10 text-success">Approve</p>
            </Col>
            <Col className="" md="auto" lg={4}>
              <div className="d-flex flex-column ">
                <div className="d-flex  align-items-center gap-4">
                  <div>
                    <img src={Kosong} alt="" />
                  </div>
                  <div className="d-flex flex-column">
                    <span>Check-in</span>
                    <span>in</span>
                  </div>
                  <div className="ms-3 d-flex flex-column">
                    <span>Amenities</span>
                    <span>amitities</span>
                  </div>
                </div>

                <div className="d-flex ">
                  <img style={{ marginLeft: "6px" }} src={Garis} alt="" />
                </div>
                <div className="d-flex  align-items-center gap-4">
                  <div>
                    <img src={Isi} alt="" />
                  </div>

                  <div className="d-flex flex-column ">
                    <span>Check-Out</span>
                    <span>rent1</span>
                  </div>
                  <div className="ms-3 d-flex flex-column ">
                    <span>Type of Rent</span>
                    <span>rent</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="d-flex flex-column justify-content-center align-items-center gap-2" md="auto" lg={4}>
              <img src={Qr} alt="" style={{ width: 150 }} />
              <Button
                type="submit"
                className="position-relative p-0 m-0 bg text-dark bd"
                variant="outline-primary"
              ></Button>
            </Col>
          </Row>
          <Row className="d-flex">
            <Row>
              <Col className="d-flex" md="auto" lg={8}>
                <Col className="d-flex align-items-center" md="auto" lg={1}>
                  <p className="m-0 py-2">No</p>
                </Col>
                <Col className="d-flex align-items-center" md="auto" lg={3}>
                  <p className="m-0">Full Name</p>
                </Col>
                <Col className="d-flex align-items-center" md="auto" lg={3}>
                  <p className="m-0">Gender</p>
                </Col>
                <Col className="d-flex align-items-center" md="auto" lg={3}>
                  <p className="m-0">Phone</p>
                </Col>
              </Col>
            </Row>
            <Row className="border border-start-0 border-end-0  ">
              <Col className="d-flex" lg={8}>
                <Col className="d-flex align-items-center" md="auto" lg={1}>
                  <p className="m-0">1</p>
                </Col>
                <Col className="d-flex align-items-center" md="auto" lg={3}>
                  <p className="m-0">Nama FUll</p>
                </Col>
                <Col className="d-flex align-items-center" md="auto" lg={3}>
                  <p className="m-0">GenderU</p>
                </Col>
                <Col className="d-flex align-items-center" md="auto" lg={3}>
                  <p className="m-0">Phone00</p>
                </Col>
              </Col>
              <Col className="d-flex align-items-center">
                <p className="ps-3 m-0">Long time rent</p>
              </Col>
              <Col className="d-flex align-items-center">
                <p className="m-0 py-2">: </p>
              </Col>
            </Row>
            <Row className="justify-content-end">
              <Col className="d-flex align-items-center" lg={2}>
                <p className=" m-0 ps-3 py-2">Total</p>
              </Col>
              <Col className="d-flex align-items-center" lg={2}>
                <p className="m-0 text-success fw-bold">: HARGA</p>
              </Col>
            </Row>
          </Row>
        </div>
      </Container>
</div> 
    );
}
export default Invoice;
