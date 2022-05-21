import logo from '../../assets/images/logo.png'
import arrowDown from '../../assets/images/Menu/arrow-down.png'
import ContainerMain from 'pages/common/ContainerMain'
import { useNavigate } from 'react-router-dom'
import { MenuFoldOutlined } from '@ant-design/icons'
import './MenuHeader.scss'
import { useState } from 'react'
import MenuHeaderItem from './MenuHeaderItem'

const menu = [
  {
    name: 'Products',
    link: '',
    children: [
      { name: 'E Commerce Store', link: '/product-store' },
      { name: 'Online-Offline Integrated', link: '/product-integrated' },
      { name: 'AI/Machine Learning Marketing Campaign Management', link: '/product-campaign' },
      { name: 'Performance Dashboard', link: '/product-performance' },
    ]
  },
  {
    name: 'Services',
    link: '',
    children: [
      { name: 'Example', link: '/' },
      { name: 'Example', link: '/' },
      { name: 'Example', link: '/' },
      { name: 'Example', link: '/' },
    ]
  },
  {
    name: 'Channels',
    link: '',
    children: [
      { name: 'Example', link: '/' },
      { name: 'Example', link: '/' },
      { name: 'Example', link: '/' },
      { name: 'Example', link: '/' },
    ]
  },
  {
    name: 'Clients & Partners',
    link: '',
    children: [
      { name: 'Example', link: '/' },
      { name: 'Example', link: '/' },
      { name: 'Example', link: '/' },
      { name: 'Example', link: '/' },
    ]
  },
  {
    name: 'Company',
    link: '',
    children: [
      { name: 'Example', link: '/' },
      { name: 'Example', link: '/' },
      { name: 'Example', link: '/' },
      { name: 'Example', link: '/' },
    ]
  },
]

export default function MenuHeader() {
  const [showMenu, setShowMenu] = useState(false)
  const history = useNavigate()

  const handleChangePage = (url) => {
    history(url)
  }
  return (
    <>
      <div className="iLADtaueIG">
        <ContainerMain>
          <div className="ikDOvZxITU">
            <div className="kqAdKcHozX" onClick={() => handleChangePage('/')}>
              <img alt="" className="EWvuKglUKN" src={logo} />
            </div>
            <div className="ZOuiUtHtvp">
              {showMenu ? <div className='TNIwwzouys' onClick={() => setShowMenu(false)}></div> : null}
              <div className='XZsqtMffgA' onClick={() => setShowMenu(!showMenu)}><MenuFoldOutlined /></div>
              <div className={`VyaXyKqXLW ${showMenu ? 'HpUaUurwJO' : ''}`}>
                <div className="qrhkBMYcGX">
                  <ul className="gGzOKdvNuu">
                    {
                      menu.map((item, key) => {
                        return (
                          <MenuHeaderItem data={item} key={key} />
                        )
                      })
                    }
                  </ul>
                </div>
                <div className="IQCByjNAdN">Contact Us</div>
              </div>
            </div>
          </div>
        </ContainerMain>
      </div>
    </>
  )
}