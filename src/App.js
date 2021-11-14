import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './pages/About/About'
import Donation from './pages/Donation'
import Home from './pages/Home/Home'
import Live from './pages/Live'
import Prophetess from './pages/Prophetess'
import History from './pages/History'
import Prayer from './pages/Prayer/Prayer'
import Representatives from './pages/Representatives/Representatives'
import Directors from './pages/Directors'
import Join from './pages/Join/Join'
import Programmes from './pages/Programmes/Programmes'
import Team from './pages/Teams/Team'
import Responsibility from './pages/Responsibility/Responsibility'
import Gallery from './pages/Gallery/Gallery'
import Members from './pages/Members/Members'
import ErrorPage from './pages/ErrorPage'
import Testimony from "./pages/Testimony/Testimony"
import Partnership from './pages/Partnership/Partnership'

function App() {
  
  return (
    <Router>
      <Switch>
          <Route exact path="/" >
              <Home/>
          </Route>
          <Route path="/live" >
              <Live/>
          </Route>
          <Route path="/support" >
              <Donation/>
          </Route>
          <Route path="/about" >
              <About/>
          </Route>
          <Route path="/Prophetess" >
              <Prophetess/>
          </Route>
          <Route path="/history" >
              <History/>
          </Route>
          <Route path="/prayer" >
              <Prayer/>
          </Route>
          <Route path="/testimony" >
              <Testimony/>
          </Route>
          <Route path="/representatives" >
              <Representatives/>
          </Route>
          <Route path="/directors" >
              <Directors/>
          </Route>
          <Route path="/join" >
              <Join/>
          </Route>
          <Route path="/programmes" >
              <Programmes/>
          </Route>
          <Route path="/team" >
              <Team/>
          </Route>
          <Route path="/responsibility" >
              <Responsibility/>
          </Route>
          <Route path="/gallery" >
              <Gallery/>
          </Route>
          <Route path="/members" >
              <Members/>
          </Route>
          <Route path="/partnership" >
              <Partnership/>
          </Route>
          <Route path="*" >
              <ErrorPage/>
          </Route>
      </Switch>
    </Router>
  )
}

export default App
