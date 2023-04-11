import './styles/homePage.css';
import Header from '../shared/Header';
import Main from '../components/Home/Main';
import Virtudes from '../components/Home/Virtudes';
import Services from '../components/Home/Services';
import Stats from '../components/Home/Stats';
import AboutUs from '../components/Home/AboutUs';
import Contact from '../components/Home/Contact';
import Testimonials from '../components/Home/Testimonials';
import Gallery from '../components/Home/Gallery';
import Footer from '../shared/Footer';
import GoogleMaps from '../components/Home/GoogleMaps';
import Copyright from '../shared/Copyright';

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <Main />
      <Virtudes />
      <AboutUs />
      <Services />
      <Stats />
      <Gallery />
      <Testimonials />
      <GoogleMaps />
      <Contact />
      <Footer />
      <Copyright />
    </div>
  );
};

export default HomePage;
