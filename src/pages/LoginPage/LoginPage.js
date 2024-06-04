import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles1.module.css';
import React, { useState } from 'react';

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

  return (
    <div className= {styles.wrapper}>
      <div style={{borderRadius: "10px", overflow: "hidden"}}>
        <div className= {styles.Login_Wrap}>
          <div className= {styles.Form_Wrap}>

            <div className= {isClicked ? styles.Login_Formde : styles.Login_Form}>
              <form action="">
                <h1>Login</h1>
                <div className={styles.Input_box}>
                  <input type="text" placeholder='Username' required></input>
                </div>

                <div className={styles.Input_box}>
                  <input type="text" placeholder='Password' required></input>
                </div>

                <button type="submit">
                  Login
                </button>

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
              <form action="">
                <h1>
                  Register
                </h1>
                <div className={styles.Input_box}>
                  <input type="text" placeholder='Username' required></input>
                </div>

                <div className={styles.Input_box}>
                  <input type="text" placeholder='Password' required></input>
                </div>

                <button type="submit">
                  Register
                </button>

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

