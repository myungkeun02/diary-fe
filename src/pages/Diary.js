import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Dairy = () => {
  return (
    <Container fluid className="bg-white py-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h1 className="text-center mb-4">글쓰기</h1>
          <Form>
            <Form.Group controlId="formBasicTitle">
              <Form.Label>제목</Form.Label>
              <Form.Control type="text" placeholder="Enter title" />
            </Form.Group>

            <Form.Group controlId="formBasicContent">
              <Form.Label>내용</Form.Label>
              <Form.Control
                as="textarea"
                rows={15}
                placeholder="Enter content"
              />
            </Form.Group>
            <Button
              variant="dark"
              type="submit"
              className="w-100 mt-5"
              href="/Blog"
            >
              저장
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Dairy;
