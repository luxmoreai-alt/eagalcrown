import { MessageCircle } from "lucide-react";

const whatsappNumber = "919600315007";
const whatsappMessage = encodeURIComponent(
  "Hello Eagle Crown Group of Companies, I would like to know more about your business opportunities.",
);

export function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Eagle Crown on WhatsApp"
      className="fixed bottom-5 right-4 z-50 flex size-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-2xl shadow-crown-950/25 ring-4 ring-white/80 transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#1ebe5d] focus:outline-none focus:ring-4 focus:ring-gold-300 sm:bottom-6 sm:right-6 sm:size-16"
    >
      <span className="absolute inset-0 -z-10 animate-whatsapp-pulse rounded-full bg-[#25d366]/35" />
      <MessageCircle aria-hidden="true" className="size-7 sm:size-8" strokeWidth={2.4} />
    </a>
  );
}
