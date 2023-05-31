import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";

function Login() {
  const submit = (event) => {
    event.preventDefault(); // submit 이벤트의 기본 동작을 막는다.

    const id = event.target[0].value;
    const pw = event.target[1].value;

    // 검증
    const emailRegex = new RegExp(
      "([\\w-\\.]+)@((?:[\\w]+\\.)+)([a-zA-Z]{2,4})"
    );
    const passwordRegex = new RegExp("^(?=.*[0-9])(?=.*[a-zA-z]).{8,15}$");

    if (!emailRegex.test(id)) {
      alert("아이디는 이메일 형식으로 입력해주세요.");
      return;
    } else if (!passwordRegex.test(pw)) {
      alert("비밀번호는 영문, 숫자를 포함한 8~15자리로 입력해주세요.");
      return;
    }

    // api 요청
    const body = {
      id: id,
      password: pw,
    };
    const apiAddress = "http://localhost:3001/auth/login";

    axios
      .post(apiAddress, body)
      .then((res) => {
        if (res.status === 200) {
          alert("로그인 성공");
        } else {
          alert("로그인 실패");
        }
      })
      .catch((err) => {
        console.error(err);
        alert(err.response.data.message);
      });
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <h1 className="text-center mb-4">로그인</h1>
          <Form onSubmit={submit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>이메일 주소</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>비밀번호</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="dark" type="submit" className="w-100 mt-5">
              로그인
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
