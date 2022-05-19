import ContainerMain from "pages/common/ContainerMain"
import image1 from '../../../assets/images/News/image-1.png'
import image2 from '../../../assets/images/News/image-2.png'
import image3 from '../../../assets/images/News/image-3.png'
import Slider from "react-slick/lib/slider"
import './News.scss'

export default function News() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
      <div className="WdZHPaJUsL">
        <ContainerMain>
          <div className="svoVqdrGDg">In the News</div>
          <Slider className="bYrVNJdzkW" {...settings}>
            {
              [0, 1, 2, 3, 4, 5, 6].map((item) => {
                return (
                  <div className="OTVSnGvJbu">
                    <div className="EePOugTXGX">
                      <div className="zGDsKXiVOp">
                        <div className="QypwTPNqoS"><img alt="" className="SJVEIkshKX" src={image1} /></div>
                        <div className="BSxRUWALKW">
                          <div className="kQIUVgbbKj"><div className="FXIQCzUdUS">Media</div></div>
                          <div className="mWlYDoscNs">18:00 22/2/2022</div>
                        </div>
                        <div className="OKZiCgTrQx">OnPoint's Tran Vu Quang on how innovations are optimizing...</div>
                        <div className="IpbDjzWUoq">E-commerce has become a driver of growth in an increasingly digitalized business environment. A report by Facebook and Bain & Co cites that Southeast Asia gai...</div>
                        <div className="LeEIMdbPao">Read more</div>
                      </div>
                      <div className="zGDsKXiVOp">
                        <div className="QypwTPNqoS"><img alt="" className="SJVEIkshKX" src={image2} /></div>
                        <div className="BSxRUWALKW">
                          <div className="kQIUVgbbKj"><div className="FXIQCzUdUS">Media</div></div>
                          <div className="mWlYDoscNs">18:00 22/2/2022</div>
                        </div>
                        <div className="OKZiCgTrQx">Vietnam-based e-commerce enabler OnPoint raises $8m...</div>
                        <div className="IpbDjzWUoq">Vietnam-base e-commerce enabler OnPoint has raised over $8 million in Series A funding round led by Kiwoom Investment and Daiwa-SSIAM Vietnam Growth Fund II...</div>
                        <div className="LeEIMdbPao">Read more</div>
                      </div>
                      <div className="zGDsKXiVOp">
                        <div className="QypwTPNqoS"><img alt="" className="SJVEIkshKX" src={image3} /></div>
                        <div className="BSxRUWALKW">
                          <div className="kQIUVgbbKj"><div className="FXIQCzUdUS">Media</div></div>
                          <div className="mWlYDoscNs">18:00 22/2/2022</div>
                        </div>
                        <div className="OKZiCgTrQx">Vietnam-based e-commerce enabler OnPoint raises $8m...</div>
                        <div className="IpbDjzWUoq">Vietnam-base e-commerce enabler OnPoint has raised over $8 million in Series A funding round led by Kiwoom Investment and Daiwa-SSIAM Vietnam Growth Fund II...</div>
                        <div className="LeEIMdbPao">Read more</div>
                      </div>
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