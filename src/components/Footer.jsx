import { Link } from "react-router-dom";

export default function Footer() {


    // create const for quicklink 
    const menuLinks = [
        { id: 1, name: "Home", link: "/" },
        { id: 2, name: "Movies", link: "/movies" },
        { id: 3, name: "Admin", link: "/admin" },
    ];
    //create const for contact us
    const contactLinks = [
        { id: 1, name: "Email", link: "/contact/email" },
        { id: 2, name: "Phone", link: "/contact/phone" },
        { id: 3, name: "Support", link: "/contact/support" },
    ];

    return (
        <footer className="bg-light py-5">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <i className="bi bi-film"></i>
                        <p>&copy; 2025 My Website</p>
                    </div>
                    <div className="col">
                        <h4>Quick Links</h4>
                        <ul className="list-unstyled">
                            {menuLinks.map((item) => (
                                <li key={item.id}>
                                    <Link to={item.link}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col">
                        <h4>Contact Us</h4>
                        <ul className="list-unstyled">
                            {contactLinks.map((item) => (
                                <li key={item.id}>
                                    <Link to={item.link}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}