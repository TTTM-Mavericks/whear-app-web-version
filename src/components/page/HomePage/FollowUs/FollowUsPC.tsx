import React from 'react';
import './FollowUsPC.css';

const FollowUsSectionPC: React.FC = () => {
  return (
    <section className="follow-us-section">
      <h1>FOLLOW US</h1>
      {/* Đây là ảnh và link tạm khi nào có bài đăng trên instagram sẽ đổi */}
      <div className="image-container">
        <a href="https://www.instagram.com/whear.e2?igsh=MXJybXB2Y2JmNDNwdA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
          <img src="https://i.pinimg.com/564x/9b/a5/22/9ba5224537ebe8d369e5d1897fa16dd1.jpg" alt="Image 1" />
        </a>
        <a href="https://www.instagram.com/whear.e2?igsh=MXJybXB2Y2JmNDNwdA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
          <img src="https://i.pinimg.com/564x/90/3c/c6/903cc67174453b87e0c258f5473a7ada.jpg" alt="Image 2" />
        </a>
        <a href="https://www.instagram.com/whear.e2?igsh=MXJybXB2Y2JmNDNwdA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
          <img src="https://i.pinimg.com/564x/af/0e/4c/af0e4c7a09290e0adbc46f0339983a3b.jpg" alt="Image 3" />
        </a>
        <a href="https://www.instagram.com/whear.e2?igsh=MXJybXB2Y2JmNDNwdA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
          <img src="https://i.pinimg.com/564x/e4/6a/1a/e46a1aafd3f992d1ea952ba564445d83.jpg" alt="Image 4" />
        </a>
      </div>
    </section>
  );
};

export default FollowUsSectionPC;
