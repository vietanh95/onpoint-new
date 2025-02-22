import ContainerMain from "pages/common/ContainerMain";
import './WhyNew.scss'

export default function WhyNew({ list }) {
  return (
    <>
      <div className="snElGSLNmQ">
        <ContainerMain>
          <div className="NnSxBIsuoI">
            <div className="MMfVvhsLVK">What We Deliver</div>
            <div className="XTExbngyLb">
              {
                list.map((item, key) => {
                  return (
                    <div className="VaquxsnUKk" key={key}>
                      <div className="vQcAdXDytg"><img src={item?.image} className="qJNLDAUfGI" alt="" /></div>
                      <div className="JsYXPtPyeG">{item?.title}</div>
                      <div className="EBINZolfnD">{item?.description}</div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </ContainerMain>
      </div>
    </>
  )
}