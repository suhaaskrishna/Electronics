function processPayment() {
    // Display loading spinner
    document.getElementById("loadingSpinner").style.display = "block";
    
    // Simulate a delay to represent payment processing
    setTimeout(function() {
        // In a real scenario, you would send payment details to a server for processing
        // and handle the response from the payment gateway
        alert("Payment processed successfully!");
        
        // Hide loading spinner after processing is complete
        document.getElementById("loadingSpinner").style.display = "none";
    }, 2500); // 2 seconds delay (adjust as needed)
}
  