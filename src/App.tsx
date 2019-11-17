import React from 'react';
import './App.css';
import CharacterSearchPanel from './components/character-search-panel/character-search-panel';
import CharacterDetailPanel from './components/character-detail-panel/character-detail-panel';
class App extends React.Component {

  render () {
    return (
        <div className="app-container">
          <div className="banner">
            <section>
              <h1>Star Wars Character Search</h1>
            </section>
          </div>
          <CharacterSearchPanel />
          <CharacterDetailPanel />
      </div>
    );
  }
}

export default App;
