'use client';

import { useState } from 'react';
import Navbar from '/app/component/nav';
import Footer from '/app/Footter/footter';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Page() {
  const [username, setUserName] = useState('');
  const [password, setPassWord] = useState('');
  const [message, setMessage] = useState(''); // เก็บข้อความแจ้งเตือน

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const res = await fetch('https://backend-chi-ten-88.vercel.app/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      const result = await res.json();
  
      if (res.ok) {
        // บันทึก token และรายละเอียดผู้ใช้ใน localStorage
        localStorage.setItem('token', result.token);
        localStorage.setItem('user', JSON.stringify({ username })); // บันทึกรายละเอียดผู้ใช้
        setMessage('Login successful!');
  
        // เปลี่ยนไปยังหน้า /login/user หลังจากล็อกอินสำเร็จ
        setTimeout(() => {
          window.location.href = 'https://frontend2-hazel.vercel.app/';
        }, 1000); // รอ 1 วินาทีก่อนเปลี่ยนหน้า
      } else {
        setMessage(result.error);
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setMessage('An error occurred during login.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="d-flex align-items-center justify-content-center min-vh-100">
        <div className="card shadow-lg" style={{ maxWidth: '500px', width: '100%' }}>
          <div className="card-header bg-success text-white text-center">
            <h4>Login Form</h4>
          </div>
          <div className="card-body p-4">
            {message && (
              <div className="alert alert-info" role="alert">
                {message}
              </div>
            )}
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="bi bi-person-circle"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="form-label">Password</label>
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon2">
                    <i className="bi bi-lock"></i>
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassWord(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-success">
                  <i className="bi bi-box-arrow-in-right"></i> Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
