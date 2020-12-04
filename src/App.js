import './App.css'
import './style/variables.css'
import Header from './components/header/'
import Footer from './components/footer'
import SiteContent from "./containers/siteContent"

function App() {
  return (
    <div className="App">
      <Header />
      <SiteContent />
      <Footer />
    </div>
  );
}

export default App;
