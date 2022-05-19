import ContainerMain from "pages/common/ContainerMain";
import Slider from "react-slick/lib/slider";
import logo1 from '../../../assets/images/Clients/logo-1.png'
import logo2 from '../../../assets/images/Clients/logo-2.png'
import logo3 from '../../../assets/images/Clients/logo-3.png'
import logo4 from '../../../assets/images/Clients/logo-4.png'
import logo5 from '../../../assets/images/Clients/logo-5.png'
import logo6 from '../../../assets/images/Clients/logo-6.png'
import logo7 from '../../../assets/images/Clients/logo-7.png'
import logo8 from '../../../assets/images/Clients/logo-8.png'
import logo9 from '../../../assets/images/Clients/logo-9.png'
import logo10 from '../../../assets/images/Clients/logo-10.png'
import logo11 from '../../../assets/images/Clients/logo-11.png'
import logo12 from '../../../assets/images/Clients/logo-12.png'
import logo13 from '../../../assets/images/Clients/logo-13.png'
import logo14 from '../../../assets/images/Clients/logo-14.png'
import logo15 from '../../../assets/images/Clients/logo-15.png'
import logo16 from '../../../assets/images/Clients/logo-16.png'
import logo17 from '../../../assets/images/Clients/logo-17.png'
import logo18 from '../../../assets/images/Clients/logo-18.png'
import logo19 from '../../../assets/images/Clients/logo-19.png'
import logo20 from '../../../assets/images/Clients/logo-20.png'
import logo21 from '../../../assets/images/Clients/logo-21.png'
import logo22 from '../../../assets/images/Clients/logo-22.png'
import logo23 from '../../../assets/images/Clients/logo-23.png'
import logo24 from '../../../assets/images/Clients/logo-24.png'
import logo25 from '../../../assets/images/Clients/logo-25.png'
import logo26 from '../../../assets/images/Clients/logo-26.png'
import logo27 from '../../../assets/images/Clients/logo-27.png'
import logo28 from '../../../assets/images/Clients/logo-28.png'
import logo29 from '../../../assets/images/Clients/logo-29.png'
import logo30 from '../../../assets/images/Clients/logo-30.png'
import './Clients.scss'

export default function Clients() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
      <div className="vlShojONFe">
        <ContainerMain>
          <div className="gUHTRgaYhN">Clients</div>
          <Slider className="PzCqhEeSrK" {...settings}>
            {
              [0, 1, 2, 3, 4, 5, 6].map((item) => {
                return (
                  <div className="VgEAMkHmJM">
                    <div className="nTYFkWTGxl">
                      <div className="CoCMynystk"><img alt="" className="NAKfdAoUxT" src={logo1} /></div>
                      <div className="CoCMynystk"><img alt="" className="NAKfdAoUxT" src={logo2} /></div>
                      <div className="CoCMynystk"><img alt="" className="NAKfdAoUxT" src={logo3} /></div>
                      <div className="CoCMynystk"><img alt="" className="NAKfdAoUxT" src={logo4} /></div>
                      <div className="CoCMynystk"><img alt="" className="NAKfdAoUxT" src={logo5} /></div>
                      <div className="CoCMynystk"><img alt="" className="NAKfdAoUxT" src={logo6} /></div>
                      <div className="CoCMynystk"><img alt="" className="NAKfdAoUxT" src={logo7} /></div>
                      <div className="CoCMynystk"><img alt="" className="NAKfdAoUxT" src={logo8} /></div>
                      <div className="CoCMynystk"><img alt="" className="NAKfdAoUxT" src={logo9} /></div>
                      <div className="CoCMynystk"><img alt="" className="NAKfdAoUxT" src={logo10} /></div>
                      <div className="CoCMynystk"><img alt="" className="NAKfdAoUxT" src={logo11} /></div>
                      <div className="CoCMynystk"><img alt="" className="NAKfdAoUxT" src={logo12} /></div>
                      <div className="CoCMynystk"><img alt="" className="NAKfdAoUxT" src={logo13} /></div>
                      <div className="CoCMynystk"><img alt="" className="NAKfdAoUxT" src={logo14} /></div>
                      <div className="CoCMynystk"><img alt="" className="NAKfdAoUxT" src={logo15} /></div>
                      <div className="CoCMynystk"><img alt="" className="NAKfdAoUxT" src={logo16} /></div>
                      <div className="CoCMynystk"><img alt="" className="NAKfdAoUxT" src={logo17} /></div>
                      <div className="CoCMynystk"><img alt="" className="NAKfdAoUxT" src={logo18} /></div>
                      <div className="CoCMynystk"><img alt="" className="NAKfdAoUxT" src={logo19} /></div>
                      <div className="CoCMynystk"><img alt="" className="NAKfdAoUxT" src={logo20} /></div>
                      <div className="CoCMynystk"><img alt="" className="NAKfdAoUxT" src={logo21} /></div>
                      <div className="CoCMynystk"><img alt="" className="NAKfdAoUxT" src={logo22} /></div>
                      <div className="CoCMynystk"><img alt="" className="NAKfdAoUxT" src={logo23} /></div>
                      <div className="CoCMynystk"><img alt="" className="NAKfdAoUxT" src={logo24} /></div>
                      <div className="CoCMynystk"><img alt="" className="NAKfdAoUxT" src={logo25} /></div>
                      <div className="CoCMynystk"><img alt="" className="NAKfdAoUxT" src={logo26} /></div>
                      <div className="CoCMynystk"><img alt="" className="NAKfdAoUxT" src={logo27} /></div>
                      <div className="CoCMynystk"><img alt="" className="NAKfdAoUxT" src={logo28} /></div>
                      <div className="CoCMynystk"><img alt="" className="NAKfdAoUxT" src={logo29} /></div>
                      <div className="CoCMynystk"><img alt="" className="NAKfdAoUxT" src={logo30} /></div>
                    </div>
                  </div>
                )
              })
            }
          </Slider>
        </ContainerMain>
      </div>
    </>
  )
}