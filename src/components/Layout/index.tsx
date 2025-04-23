import { Link, Outlet } from "react-router"

const Layout = () => {
  return (
    <div>
        <header className="d-flex container justify-content-between py-3">
            <div>
                <Link to={'/'} className="btn btn-link">Home</Link>
            </div>

            <div className="d-flex gap-2">
                <Link to={'/login'} className="btn btn-link">
                    Login
                </Link>
                <Link to={'/register'} className="btn btn-outline-primary">
                    Registro
                </Link>
            </div>
        </header>
        
        <div className="container">
            <Outlet />    
        </div>
    </div>
  )
}

export default Layout