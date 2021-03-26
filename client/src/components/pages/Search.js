import React, { useEffect, useContext } from 'react';
import { Store } from '../../store';
import { logoutUser } from '../../store/actions/authActions';

import API from '../../utils/apiHelper';

const Search = props => {
  const { state, dispatch } = useContext(Store);
  const user = state.auth.user;

  useEffect(() => {
    if (!state.auth.isAuthenticated)
      props.history.push('/login');

    API.getUser()
    .then(res => console.log({ res }))
    .catch(err => console.log({ err }));
  }, [ state, props ]);

  const onLogoutClick = e => {
    e.preventDefault();

    logoutUser(props.history)(dispatch);
  };

  return (
    <div className="container valign-wrapper" style={{ height: 'auto' }}>
      <div className="row">
        <div className="col s12 center-align">
          <h4>
            <b>This is the Search Page, {'  '}</b> {user.name.split(' ')[0]}
            {/* <p>Click to Download resume</p> */}
          </h4>
          <input placeholder="search here"></input>
        <div class="card-body">
          {/* <a href="https://github.com/TylerSilverman/TylerSilverman.github.io/files/5815941/Resume.pdf"
            class="btn btn-link">Click to Download resume</a> */}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
