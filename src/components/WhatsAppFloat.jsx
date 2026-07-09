import { FaWhatsapp } from "react-icons/fa";

function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/917200592175?text=Hi%20Suvaikoodal!%20I%20want%20to%20order."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-[#25D366] hover:bg-[#1EBE5D] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl z-50"
    >
      <FaWhatsapp size={34} />
    </a>
  );
}

export default WhatsAppFloat;