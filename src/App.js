import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';
<<<<<<< HEAD
=======
import Detail from './routes/Detail';
>>>>>>> 27515f13daddc947fc4591ac9c3ab39a5851c17e

function App() {
  return (
    <HashRouter>
<<<<<<< HEAD
      <Navigation/>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About}/>
    </HashRouter>
  );
=======
      <Navigation />
      <Route path="/" exact={true} component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/movie-detail" component={Detail} />
    </HashRouter>
  )
>>>>>>> 27515f13daddc947fc4591ac9c3ab39a5851c17e
}

export default App;