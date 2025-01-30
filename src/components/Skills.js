
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import {SiNumpy, SiPandas, SiPython, SiPytorch, SiRust, SiScikitlearn, SiTensorflow} from 'react-icons/si'

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>My relevant skills for development of Gen ai models and agents</p>
                        <Carousel responsive={responsive} infinite={false} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                              <SiPython size={40}/>
                                <h5>PYTHON</h5>
                            </div>
                            <div className="item">
                              <SiRust size={40}/>
                                <h5>RUST</h5>
                            </div>
                            <div className="item">
                                <SiPytorch size={40}/>
                                <h5>PYTORCH</h5>
                            </div>
                            <div className="item">
                              <SiTensorflow size={40}/>
                                <h5>TENSORFLOW</h5>
                            </div>
                            <div className="item">
                              <SiPandas size={40}/>
                                <h5>PANDAS</h5>
                            </div>
                            <div className="item">
                              <SiNumpy size={40}/>
                                <h5>NUMPY</h5>
                            </div>
                            <div className="item">
                              <SiScikitlearn size={40}/>
                                <h5>Scikit-learn</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
