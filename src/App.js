import React from 'react';
import {Link} from "react-router-dom";

const App = () => {
  return (
      <div>
        App component
        <ul>
          <li>
            <Link to={'users'}>users page</Link>
          </li>
          <li>
            <Link to={'posts'}>posts page</Link>
          </li>
          <li>
            <Link to={'comments'}>comments page</Link>
          </li>
        </ul>
      </div>
  );
};

export default App;
