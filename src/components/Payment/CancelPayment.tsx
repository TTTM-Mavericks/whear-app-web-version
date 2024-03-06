import React from 'react';

const PaymentFailure: React.FC = () => {
  const closeWindow = () => {
    window.close();
  };

  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' }}>
            <div>
                <h4 style={{ color: '#007bff', fontSize: '24px', marginBottom: '10px' }}>Thanh toán thất bại</h4>
                <p style={{ fontSize: '16px', marginBottom: '20px' }}>Nếu có bất kỳ câu hỏi nào, hãy gửi email tới <a href="mailto:germe.lavogueicon.ai@gmail.com">germe.lavogueicon.ai@gmail.com</a></p>
                <a
                    href="/"
                    id="return-page-btn"
                    onClick={closeWindow}
                    style={{
                        display: 'inline-block',
                        padding: '10px 20px',
                        backgroundColor: '#007bff',
                        color: '#fff',
                        textDecoration: 'none',
                        borderRadius: '5px',
                        transition: 'background-color 0.3s ease',
                    }}
                >
                    Đóng
                </a>
            </div>
        </div>
  );
};

export default PaymentFailure;
