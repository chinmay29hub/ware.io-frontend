import './App.css';
import axios from "axios"
// import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Map from './components/Map/Map';
import React, { useState, useEffect } from 'react';
import TableRow from './components/TableRow';
// import Navbar from './components/navbar/Navbar';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import AddProduct from './components/navbar/addProduct';
import Delete from './components/navbar/deleteProduct';
import Menu from './components/navbar/Navbar';
import UpdateProduct from './components/navbar/updateProduct';
// import TableRow from './components/TableRow'
// import GetData from './components/displayTable/DisplayTableUi';

function App() {
  const [tableInstance, setTableInstance] = useState([]);

  const fetchRowForTable = async () => {
    try {
      const response = await axios.get(`https://ware-io-backend.onrender.com/products`)
      setTableInstance(response.data)
      console.log(tableInstance)
    } catch (e) {
      console.log(e)
    }
  };

  useEffect(() => {
    fetchRowForTable()
  }, []);

  // const fetchRowForTable = async () => {
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:5000/products`
  //     )
  //     setTableInstance(response.data)
  //     console.log(tableInstance)
  //   } catch (e) {
  //     console.log(e)
  //   }
  // };

  // const fetchRowForTable = () => {
  //   fetch("http://localhost:5000/products")
  //     .then((response) => {
  //       const contentType = response.headers.get('content-type');
  //       if (!contentType || !contentType.includes('application/json'))
  //         throw new TypeError("Oops, we haven't got JSON!");
  //       setTableInstance(response.json());
  //     })
  //     .then(() => {
  //       console.log("No JSON received.")
  //     })
  //     .catch((error) => console.error(error));
  //   console.log(tableInstance)
  // }

  return (
    <>
    <BrowserRouter>
        <Menu />
        <Routes>
          {/* <Route path="" element={<App />} /> */}
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/delete" element={<Delete />} />
          <Route path="/update" element={<UpdateProduct />} />
        </Routes>
      </BrowserRouter>

    
    
    <Container fluid className="mainCont" style={{ alignContent: "flex-start", justifyContent: "center", height: "100%", width: "100%" }}>
      <Row style={{ display: "flex", width: "100%", margin: "0" }}>
        <Col style={{ position: "relative" }}>
          <Row style={{ display: "flex", gap: "1.5rem", padding: "1.5rem 0.7rem 0rem 1.5rem", height: "max-content" }}>
            <Col style={{ display: "flex", border: "0.1rem solid darkseagreen", borderRadius: "0.5rem", backgroundColor: "#E4FFDA", width: "max-content", height: "max-content", padding: "1rem", justifyContent: "center" }}>
              {/* <span>Hello</span> */}
              <Map />
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", display: "flex", gap: "1.5rem", padding: "1.5rem 0.7rem 0rem 1.5rem" }}>
            <Col style={{ backgroundColor: "#ffd2d2", border: "0.1rem solid #cda3A3", borderRadius: "0.5rem", width: "max-content", height: "8rem", padding: "1.5rem" }}>
              <span>Percentage Occupied</span>
            </Col>
            <Col style={{ backgroundColor: "#fff8e2", border: "0.1rem solid #cec095", borderRadius: "0.5rem", width: "max-content", height: "8rem", padding: "1.5rem" }}>
              <span>Total Packages</span>
            </Col>
            <Col style={{ backgroundColor: "#eeeaff", border: "0.1rem solid #8f85c4", borderRadius: "0.5rem", height: "8rem",  padding: "1.5rem"  }}>
              <span>Total Entries</span>
            </Col>
          </Row>
          <Row style={{ padding: "1.5rem 0.7rem 0rem 1.5rem", }}>
            <Col className="warePackInfoTable">
              <Row style={{ backgroundColor: "#E5f4ff", borderRadius: "0.5rem 0.5rem 0rem 0rem", border: "0.1rem solid #7999B1", padding: "1rem" }}> 
                <Col style={{display: "flex", justifyItems: "center" }}>
                  <span style={{ padding: "0.5rem" }}>Name</span>
                </Col>
                <Col style={{ display: "flex", justifyItems: "center" }} >
                  <span style={{ padding: "0.5rem" }}>Entry</span>
                </Col>
                <Col style={{ display: "flex", justifyItems: "center" }}>
                  <span style={{ padding: "0.5rem" }}>Exit</span>
                </Col>
                <Col style={{ display: "flex", justifyItems: "center" }}>
                  <span style={{ padding: "0.5rem" }}>Expiry</span>
                </Col>
                <Col style={{ display: "flex", justifyItems: "center" }}>
                  <span style={{ padding: "0.5rem" }}>Stock</span>
                </Col>
                <Col style={{ display: "flex", justifyItems: "center" }}>
                  <span style={{ padding: "0.5rem" }}>Cost Price</span>
                </Col>
                <Col style={{ display: "flex", justifyItems: "center" }}>
                <Col>
                </Col>
                  <span style={{ padding: "0.5rem" }}>Selling Price</span>
                </Col>
              </Row>

          {tableInstance.map((item, index) => {
            /*<tr key={index}>
              <td>{item.product_name}</td>
              <td>{item.selling_price}</td>
              <td>{item.date_of_entry}</td>
              <td>{item.date_of_exit}</td>
              <td>{item.date_of_expiry}</td>
              <td>{item.quantity}</td>
              <td>{item.cost_price}</td>
            </tr>*/
            {return (<TableRow item={item}/>)}})
          }

              <Row style={{ backgroundColor: "#E5f4ff", borderRadius: "0rem 0rem 0.5rem 0.5rem", borderTop: "none",   border: "0.1rem solid #7999B1",  padding: "1rem", marginBottom: "1.5rem"}}>
              </Row>
            </Col>
          </Row>
          {/* <Row style={{ padding: "0rem 0.7rem 0rem 1.5rem", }}>
            <Col className="warePackInfoTable">
              <Row style={{ backgroundColor: "purple", padding: "1rem" }}>
                <Col style={{ backgroundColor: "red", display: "flex", justifyItems: "center" }}>
                  <span style={{ padding: "0.5rem" }}>Package No.</span>
                </Col>
                <Col style={{ backgroundColor: "red", display: "flex", justifyItems: "center" }} >
                  <span style={{ padding: "0.5rem" }}>Package Name</span>
                </Col>
                <Col style={{ backgroundColor: "red", display: "flex", justifyItems: "center" }}>
                  <span style={{ padding: "0.5rem" }}>Quantity</span>
                </Col>
                <Col style={{ backgroundColor: "red", display: "flex", justifyItems: "center" }}>
                  <span style={{ padding: "0.5rem" }}>Health</span>
                </Col>
              </Row>
            </Col>
          </Row> */}
        </Col>
      </Row>
    </Container>
    </>

  );
}

export default App;
