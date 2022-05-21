import './WhyProduct.scss'

export default function WhyProduct({ title, description, image, marginTitle = '0px', iconHeader }) {
  return (
    <>
      <div className="RFsqBwFfDx">
        {iconHeader ? <div className="tQABJqigjF"><img src={iconHeader} alt="" className="wmuFooXlAs" /></div> : null}
        <div className="gWVJYTPoZM" style={{ margin: marginTitle }}>{title}</div>
        {description ? <div className="iEjXIcbLTO">{description}</div> : null}
        <div className="qoINoGVEgL">
          <img alt="" className="hNllUaqzHK" src={image} />
        </div>
      </div>
    </>
  )
}