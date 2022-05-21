import { useState } from 'react'
import arrowDown from '../../assets/images/Menu/arrow-down.png'
import { useNavigate } from 'react-router-dom'

export default function MenuHeaderItem({ data }) {
  const [showMenuChildren, setShowMenuChildren] = useState(false)
  const history = useNavigate()

  const handleChangePage = (url) => {
    if (url) {
      history(url)
    } else {
      setShowMenuChildren(!showMenuChildren)
    }
  }

  return (
    <>
      <li className={`wzChTCzOBu ${showMenuChildren ? 'BWdppYCOKf' : ''}`}>
        <div className="ijgePvHfdq" onClick={() => handleChangePage(data?.link)}>
          <span className="dvkRvnvuKA">{data?.name}</span>
          <span className="mVtISIbDJs"><img src={arrowDown} alt="" className="NwbqGDMIDg" /></span>
        </div>
        {
          data?.children && data?.children.length > 0 ? <div className={`FOsxgdKAoW`}>
            <ul className="vPNTAJAHGT">
              {
                data?.children.map((item) => {
                  return (
                    <li className="mmhezgHPkc"
                      onClick={() => handleChangePage(item?.link)}>{item?.name}</li>
                  )
                })
              }
              {/* <li className="mmhezgHPkc"
                onClick={() => handleChangePage('/product-integrated')}>Online-Offline Integrated</li>
              <li className="mmhezgHPkc"
                onClick={() => handleChangePage('/product-campaign')}>AI/Machine Learning Marketing Campaign Management</li>
              <li className="mmhezgHPkc"
                onClick={() => handleChangePage('/product-performance')}>Performance Dashboard</li> */}
            </ul>
          </div> : null
        }

      </li>
    </>
  )
}