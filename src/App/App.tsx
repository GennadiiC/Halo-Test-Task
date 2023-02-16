import Hero from '../Hero/Hero';
import MiddleContainer from '../Middle/MiddleContainer';
import Slider from '../Slider/Slider';
import Footer from '../Footer/Footer';
import classes from './App.module.scss'
import SliderProvider from '../Slider/Context/SliderContext';


function App() {
  return (
    <div className={classes.container}>
      <Hero />
      <MiddleContainer />
      <SliderProvider>
        <Slider />
      </SliderProvider>
      <Footer />
    </div>
  );
}

export default App;
