import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Treatments from "./components/Treatments";
import Appointment from "./components/Appointment";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

export default function App() {
  return (
    <div className="min-h-screen bg-white antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Treatments />
        <Reviews />
        <Appointment />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
