import ContainerMain from "pages/common/ContainerMain";
import image1 from '../../../assets/images/OurServices/image-1.png'
import image2 from '../../../assets/images/OurServices/image-2.png'
import image3 from '../../../assets/images/OurServices/image-3.png'
import image4 from '../../../assets/images/OurServices/image-4.png'
import './OurServices.scss'

export default function OurServices() {
  return (
    <>
      <div className="fSTLvrgvKt">
        <ContainerMain>
          <div className="BlpEJrISXN">
            <div className="LHchJgDqrk">Our services</div>
            <div className="NPWcBHPdBy">
              <div className="XMVnTTiQVt">
                <div className="MljFutRpYK"><img alt="" className="GvMWIYQXCn" src={image1} /></div>
                <div className="BzTTmqDpqY">E-marketing Management</div>
                <div className="kyTTgOGgnS">Learn more</div>
              </div>
              <div className="XMVnTTiQVt">
                <div className="MljFutRpYK"><img alt="" className="GvMWIYQXCn" src={image2} /></div>
                <div className="BzTTmqDpqY">E-store Management</div>
                <div className="kyTTgOGgnS">Learn more</div>
              </div>
              <div className="XMVnTTiQVt">
                <div className="MljFutRpYK"><img alt="" className="GvMWIYQXCn" src={image3} /></div>
                <div className="BzTTmqDpqY">Shopper Engagement</div>
                <div className="kyTTgOGgnS">Learn more</div>
              </div>
              <div className="XMVnTTiQVt">
                <div className="MljFutRpYK"><img alt="" className="GvMWIYQXCn" src={image4} /></div>
                <div className="BzTTmqDpqY">Omni-channel Logistics & Fulfilment</div>
                <div className="kyTTgOGgnS">Learn more</div>
              </div>
            </div>
          </div>
        </ContainerMain>
      </div>
    </>
  )
}