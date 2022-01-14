import { Container, Form } from "./style";
import imgPerson from '../../assets/img/man.png';

export default function Home() {
  return(
    <Container>
      
      <Form>
        <h1>UserBiker</h1>
        <h2>Login</h2>
        <span>Email</span>
        <input type="email" placeholder="user@email.com" />
        <span>Password</span>
        <input type="password" placeholder="*******" />
        <button type="button">Sign In</button>
      </Form>
      <img src={imgPerson} alt="Person" />
    </Container>
  )
}