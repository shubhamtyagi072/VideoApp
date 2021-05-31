import React, { useEffect, useState } from 'react';
import IntroContainer from '../IntroContainer/IntroContainer';
import App from '../../App';
/* es-lint disable */

export default () => {
  const local_token = localStorage.getItem('TOKEN');
  const [token, setToken] = useState(local_token);
  useEffect(() => {}, [token]);
  const handleSubmit = event => {
    event.preventDefault();
    let data = Math.random();
    setToken(data);
    localStorage.setItem('TOKEN', data);
  };

  const handleInput = event => {
    // console.log(event.target.value)
    localStorage.setItem('NAME', event.target.value);
  };

  return (
    <>
      {token === null && (
        <IntroContainer>
          <form>
            <div class="form-group">
              <label> Name</label>
              <input
                onChange={handleInput}
                type="name"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Your Name"
              />
              {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
            </div>
            <button type="submit" onClick={handleSubmit} class="btn btn-primary">
              Submit
            </button>
          </form>
        </IntroContainer>
      )}
      {token !== null && <App token={token} />}
    </>
  );
};
