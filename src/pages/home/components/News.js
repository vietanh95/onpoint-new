import ContainerMain from "pages/common/ContainerMain";
import image1 from "../../../assets/images/Home/News/image-1.png";
import Slider from "react-slick/lib/slider";
import "./News.scss";

export default function News() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <div className="WdZHPaJUsL">
        <ContainerMain>
          <div className="svoVqdrGDg">In the News</div>
          <Slider className="bYrVNJdzkW" {...settings} autoplay={true}>
            {[0, 1, 2, 4].map((item) => {
              return (
                <div className="EePOugTXGX" key={item}>
                  <NewsCard data={item} />
                </div>
              );
            })}
          </Slider>
        </ContainerMain>
      </div>
    </>
  );
}

const NewsCard = ({ data }) => {
  return (
    <div className="zGDsKXiVOp">
      <div className="QypwTPNqoS">
        <img alt="" className="SJVEIkshKX" src={image1} />
      </div>
      <div className="BSxRUWALKW">
        <div className="kQIUVgbbKj">
          <div className="FXIQCzUdUS">Media {data}</div>
        </div>
        <div className="mWlYDoscNs">18:00 22/2/2022</div>
      </div>
      <div className="OKZiCgTrQx">
        OnPoint's Tran Vu Quang on how innovations are optimizing...
      </div>
      <div className="IpbDjzWUoq">
        E-commerce has become a driver of growth in an increasingly digitalized
        business environment. A report by Facebook and Bain & Co cites that
        Southeast Asia gai...
      </div>
      <div className="LeEIMdbPao">Read more</div>
    </div>
  );
};
