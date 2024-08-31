'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Nav.module.css';

export default function Nav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(''); // เพิ่ม state สำหรับชื่อผู้ใช้

  useEffect(() => {
    // ตรวจสอบสถานะล็อกอินจาก localStorage
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      // ดึงชื่อผู้ใช้จาก localStorage (หรือจาก API ที่เกี่ยวข้อง)
      const storedUsername = localStorage.getItem('username');
      setUsername(storedUsername || 'User');
    }
  }, []);

  const handleLogout = () => {
    // ทำการออกจากระบบที่นี่
    localStorage.removeItem('token'); // ลบ token จาก localStorage
    localStorage.removeItem('username'); // ลบ username จาก localStorage
    setIsLoggedIn(false); // เปลี่ยนสถานะใน state
    setUsername(''); // รีเซ็ตชื่อผู้ใช้
    window.location.href = '/login'; // เปลี่ยนเส้นทางไปที่หน้า login
  };

  return (
    <>
      <header className="d-flex flex-wrap align-items-center justify-content-between py-3 mb-4 border-bottom">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-6 col-md-3 mb-2 mb-md-0">
              {/* Replace the text with your logo image */}
              <Link href="/" className={`d-inline-flex ${styles.logoLink}`}>
                <img src="/img/1.jpg" alt="Logo" className={styles.logo} />
              </Link>
            </div>
            <div className="col-6 col-md-9">
              <nav className="navbar navbar-expand-md">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <Link href="/" className="nav-link px-2 link-secondary">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/about" className="nav-link px-2">
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/Service" className="nav-link px-2">
                        Service
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/Contact" className="nav-link px-2">
                        Contact
                      </Link>
                    </li>
                  </ul>
                  <div className="d-flex ms-md-3 align-items-center">
                    {isLoggedIn ? (
                      <>
                        <span className="me-3">Welcome, {username}!</span> {/* เพิ่มข้อความต้อนรับ */}
                        <button onClick={handleLogout} className="btn btn-danger">
                          Logout
                        </button>
                      </>
                    ) : (
                      <>
                        <Link href="/login" className="btn btn-outline-primary me-2">
                          Login
                        </Link>
                        <Link href="/signup" className="btn btn-primary">
                          Sign-up
                        </Link>
                      </>
                    )}
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
