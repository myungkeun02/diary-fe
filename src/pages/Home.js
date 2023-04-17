import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../App.css";

const Home = () => {
  return (
    <Container fluid className="bg-white py-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h1 className="text-center mb-4">나의 일기장</h1>
          <Button
            variant="dark"
            type="submit"
            className="w-100 mt-5"
            href="/login"
          >
            로그인하러가기
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
