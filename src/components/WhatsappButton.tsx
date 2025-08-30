const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-10 left-6 flex flex-col gap-3 z-50">
      {/* 📞 Phone Call Button */}
      <a
        href="tel:+917065005544"
        className="bg-blue-500 hover:bg-blue-600 p-2 rounded-full shadow-lg transition-transform transform hover:scale-110"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
          alt="Call Us"
          className="h-8 w-8"
        />
      </a>

      {/* 💬 WhatsApp Button */}
      <a
        href="https://wa.me/917065005544"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 p-2 rounded-full shadow-lg transition-transform transform hover:scale-110"
      >
        <img
          src="https://jpcabletray.com/wp-content/uploads/2025/07/social-1.png"
          alt="WhatsApp"
          className="h-8 w-8"
        />
      </a>
    </div>
  );
};

export default WhatsAppButton;
