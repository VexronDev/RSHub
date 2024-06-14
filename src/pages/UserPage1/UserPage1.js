import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles2.module.css';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UserList = [
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

function Userfun({Login_img}) {
  const [isClicked, setIsClicked] = useState(false);

  const ToRegister = () => {
    setIsClicked(!isClicked);
  };

    const tokenTmp = localStorage.getItem('tokenTmp');
    const [profileData, setProfileData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
      // Fetch user profile data from the backend using the token
      if (tokenTmp) {
        fetch('http://127.0.0.1:5000/profile', {
          method: 'POST', // Change method to POST
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            tokenTmp: tokenTmp // Include tokenTmp in the request body
          }),
        })
        .then((response) => {
          if (!response.ok) {
            console.log(response.tokenTmp)
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => setProfileData(data))
        .catch((error) => {
        console.error('Error:', error);
          setError(error);
        });
      }
    }, []);

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [institution, setInstitution] = useState('');
    const [confirm_password, setPasswordCon] = useState('');

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
        .then(data => setResponse(data))
        .catch(error => console.error('Error:', error));
    };

  return (
    <div className= {styles.wrapper}>

      <div style={{borderRadius: "10px", overflow: "hidden"}}>
        <div className={styles.UserWrap}>
            <div style={{height: "5vh"}}></div>
            <h1>Welcome Back</h1>
            <div className={styles.UserInfoCol}>
              <div className={styles.UserInfoRow}>
                Username: &nbsp;
                {profileData && (
                <div>
                  {profileData.result ? profileData.username : "Username failed to load"}
                </div>
                )}
              </div>

              <div className={styles.UserInfoRow}>
                Email: &nbsp;
                {profileData && (
                <div>
                  {profileData.result ? profileData.email : "Email failed to load"}
                </div>
                )}
              </div>

              <div className={styles.UserInfoRow}>
                Organization: &nbsp;
                {profileData && (
                <div>
                  {profileData.result ? profileData.organization : "Organization failed to load"}
                </div>
                )}
              </div>

              <div className={styles.UserProjects}>
                <div className={styles.token}> Token (Please don't share!): &nbsp;
                  {profileData && 
                  (
                    <div>
                    {profileData.result ? profileData.token : "Token failed to load"}
                    </div>
                  )}
                </div>
                <h2>Project</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Projects</th>
                    </tr>
                  </thead>
                  <tbody>
                    {profileData && (profileData.projectlist.map((project, index) => (
                      <tr key={index}>
                        <td>{project}</td>
                      </tr>
                    )))}
                  </tbody>
                </table>
              </div>
              
            </div>
        </div>
      </div>
    </div> 
  );
}

export default function UserPage1() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {UserList.map((props, idx) => (
            <Userfun key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

