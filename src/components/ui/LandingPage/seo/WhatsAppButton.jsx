// WhatsAppButton.jsx

const WhatsAppButton = () => {
  const phoneNumber = "918590629387"; // Replace with your WhatsApp number
  const message = "Hi, I’m looking for digital marketing services. Can we talk?";
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-green-500 rounded-full p-3 shadow-lg hover:scale-110 transition-transform"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-8 h-8"
      />
    </a>
  );
};

export default WhatsAppButton;