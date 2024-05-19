// googlePayUtils.js

// Function to load Google Pay API script dynamically
export const loadGooglePayScript = () => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://pay.google.com/gp/p/js/pay.js';
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
    });
};

// Function to create Google Pay button dynamically
export const createGooglePayButton = (onPaymentSuccess, onPaymentError) => {
    // Your Google Pay button configuration
    const googlePayButton = document.createElement('button');
    googlePayButton.innerHTML = 'Pay with Google Pay';
    googlePayButton.onclick = () => {
        // Simulated payment response for demonstration purposes
        const paymentResult = {
            status: 'SUCCESS',
            paymentMethod: 'Google Pay',
            amount: 100, // Example amount in cents
        };
        if (paymentResult.status === 'SUCCESS') {
            onPaymentSuccess(paymentResult);
        } else {
            onPaymentError('Payment failed');
        }
    };

    // Append Google Pay button to the container
    const container = document.getElementById('google-pay-button-container');
    container.appendChild(googlePayButton);
};
