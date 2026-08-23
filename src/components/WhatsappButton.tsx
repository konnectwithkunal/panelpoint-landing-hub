"use client";
const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-10 left-6 flex flex-col gap-3 z-50">
      {/* 📞 Phone Call Button */}
      <a
        href="tel:+917428124360"
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
        href="https://wa.me/917428124360"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 p-2 rounded-full shadow-lg transition-transform transform hover:scale-110"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-white">
          <path d="M12 2C6.48 2 2 6.19 2 11.24c0 2.07.64 3.98 1.74 5.57L2 22l5.41-1.7c1.53.84 3.29 1.31 5.18 1.31 5.52 0 10-4.19 10-9.24S17.52 2 12 2zm0 16.54c-1.57 0-3.03-.45-4.26-1.23l-.3-.18-3.21.99 1.05-3.12-.2-.32A7.15 7.15 0 0 1 4.84 11c0-3.91 3.41-7.09 7.6-7.09s7.6 3.18 7.6 7.09-3.41 7.09-7.6 7.09z" />
        </svg>
      </a>
    </div>
  );
};

export default WhatsAppButton;
