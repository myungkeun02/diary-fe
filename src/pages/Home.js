import Button from "react-bootstrap/Button";
import "../App.css";

const Home = () => {
  return (
    <div className="login">
      <h1>MY DIARY</h1>
      <Button variant="dark" href="./Login">
        로그인하러 가기
      </Button>
    </div>
  );
};

export default Home;