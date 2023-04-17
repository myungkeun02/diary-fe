import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Blog() {
  // 예시 데이터
  const posts = [
    {
      id: 1,
      title: "첫 번째 글",
      content: "첫 번째 글 내용입니다.",
    },
    {
      id: 2,
      title: "두 번째 글",
      content: "두 번째 글 내용입니다.",
    },
    {
      id: 3,
      title: "세 번째 글",
      content: "세 번째 글 내용입니다.",
    },
  ];

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center">글 목록</h1>
        </Col>
      </Row>
      <Row>
        {posts.map((post) => (
          <Col md={4} key={post.id}>
            <Card>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.content}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="justify-content-center mt-3">
        <Col md={4} className="text-center">
          <Button
            variant="dark"
            type="submit"
            className="w-100 mt-5"
            href="/Diary"
          >
            글쓰기
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
export default Blog;
