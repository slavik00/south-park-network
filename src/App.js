import './App.css';
import Header from './components/header/'
import SideBar from './components/sideBar';
import SiteContent from "./containers/siteContent";

function App() {
  return (
    <div className="App">
      <Header />
      <SiteContent />
    </div>
  );
}

export default App;
