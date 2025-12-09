import { NavLink, Link } from "react-router-dom";

export default function Header() {
    const links = [{
        name: "Home",
        path: "/",
    },
    {
        name: "Aboutus",
        path: "/Aboutus",
    }
    ]
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        Logo
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {links.map((link, index) => {
                                return (
                                    <NavLink key={index} className="nav-link active" aria-current="page" to={link.path}>
                                        {link.name}
                                    </NavLink>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}