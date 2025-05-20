import React from "react";
import { Mail, MapPin, PhoneCallIcon } from "lucide-react";
import { Button } from "@heroui/react";

const Contact = () => {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    option: "",
    message: "",
  });

  const handleChange = (name: any, value: any) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      option: "",
      message: "",
    });
  };

  return (
    <div className="mx-auto max-w-[1440px] flex justify-start items-center w-full bg-black px-20 py-28 space-x-32">
      <div className="bg-violet-950/50 rounded-2xl p-10 w-[630px]">
        <div className="header" style={{ marginBottom: "30px" }}>
          <h1 className="text-[45px] font-bold bg-gradient-to-r from-violet-600 to-white bg-clip-text text-transparent">
            Let's work together!
          </h1>
          <p className="text-[16px] font-medium text-gray-300 mt-3">
            I design and code beautifully simple things and I love what I do.
            Just simple like that!
          </p>
        </div>

        <form
          className="contact-form"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
          onSubmit={handleSubmit}
        >
          <div
            className="name-fields"
            style={{
              display: "flex",
              gap: "20px",
            }}
          >
            <input
              type="text"
              placeholder="First name"
              value={formData.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              className="flex-1 p-3 bg-black border border-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
              required
            />
            <input
              type="text"
              placeholder="Last name"
              value={formData.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              className="flex-1 p-3 bg-black border border-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
              required
            />
          </div>

          <div
            className="contact-fields"
            style={{
              display: "flex",
              gap: "20px",
            }}
          >
            <input
              type="email"
              placeholder="Email address"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="flex-1 p-3 bg-black border border-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
              required
            />
            <input
              type="tel"
              placeholder="Phone number"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="flex-1 p-3 bg-black border border-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          <div className="relative">
            <select
              value={formData.option}
              onChange={(e) => handleChange("option", e.target.value)}
              className="p-3 w-full bg-black appearance-none border border-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
            >
              <option value="" disabled className="text-gray-400">
                Select an option
              </option>
              <option value="design" className="text-white bg-black">
                Design
              </option>
              <option value="development" className="text-white bg-black">
                Development
              </option>
              <option value="consulting" className="text-white bg-black">
                Consulting
              </option>
            </select>

            {/* Custom Dropdown Arrow */}
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          <textarea
            placeholder="Message"
            rows={5}
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
            className="p-3 bg-black resize-none border border-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
            required
          ></textarea>

          <Button
            onPress={handleSubmit}
            className="bg-gradient-to-r from-violet-500 to-violet-950 hover:from-violet-950 hover:to-violet-500 text-white font-[600] text-[15px] shadow-lg w-[200px] rounded-full px-9 py-[25px] hover:shadow-xl transition-all duration-300"
          >
            Send Message
          </Button>
        </form>
      </div>

      <div
        className="contact-info w-[450px]"
        style={{
          marginTop: "60px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          color: "white",
        }}
      >
        <div className="address flex justify-start items-center space-x-5">
          <div className="bg-gradient-to-r from-violet-500 to-violet-950 hover:from-violet-600 hover:to-violet-900 min-w-12 h-12 flex justify-center items-center rounded-full">
            <PhoneCallIcon className="text-white w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span style={{ fontWeight: "500", minWidth: "80px" }}>Phone</span>
            <span className="text-[20px] font-bold">+011236548096</span>
          </div>
        </div>
        <div className="address flex justify-start items-center space-x-5">
          <div className="bg-gradient-to-r from-violet-500 to-violet-950 hover:from-violet-600 hover:to-violet-900 min-w-12 h-12 flex justify-center items-center rounded-full">
            <Mail className="text-white w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span style={{ fontWeight: "500", minWidth: "80px" }}>Email</span>
            <span className="text-[20px] font-bold">gerolddesign@mail.com</span>
          </div>
        </div>
        <div className="address flex justify-start items-center space-x-5">
          <div className="bg-gradient-to-r from-violet-500 to-violet-950 hover:from-violet-600 hover:to-violet-900 min-w-12 h-12 flex justify-center items-center rounded-full">
            <MapPin className="text-white w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span style={{ fontWeight: "500", minWidth: "80px" }}>Address</span>
            <span className="text-[20px] font-bold">
              Warne Park Street Pine, FL 33157, New York
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
