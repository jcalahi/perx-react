import React, { useState } from 'react';
import SearchBar from '../containers/SearchBar/SearchBar';
import CardContainer from '../containers/CardContainer/CardContainer';
// css
import './app.css';

const App = (props) => {
  const [user, setUser] = useState(null);
  return (
    <div className="container">
      <h1>Perx React</h1>
      <div className="search">
        <SearchBar onSelectUser={setUser} />
      </div>
      <CardContainer user={user} />
    </div>
  );
}

export default App;
