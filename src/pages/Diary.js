import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Diary = () => {
  return (
    <div>
      <h1>다이어리</h1>
      <br />
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>제목</Form.Label>
          <Form.Control size="lg" type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>내용</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="dark" type="submit" href="./Loby">
          저장
        </Button>
      </Form>
    </div>
  );
};

export default Diary;
