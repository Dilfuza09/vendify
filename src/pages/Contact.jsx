import axios from "axios";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { faInstagram, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit_TgBot = async (e) => {
    e.preventDefault();
    try {
      const token = "7801231339:AAHps_08VL8cfTVcXZ8r5jAfvwTLw6C5E2M";
      const chatID = "1921363553";
      const sendMessage = `Name: ${data.name}; Email: ${data.email}; Message: ${data.message}`;
      await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
        chat_id: chatID,
        text: sendMessage,
      });
      toast.success("Message sent successfully!");
      setData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error: ", error);
      toast.error("Failed to send the message. Please try again.");
    }
  };

  return (
    <>
      <header className='header'>
        <div className="header-h1"><b><a href="/home">Vendify</a></b></div>
        <nav className='nav'>
          <a href="/about">About</a>
          <a href="#sale">Sale %</a>
          <a href="/Contact">Contact</a>
          <div className="header-icon">
            <a href="https://t.me/Vendify_shop_bot"><FontAwesomeIcon icon={faTelegram} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
        </nav>
      </header>
      <div className="min-h-screen flex items-center justify-center bg-[#F5F5F5] p-6">
        {/* Компонент Toaster */}
        <Toaster position="top-center" reverseOrder={false} />

        <div className="bg-white shadow-md rounded-lg max-w-md w-full p-8 relative">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Have questions? Fill out the form and we’ll get back to you shortly.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit_TgBot}>
            <div className="relative">
              <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={data.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-300 focus:border-gray-400"
              />
            </div>

            <div className="relative">
              <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={data.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-300 focus:border-gray-400"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="message"
                className="block text-sm text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={data.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-300 focus:border-gray-400 resize-none"
                rows="4"
              ></textarea>
            </div>

            <button
              type="submit"
              value="Send"
              className="w-full py-3 bg-gray-800 text-white rounded-md font-semibold hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300"
            >
              Send Message
            </button>
          </form>
          <div className="absolute -top-6 -left-6 w-16 h-16 bg-gray-200 rounded-full"></div>
          <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gray-100 rounded-full"></div>
        </div>
      </div>
      <footer className='footer'>
        <div className="footer2">
          <div className="footer-icon">
            <a href="https://t.me/Vendify_shop_bot"><FontAwesomeIcon icon={faTelegram} /></a>
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
          </div>
          <div className="footer-text">Also follow us in social networks and visit <br /> our showroom in Bruxelles.</div>
          <div className="footer-tell">
            Rue Montagne du Parc 4. Bruxelles <br />
            Phone: +123 235 346 457
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
