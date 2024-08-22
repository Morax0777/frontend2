import Link from "next/link";

export default function Nav() {
  return (
    <>
          <header className="d-flex flex-wrap align-items-center justify-content-between py-2 mb-4 border-bottom">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-12">
              <nav className="navbar navbar-expand-md">
              <a className="navbar-brand">
        <img src="/img/1.jpg" alt="" width="100" height="70" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <a href="/" className="nav-link px-2 link-secondary">Home</a>
                    </li>
                    <li className="nav-item">
                      <Link href="/about" className="nav-link px-2">About</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/Service" className="nav-link px-2">Service</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/Contact" className="nav-link px-2">Contact</Link>
                    </li>
                  </ul>
                  <div className="d-flex ms-md-3">
                    <button type="button" className="btn btn-outline-primary me-2">Login</button>
                    <Link href="/signup" className="btn btn-primary">Sign-up</Link>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}