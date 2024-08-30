'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from './component/nav';
import Footer from '../app/Footter/footter';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    router.push('/login');
  };

  return (
    <>
      <Navbar />

      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/img/1.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/img/1.png" className="d-block w-100" alt="..." />
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        <br />
        <br />
      </div>

      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card mb-3">
              <img src="/img/11.jpg" className="card-img-top custom-img" alt="Card Image" />
              <div className="card-body text-center">
                <h5 className="card-title">Furina</h5>
                <p className="card-text">ตัวละครระดับ 5 ดาว</p>
                <a href="#" className="btn btn-primary">Button</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mb-3">
              <img src="/img/11.jpg" className="custom-img" alt="Card Image" />
              <div className="card-body text-center">
                <h5 className="card-title">Furina</h5>
                <p className="card-text">ตัวละครระดับ 5 ดาว</p>
                <a href="#" className="btn btn-primary">Button</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mb-3">
              <img src="/img/11.jpg" className="card-img-top custom-img" alt="Card Image" />
              <div className="card-body text-center">
                <h5 className="card-title">Furina</h5>
                <p className="card-text">ตัวละครระดับ 5 ดาว</p>
                <a href="#" className="btn btn-primary">Button</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isLoggedIn && (
        <div className="text-center mt-4">
          <button onClick={handleLogout} className="btn btn-danger">
            Logout
          </button>
        </div>
      )}
      <Footer />
    </>
  );
}
