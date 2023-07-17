import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <br></br><br></br><br></br><br></br>
      <h1 style={styles.title}>404 - Page Not Found</h1>
      <p style={styles.message}>The page you are looking for does not exist.</p>
      <Link to="/" style={styles.button}>Go to Home Page</Link>
    </div>
  );
};

export default NotFoundPage;

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '20px',
  },
  title: {
    fontSize: '32px',
    marginBottom: '10px',
  },
  message: {
    fontSize: '18px',
    marginBottom: '20px',
  },
  button: {
    display: 'inline-block',
    backgroundColor: '#c14c4c',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '16px',
  },
};
