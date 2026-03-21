import "./Contact.css";

function Contact() {
  return (
    <div className="container">
      <h2>Contact Us</h2>

      <p>Email: support@cravecorner.com</p>
      <p>Phone: +91 9876543210</p>

      <iframe
        src="https://maps.google.com/maps?q=hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="300"
      ></iframe>
    </div>
  );
}
export default Contact;