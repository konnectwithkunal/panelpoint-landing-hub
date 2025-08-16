const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/917836870201" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 left-6 bg-green-500 hover:bg-green-600 p-2 rounded-full shadow-lg transition-transform transform hover:scale-110 z-50"
    >
      <img
        src="https://jpcabletray.com/wp-content/uploads/2025/07/social-1.png"
        alt="WhatsApp"
        className="h-8 w-8"
      />
    </a>
  );
};

export default WhatsAppButton;
