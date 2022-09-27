import './App.css';

// import components
import { Route, Switch } from 'react-router-dom'
import Footer from './components/Footer.js'
import Header from './components/Header.js'

// import pages
import Home from './pages/Home.js'
import About from './pages/About.js';
import Projects from './pages/Projects.js'

function App() {
  const URL = 'https://express-react-lab-peter-lam.herokuapp.com/'
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path='/projects'>
          <Projects URL={URL}/>
        </Route>
        <Route path='about'>
          <About URL={URL}/>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
