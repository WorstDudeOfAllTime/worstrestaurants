import styles from './../styles/SignIn.module.css';
import { useRef } from 'react';
const SignIn = () => {
  const nameRef = useRef("");
  const passwordRef = useRef("");
  return (
    <div className={`flexCent ${styles.signIn}`}>
      <form
        className={`flexCentCol ${styles.signInForm}`}
        onSubmit={(e) => {
          e.preventDefault();
          console.log(nameRef.current.value)
          console.log(passwordRef.current.value)
        }}
      >
        <h2 style={{color: 'black'}}>Sign In.</h2>
        <input type="email" ref={nameRef}></input>
        <input type="password" ref={passwordRef}></input>
        <button type="submit"></button>
      </form>
    </div>
  );
};

export default SignIn;
