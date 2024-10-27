import React, { useState } from 'react'; // Ensure useState is imported
import Home from './main/Home';
import About from './main/About';
import Blog from './main/Blog';
import Items from './main/Items';
import Ogaga from './main/Ogaga';

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "blog":
        return <Blog />;
      case "items":
        return <Items />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app">

      <Ogaga setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
};

export default App;