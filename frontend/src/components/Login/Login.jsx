import styled from "styled-components";

const LoginStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  block-size: 100vh;
  .login {
    block-size: 34rem;
    inline-size: 30rem;
    background-color: var(--white);
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    align-items: center;
  }
  .login-title {
    margin: 0;
    margin-block-start: 2.75rem;
    padding-inline-start: 0.5rem;
    font: var(--headline-1);
    border-inline-start: 0.5rem solid #feaf00;
  }
  .subtitle-context {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .login-subtitle {
    font: var(--headline-2);
    margin: 0;
  }
  .login-info {
    margin-block-end: 0;
    font: var(--body-1-regular);
    color: var(--grey-1);
  }
  .form {
    max-inline-size: 26rem;
    display: flex;
    flex-direction: column;
  }
  .label {
    font: var(--body-2-medium);
    color: var(--grey-1);
    display: block;
    margin-block-end: 0.5rem;
  }
  .input {
    block-size: 2.75rem;
    margin-block-end: 1rem;
    padding-inline-start: 1rem;
    border: 1px solid #b6b6b6;
    border-radius: 0.5rem;
    font: var(--body-2-medium);
  }
  .button {
    font: var(--body-2-medium);
    display: block;
    block-size: 2.75rem;
    inline-size: 26rem;
    border: 1px solid #feaf00;
    border-radius: 0.5rem;
    background-color: #feaf00;
    padding-inline-start: 1rem;
    color: var(--white);
  }
  .info-password {
    color: #b6b6b6;
    font: var(--body-1-regular);
  }
  .restart {
    color: #feaf00;
    font: var(--body-1-regular);
    text-decoration: underline;
  }
`;

function Login() {
  return (
    <LoginStyled>
      <div className="login">
        <h1 className="login-title">CRUD OPERATIONS</h1>
        <div className="subtitle-context">
          <h3 className="login-subtitle">INICIAR SESION</h3>
          <p className="login-info">
            Ingrese sus credenciales para acceder a su cuenta
          </p>
        </div>
        <form className="form" action="" method="">
          <label className="label" htmlFor="">
            Correo:
          </label>
          <input
            className="input"
            type="text"
            name=""
            placeholder="Ingrese su correo"
          />
          <label className="label" htmlFor="">
            Contraseña:
          </label>
          <input
            className="input"
            type="password"
            name=""
            placeholder="Ingrese su contraseña"
          />
          <input className="button" type="button" value="INICIAR SESION  " />
        </form>
        <p className="info-password">
          Forgot your password?{" "}
          <a href="#" className="restart">
            Reset Password
          </a>
        </p>
      </div>
    </LoginStyled>
  );
}

export default Login;
