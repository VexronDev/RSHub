import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles1.module.css';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const LoginList = [
  {
    Login_img:
      require('@site/static/img/Login_img.jpg').default,
  }
  // {
  //   title: 'Focus on What Matters',
  //   Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
  //   description: (
  //     <>
  //       Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
  //       ahead and move your docs into the <code>docs</code> directory.
  //     </>
  //   ),
  // },
  // {
  //   title: 'Powered by React',
  //   Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
  //   description: (
  //     <>
  //       Extend or customize your website layout by reusing React. Docusaurus can
  //       be extended while reusing the same header and footer.
  //     </>
  //   ),
  // },
];

function handleRedirectLog1() {
  window.location.href = "../../../docs/category/bare-soil";
}

function Login({Login_img}) {
  const [isClicked, setIsClicked] = useState(false);

  const ToRegister = () => {
    setIsClicked(!isClicked);
  };

  const history = useHistory();
    const [LoggedIn, setLogged] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [response, setResponse] = useState('');
    const handleLogin = () => {
      event.preventDefault()
      fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'username': username,
          'password': password
      })
      })
        .then(response => response.json())
        .then((data) => {
          setResponse(data);
          setLogged('True');
          if (data.result) {
           // Store the token in local storage or session storage
          localStorage.setItem('LoggedIn', LoggedIn)
          localStorage.setItem('tokenTmp', data.tokenTmp);
          
          // Redirect to UserPage
          history.push('/UserPage');
          } else {
            console.error('Login failed:', data.error);
          }
        })
        .catch(error => console.error('Error:', error));  
    };

    const [email, setEmail] = useState('');
    const [institution, setInstitution] = useState('');
    const [confirm_password, setPasswordCon] = useState('');
    const [responseReg, setResponseReg] = useState('');

    const handleRegister = () => {
      event.preventDefault()
      fetch('http://127.0.0.1:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'username': username,
          'email'   : email,
          'institution' : institution,
          'confirm_password' : confirm_password,
          'password': password
      })
      })
        .then(response => response.json())
        .then((data) => {
          setResponseReg(data);
          setLogged('True');
          if (data.result) {
           // Store the token in local storage or session storage
          localStorage.setItem('LoggedIn', LoggedIn)
          localStorage.setItem('tokenTmp', data.tokenTmp);
          
          // Redirect to UserPage
          history.push('/UserPage');
          } else {
            console.error('Login failed:', data.error);
          }
        })
        .catch(error => console.error('Error:', error));
    };

  return (
    <div className= {styles.wrapper}>
      <div style={{borderRadius: "10px", overflow: "hidden"}}>
        <div className= {styles.Login_Wrap}>
          <div className= {styles.Form_Wrap}>

            <div className= {isClicked ? styles.Login_Formde : styles.Login_Form}>
              <form action="">
                <h1>Login</h1>
                <div className={styles.Input_center}>
                  <div className={styles.Input_box}>
                    <input name = "username" type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} required></input>
                  </div>

                  <div className={styles.Input_box}>
                    <input name = "password" type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                  </div>
                </div>

                <button type="submit" onClick={handleLogin} value="Login">
                  Login
                </button>
                {response && (
                  <div>
                    <p>{response.result ? "Login Succesful" : response.error}</p>
                  </div>
                )}

                <div>
                  <p> 
                    Don't have an account? {' '}
                    <a href="#" onClick={ToRegister}>
                      Register Here
                    </a>
                  </p>
                </div>
              </form>
            </div>  

            <div className={isClicked ? styles.Register : styles.Registerde}>
              <form styles={{display: "flex", flexDirection: "column"}} action="">
                <h1>
                  Register
                </h1>
                <div className={styles.Input_center}>
                  <div className={styles.Input_box}>
                    <input type="text" id="fullname" name="fullname" placeholder='Username' onChange={(e) => setUsername(e.target.value)} required></input>
                  </div>

                  <div className={styles.Input_box}>
                    <input type="email" id="email" name="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} required></input>
                  </div>

                  <div className={styles.Input_box}>
                    <input type="text" id="institution" name="institution" placeholder='Institution' onChange={(e) => setInstitution(e.target.value)} required></input>
                  </div>

                  <div className={styles.Input_box}>
                    <input type="password" id="password" name="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} required></input>
                  </div>

                  <div className={styles.Input_box}>
                    <input type="password" id="confirm-password" name="confirm-password" placeholder='Confirm Password' onChange={(e) => setPasswordCon(e.target.value)} required></input>
                  </div>
                </div>

                <button type="submit" onClick={handleRegister}>
                  Register
                </button>
                
                {responseReg && (
                  <div>
                    <p>{responseReg.result ? "Registration Succesful" : responseReg.error}</p>
                  </div>
                )}
                <div className='register'>
                  <p> 
                    Already have an account? {' '}
                    <a href="#" onClick={ToRegister}>
                      Login Here
                    </a>
                  </p>
                </div>

                
              </form>
            </div>
          </div>

          <div className= {styles.Login_Img}>
            <img src={Login_img}></img>
          </div>
        </div>
      </div>
    </div> 
  );
}

export default function LoginPage() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {LoginList.map((props, idx) => (
            <Login key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

