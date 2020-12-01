import './App.css';
import Menubar from './components/Menubar';
import Landingsection from './components/Landingsection'
import Addbook from './components/Addbook'
import Contact from './components/contact'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Menubar></Menubar>
      <Landingsection></Landingsection>
      <Addbook></Addbook>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
