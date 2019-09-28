import React, { useState } from 'react';
import SearchBar from '../containers/SearchBar/SearchBar';
import CardContainer from '../containers/CardContainer/CardContainer';

const App = (props) => {
  const [user, setUser] = useState(null);
  return (
    <div className="container">
      <h1>Perx Project</h1>
      <div style={{ marginBottom: '20px' }}>
        <SearchBar onSelectUser={setUser} />
      </div>
      <CardContainer user={user} />
    </div>
  );
}

export default App;
