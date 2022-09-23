import './index.scss'

function SideBar() {
  return (
    <div className='navigation'>
      <input type='checkbox' className='navigation_checkbox' />
      <label htmlFor='navi-toggle' className='navigation_button'>
        MENU
      </label>
      <div className='navigation_background'>&nbsp;</div>
      <nav className='navigation_nav'>
        <ul className='navigation_list'>
          <li className='navigation_item'>
            <a href='/' className='navigation_link'>
              about
            </a>
          </li>
          <li className='navigation_item'>
            <a href='/' className='navigation_link'>
              your
            </a>
          </li>
          <li className='navigation_item'>
            <a href='/' className='navigation_link'>
              popular
            </a>
          </li>
          <li className='navigation_item'>
            <a href='/' className='navigation_link'>
              stories
            </a>
          </li>
          <li className='navigation_item'>
            <a href='/' className='navigation_link'>
              now
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default SideBar
