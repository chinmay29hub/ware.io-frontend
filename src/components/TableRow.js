import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function TableRow(item) {
    return (
        <Row style={{ backgroundColor: "#E5f4ff", borderTop: "none", border: "0.1rem solid #7999B1", borderTops: "none",borderBottom: "none", padding: "0.5rem" }}>
            <Col className="warePackInfoTable">
              <Row style={{ padding: "1rem" }}>
                <Col style={{ display: "flex", justifyItems: "center" }}>
                  <span style={{ padding: "0.5rem" }}>{item.item.product_name}</span>
                </Col>
                <Col style={{display: "flex", justifyItems: "center" }}>
                  <span style={{ padding: "0.5rem" }}>{item.item.date_of_entry}</span>
                </Col>
                <Col style={{display: "flex", justifyItems: "center" }}>
                  <span style={{ padding: "0.5rem" }}>{item.item.date_of_exit}</span>
                </Col>
                <Col style={{display: "flex", justifyItems: "center" }}>
                  <span style={{ padding: "0.5rem" }}>{item.item.date_of_expiry}</span>
                </Col>
                <Col style={{display: "flex", justifyItems: "center" }}>
                  <span style={{ padding: "0.5rem" }}>{item.item.quantity}</span>
                </Col>
                <Col style={{ display: "flex", justifyItems: "center" }}>
                  <span style={{ padding: "0.5rem" }}>{item.item.cost_price}</span>
                </Col>
                <Col style={{ display: "flex", justifyItems: "center" }}>
                  <span style={{ padding: "0.5rem" }}>{item.item.selling_price}</span>
                </Col>
              </Row>
            </Col>
          </Row>
    )
}
export default TableRow