import React from 'react';

const PaymentSuccess: React.FC = () => {
    const getPaymentInformation = async () => {
        try {
            console.log("Payment Information");
            const currentUrl = window.location.href;
            const urlString = new URLSearchParams(currentUrl);
            const orderCode = urlString.get('orderCode');
            const item = urlString.get('item');
            console.log(orderCode);
            console.log(item);

            // Correctly construct the apiUrl with parameters
            const apiUrl = `https://host.whearapp.tech/api/v1/payment/confirm-update?orderCode=${orderCode}&item=${item}`;

            const response: any = await fetch(apiUrl, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    // Add any other headers as needed
                },
            });

            if (response.success == 200) {
                setTimeout(()=>{
                    window.close();
                }, 3000);
            } else {
                window.location.href = 'payment-cancel'
                
            }

            const data = await response.json();

            // Process the payment information data as needed
            console.log("Payment information:", data);
            
        } catch (error) {
            console.error("Error fetching payment information:", error);
            window.location.href = 'payment-cancel'
        }

    };

    const closeWindow = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        getPaymentInformation();
    };

    return (
        <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' }}>
            <div>
                <h4 style={{ color: '#007bff', fontSize: '24px', marginBottom: '10px' }}>Thanh toán thành công. Cảm ơn bạn đã sử dụng GERME!</h4>
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
                        alignContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center'
                    }}
                >
                    Đóng
                </a>
            </div>
        </div>
    );
};

export default PaymentSuccess;
