import logo from '../../../assets/images/logo.png'
import arrowDown from '../../../assets/images/Menu/arrow-down.png'
import ContainerMain from 'pages/common/ContainerMain'
import './MenuHeader.scss'

export default function MenuHeader() {
  return (
    <>
      <div className="iLADtaueIG">
        <ContainerMain>
          <div className="ikDOvZxITU">
            <div className="kqAdKcHozX">
              <img alt="" className="EWvuKglUKN" src={logo} />
            </div>
            <div className="ZOuiUtHtvp">
              <div className="qrhkBMYcGX">
                <ul className="gGzOKdvNuu">
                  <li className="wzChTCzOBu">
                    <div className="ijgePvHfdq">
                      <span className="dvkRvnvuKA">Products</span>
                      <span className="mVtISIbDJs"><img src={arrowDown} alt="" className="NwbqGDMIDg" /></span>
                    </div>
                    <div className="FOsxgdKAoW">
                      <ul className="vPNTAJAHGT">
                        <li className="mmhezgHPkc">Example</li>
                        <li className="mmhezgHPkc">Example</li>
                      </ul>
                    </div>
                  </li>
                  <li className="wzChTCzOBu">
                    <div className="ijgePvHfdq">
                      <span className="dvkRvnvuKA">Services</span>
                      <span className="mVtISIbDJs"><img src={arrowDown} alt="" className="NwbqGDMIDg" /></span>
                    </div>
                    <div className="FOsxgdKAoW">
                      <ul className="vPNTAJAHGT">
                        <li className="mmhezgHPkc">Example</li>
                        <li className="mmhezgHPkc">Example</li>
                        <li className="mmhezgHPkc">Example</li>
                      </ul>
                    </div>
                  </li>
                  <li className="wzChTCzOBu">
                    <div className="ijgePvHfdq">
                      <span className="dvkRvnvuKA">Channels</span>
                      <span className="mVtISIbDJs"><img src={arrowDown} alt="" className="NwbqGDMIDg" /></span>
                    </div>
                    <div className="FOsxgdKAoW">
                      <ul className="vPNTAJAHGT">
                        <li className="mmhezgHPkc">Example</li>
                        <li className="mmhezgHPkc">Example</li>
                        <li className="mmhezgHPkc">Example</li>
                      </ul>
                    </div>
                  </li>
                  <li className="wzChTCzOBu">
                    <div className="ijgePvHfdq">
                      <span className="dvkRvnvuKA">Clients & Partners</span>
                      <span className="mVtISIbDJs"></span>
                    </div>
                  </li>
                  <li className="wzChTCzOBu">
                    <div className="ijgePvHfdq">
                      <span className="dvkRvnvuKA">Company</span>
                      <span className="mVtISIbDJs"><img src={arrowDown} alt="" className="NwbqGDMIDg" /></span>
                    </div>
                    <div className="FOsxgdKAoW">
                      <ul className="vPNTAJAHGT">
                        <li className="mmhezgHPkc">Example</li>
                        <li className="mmhezgHPkc">Example</li>
                        <li className="mmhezgHPkc">Example</li>
                      </ul>
                    </div>

                  </li>
                </ul>
              </div>
              <div className="IQCByjNAdN">Contact Us</div>
            </div>
          </div>
        </ContainerMain>
      </div>
    </>
  )
}