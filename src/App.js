import './assets/css/style.css';
import './assets/css/responsive.css'
import './assets/css/rsmenu-main.css'
import './assets/css/rs-spacing.css'
import './assets/css/magnific-popup.css'
import Header from './pages/Header';
import Banner from './pages/Banner';
import ChooseUs from './pages/ChooseUs';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import Footer from './pages/Footer';

function App() {
  return (
    
    <div className="App">
      {/* <!-- Main content Start --> */}
        <div className="main-content">
          {/* <Header></Header> */}
          <Banner></Banner>
          {/* <ChooseUs></ChooseUs>
          <Services></Services>
          <ContactUs></ContactUs>
          <Footer></Footer> */}
        </div>
    </div>
  );
}

export default App;
