
import { InputGroup, FormControl, Button, Row, Col } from 'react-bootstrap';
import BlueBackground from '../shared/BlueBackground';


import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { setLoggedUser } from '../../store/modules/auth/reducer';
import UsersService from '../../services/user';
import { toast } from 'react-toastify';


const LoginForm = ({ titlePhrase, buttonPhrase }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const passwordRef = useRef(null);


  const router = useRouter();
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.auth.loggedUser);

  useEffect(() => {
    if(loggedUser) {
      setEmail(loggedUser.email);
      if(passwordRef && passwordRef.current) {
        passwordRef.current.focus();
      }
    }
  }, [loggedUser])


  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      const response = await UsersService.signIn({ email, password });

      const { id, email: userEmail, name, profile } = response.data.data;

      const user = {
        id,
        name,
        email: userEmail,
        profile: profile
      };

      dispatch(setLoggedUser(user));

      toast.info('Login realizado com sucesso!');

      router.push(user.profile === 'admin' ? '/Admin/' : '/')
    } catch (err) {
      toast.error('E-mail ou senha inválidos!');
    }
  }




  return (
    <form onSubmit={handleSubmit}>
      <Row>
        <Col lg={{ span: 6, offset: 3 }} md={{ span: 8, offset: 2 }}>
          <BlueBackground>
            <h4>{titlePhrase}</h4>


            <InputGroup className="mt-3">
              <FormControl
                placeholder="Meu e-mail"
                value={email}
                type="email"
                onChange={
                  (evt) =>setEmail(evt.target.value)
                }
                required
              />
            </InputGroup>

            <InputGroup className="mt-3">
              <FormControl
                placeholder="Senha"
                value={password}
                type="password"
                onChange={
                  (evt) => setPassword(evt.target.value)
                }
                required
                ref={passwordRef}
              />
            </InputGroup>

            <Button type="submit" className="btn btn-info mt-3 w-100">{buttonPhrase}</Button>

            <br />

            <Link href="/Auth/PasswordRecovery">Esqueci minha senha</Link> <br />
          </BlueBackground>
        </Col>
      </Row>
    </form>
  )
}

export default LoginForm;