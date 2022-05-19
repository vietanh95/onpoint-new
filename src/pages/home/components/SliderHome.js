import banner1 from '../../../assets/images/Slider/banner-1.png'
import image1 from '../../../assets/images/Slider/image-1.png'
import image2 from '../../../assets/images/Slider/image-2.png'
import image3 from '../../../assets/images/Slider/image-3.png'
import Slider from "react-slick/lib/slider";
import './SliderHome.scss'
import ContainerMain from 'pages/common/ContainerMain';

export default function SliderHome() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
      <div className="bdkTtOROci">
        <div className="RAiNllHuyS">
          <Slider className="uSDdEFzHYz" {...settings}>
            {
              [0, 1, 2, 3, 4, 5, 6].map((item) => {
                return (
                  <div className="ABlEMYolHz">
                    <div className="lpvVqGcPTv"><img alt={''} className="YHNyOFnTTo" src={banner1} /></div>
                    <div className="qIfYHhThla">
                      <ContainerMain>
                        <div className='DEfBfkoSLD'>
                          <div className="qBajkTIXyz">
                            <div className="jJlzQBvBIR">Your trusted partner with a proven track record and extensive industry experience</div>
                            <div className="cuTmJTzgUC">
                              Award-winning e-commerce service provider
                            </div>
                            <div className="oaUyNLhdRP">
                              <img src={image1} alt="" className="bQLobhqdez" />
                              <img src={image2} alt="" className="bQLobhqdez" />
                            </div>
                          </div>
                          <div className="DCJiCEYvSD">
                            <img alt="" className="ShCDnSURBJ" src={image3} />
                          </div>
                        </div>
                      </ContainerMain>
                    </div>
                  </div>
                )
              })
            }
          </Slider>
        </div>
      </div>
    </>
  )
}