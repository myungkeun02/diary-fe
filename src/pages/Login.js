import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Login() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <h1 className="text-center mb-4">로그인</h1>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>이메일 주소</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>비밀번호</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button
              variant="dark"
              type="submit"
              className="w-100 mt-5"
              href="./Diary"
            >
              로그인
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
