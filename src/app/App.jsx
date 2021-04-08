import BlogArea from '../components/blog-area/BlogArea.jsx';
import Brand from '../components/brand-area/Brand.jsx';
import CallToAction from '../components/call-to-action/CallToAction.jsx';
import Counter from '../components/counter-area/Counter.jsx';
import Footer from '../components/footer/Footer.jsx';
import Header from '../components/header/Header.jsx';
import HeroArea from '../components/hero-area/HeroArea.jsx';
import Portfolio from '../components/portfolio/Portfolio.jsx';
import Qualification from '../components/qualification/Qualification.jsx';
import Services from '../components/services/Services.jsx';
import SlideMenu from '../components/slide-menu/SlideMenu.jsx';
import Team from '../components/team/Team.jsx';
import Testimonial from '../components/testimonial/Testimonial.jsx';

function App() {
  return (
    <div>
      <Header />
      <HeroArea />  
      <SlideMenu />
      <Services />
      <Qualification />
      <Team />
      <CallToAction />
      <Counter />
      <Portfolio />
      <Testimonial />
      <BlogArea />
      <Brand />
      <Footer />
    </div>
  );
}

export default App;
