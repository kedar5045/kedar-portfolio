import "./Contact.css";
import { useState } from "react";
import { submitContact } from "../../api/contactApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Contact = () => {

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await submitContact(formData);

      console.log(response.data);

      toast.success("Message sent successfully! 🎉");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      toast.error(
  error.response?.data?.message || "Something went wrong!"
);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="contact" id="contact">

      <h2 className="section-title">Get In Touch</h2>

      <p className="contact-subtitle">
        Have a project or an opportunity? I'd love to hear from you.
      </p>

      <div className="contact-container">

        <div className="contact-info">

          <h3>Let's Connect</h3>

          <p>
            Feel free to contact me for  full-time
            opportunities
          </p>

          <div className="info-item">
            <strong>Email:</strong> Kedarpcse2024@gmail.com
          </div>

          <div className="info-item">
            <strong>Phone:</strong> +91 9611006609
          </div>

          <div className="info-item">
            <strong>Location:</strong> Karnataka, India
          </div>

        </div>

        <form className="contact-form"
          onSubmit={handleSubmit}>

          <input
            type="text"
            

            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"

            value={formData.subject}
            onChange={handleChange}
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit"
            disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>

      </div>

    </section>
  );
};

export default Contact;