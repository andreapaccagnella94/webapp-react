import { NavLink } from "react-router-dom";

export default function Header() {

    // create const for link names and hrefs
    const menuLinks = [
        { id: 1, name: "Home", link: "/" },
        { id: 2, name: "Movies", link: "/movies" },
        { id: 3, name: "Admin", link: "/admin" },
    ];

    return (
        <header>

            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">Movies Reviews</a>
                    <button
                        className="navbar-toggler d-lg-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mainNavId"
                        aria-controls="mainNavId"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mainNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            {menuLinks.map((item) => (
                                <li className="nav-item" key={item.id}>
                                    <NavLink className="nav-link" to={item.link} aria-current="page">
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                        <form className="d-flex my-2 my-lg-0">
                            <input
                                className="form-control me-sm-2"
                                type="text"
                                placeholder="Search"
                            />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>

        </header>
    )
}