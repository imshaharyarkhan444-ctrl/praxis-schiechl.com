import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

interface Message {
  role: "bot" | "user";
  text: string;
}

const quickReplies = [
  "Opening hours",
  "Contact info",
  "Services offered",
  "Book appointment",
  "Location",
  "Emergency",
];

function getBotResponse(input: string): string {
  const lower = input.toLowerCase();

  if (lower.includes("hour") || lower.includes("time") || lower.includes("open") || lower.includes("when")) {
    return "Our opening hours are:\n\n• Mon, Tue, Thu: 08:00–12:00 & 14:00–18:00\n• Wed, Fri: 08:00–12:00\n• Sat & Sun: Closed\n\nWould you like to book an appointment?";
  }
  if (lower.includes("contact") || lower.includes("phone") || lower.includes("call") || lower.includes("email")) {
    return "You can reach us at:\n\n📞 Phone: +43 4352 37777\n📧 Email: office@dr-schiechl.at\n📍 Roßmarkt 8, 9400 Wolfsberg, Austria";
  }
  if (lower.includes("service") || lower.includes("offer") || lower.includes("treatment") || lower.includes("what do you")) {
    return "We offer a wide range of dental services:\n\n• Implantology\n• Oral Surgery\n• Periodontology\n• Prosthetics (Crowns, Bridges, Dentures)\n• Dental Prophylaxis\n• Veneers & Teeth Whitening\n\nWould you like to know more about any specific treatment?";
  }
  if (lower.includes("appointment") || lower.includes("book") || lower.includes("schedule") || lower.includes("visit")) {
    return "You can book an appointment by:\n\n1. Filling out our appointment form on this page (scroll to 'Book Appointment')\n2. Calling us at +43 4352 37777\n\nWe'll confirm your appointment within 24 hours!";
  }
  if (lower.includes("location") || lower.includes("address") || lower.includes("where") || lower.includes("find")) {
    return "We are located at:\n\n📍 Roßmarkt 8, 9400 Wolfsberg, Austria\n\nYou can find us in the heart of Wolfsberg. Check our embedded map in the Contact section!";
  }
  if (lower.includes("emergency") || lower.includes("urgent") || lower.includes("pain")) {
    return "For dental emergencies, please call us immediately at:\n\n📞 +43 4352 37777\n\nWe will try to accommodate you as quickly as possible during our opening hours.";
  }
  if (lower.includes("implant")) {
    return "We specialize in dental implants! Our clinic uses advanced 3D planning for precise implant placement. Dr. Schiechl has an MSc in Implantology.\n\nWould you like to book a consultation?";
  }
  if (lower.includes("doctor") || lower.includes("dr") || lower.includes("schiechl")) {
    return "Dr. med. univ. et med. dent. Klaus Peter Schiechl MSc is a specialist in Dentistry, Oral and Maxillofacial Surgery with over 25 years of experience. He holds an MSc in Implantology.";
  }
  if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey") || lower.includes("greet")) {
    return "Hello! 👋 Welcome to Dr. Schiechl's dental clinic. How can I help you today? You can ask me about our services, opening hours, or how to book an appointment.";
  }
  if (lower.includes("thank")) {
    return "You're welcome! 😊 If you have any other questions, feel free to ask. We're here to help!";
  }
  if (lower.includes("cost") || lower.includes("price") || lower.includes("how much") || lower.includes("fee")) {
    return "Treatment costs vary depending on the specific procedure. We recommend scheduling a consultation where Dr. Schiechl can provide a detailed treatment plan and cost estimate.\n\n📞 Call: +43 4352 37777";
  }

  return "Thank you for your message! I can help you with:\n\n• Opening hours\n• Contact information\n• Our services & treatments\n• Booking an appointment\n• Clinic location\n\nPlease select a topic or type your question.";
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hello! 👋 Welcome to Dr. Schiechl's dental clinic. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = { role: "user", text: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      const botResponse = getBotResponse(text);
      setMessages((prev) => [...prev, { role: "bot", text: botResponse }]);
    }, 500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${
          isOpen
            ? "bg-gray-600 hover:bg-gray-700"
            : "bg-primary hover:bg-primary-dark shadow-primary/30"
        }`}
        aria-label={isOpen ? "Close chat" : "Open chat assistant"}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageCircle className="h-6 w-6 text-white" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[380px] max-h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-fade-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-primary-dark px-5 py-4 flex items-center gap-3 shrink-0">
            <div className="h-9 w-9 rounded-full bg-white/20 flex items-center justify-center">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Dental Assistant</div>
              <div className="text-xs text-white/70 flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400 inline-block" />
                Online
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0" style={{ maxHeight: "300px" }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                {msg.role === "bot" && (
                  <div className="h-7 w-7 shrink-0 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                    <Bot className="h-3.5 w-3.5 text-primary" />
                  </div>
                )}
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-line ${
                    msg.role === "user"
                      ? "bg-primary text-white rounded-br-md"
                      : "bg-gray-100 text-text-dark rounded-bl-md"
                  }`}
                >
                  {msg.text}
                </div>
                {msg.role === "user" && (
                  <div className="h-7 w-7 shrink-0 rounded-full bg-primary flex items-center justify-center mt-1">
                    <User className="h-3.5 w-3.5 text-white" />
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          <div className="px-4 pb-2 flex flex-wrap gap-1.5 shrink-0">
            {quickReplies.map((q) => (
              <button
                key={q}
                onClick={() => sendMessage(q)}
                className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-colors"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-3 border-t border-gray-100 flex gap-2 shrink-0">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              className="flex-1 min-w-0 rounded-lg border border-gray-200 px-3 py-2 text-sm text-text-dark placeholder:text-text-light/50 focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="h-9 w-9 shrink-0 rounded-lg bg-primary text-white flex items-center justify-center hover:bg-primary-dark disabled:opacity-40 transition-colors"
              aria-label="Send message"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
