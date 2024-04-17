import { Outlet, Link  } from "react-router-dom";

export const LandinLayout = () => {
  return (
    <>
      <div>LandinLayout</div>
      <nav>
        <ul>
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          <li>
            <Link to={`/contact`}>Contact</Link>
          </li>
          <li>
            <Link to={`product/2`}>product</Link>
          </li>
          <li>
            <Link to={`/about`}>About</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}
