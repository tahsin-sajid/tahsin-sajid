export default function FloatingWhatsApp() {
  return (
    <a
      className="whatsapp-float"
      href="https://wa.me/923305503887"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Tahsin Sajid on WhatsApp"
    >
      <span className="whatsapp-icon-wrap" aria-hidden="true">
        <img src="https://cdn.simpleicons.org/whatsapp/071617" alt="" width="25" height="25" />
      </span>
      <span className="whatsapp-label">Chat on WhatsApp</span>
    </a>
  );
}