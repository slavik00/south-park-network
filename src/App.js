import { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from './components/header/'
import Footer from './components/footer'
import SiteContent from "./containers/siteContent"

import './App.css'
import './style/variables.css'

import appActions from './actions/appActions'

const resizeEvent = () => {

  const handleResize = ({ target }) => {
    const { innerWidth, innerHeight } = target

  }
  
  window.addEventListener('resize', handleResize) 
  return () => window.removeEventListener('resize', handleResize)
}

const App = ({}) => {
  console.log(appActions)
  useEffect(resizeEvent, [])

  return (
    <div className="App">
      <Header />
      <SiteContent />
      <Footer />
    </div>
  );
}

const mapDispathToProps = (dispatch) => ({
  appActions: bindActionCreators(appActions, dispatch)
})

export default connect(null, mapDispathToProps)(App);
