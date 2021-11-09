import React from 'react'
import Header from './Header'
import Explore from './Explore'
import ExploreDiv from './ExploreDiv';
import Choices from './Choices';
import Hosting from './Hosting';
import Discover from './Discover';



function App() {
  return (
    <div>
      <Header />
      <ExploreDiv/>
      <Explore />
      <Choices />
      <Hosting />
      <Discover />
    </div>
  );
}

export default App;
