import { Container, Row, Col } from "react-bootstrap";

const MyFooter = () => {
  return (
    <Container id="footer" style={{ color: "gray" }}>
      <Row class="justify-content-center">
        <Col class="col-8" id="footer-icons">
          <i class="footer-icons text-secondary mx-2 bi bi-facebook"></i>
          <i class="footer-icons text-secondary mx-2 bi bi-instagram"></i>
          <i class="footer-icons text-secondary mx-2 bi bi-twitter"></i>
          <i class="footer-icons text-secondary mx-2 bi bi-youtube"></i>
        </Col>

        <Row class="col-8 px-2">
          <Col
            class="col-12 col-sm-6 col-md-4 col-lg-3"
            style={{ color: "gray" }}
          >
            <ul>
              <li>Info</li>
              <li>Meida Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>

            <button class="footer-btn">Service Code</button>
          </Col>

          <Col class="col-12 col-sm-6 col-md-4 col-lg-3">
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notices</li>
            </ul>
          </Col>

          <Col class="col-12 col-sm-6 col-md-4 col-lg-3">
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </Col>

          <Col class="col-12 col-sm-6 col-md-4 col-lg-3">
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </Col>
        </Row>
      </Row>
      <p class="copyright text-secondary">
        © 2021 Striveflix, inc. Francesco Micunco
      </p>
    </Container>
  );
};
export default MyFooter;
