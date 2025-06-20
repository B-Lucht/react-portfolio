import { CONTACT } from "../constants/content.js";
const Contact = () => {
  return (
    <section id="contact" className="border-b  border-primary pb-24">
      <h3 className="my-10 text-center">Contact Me</h3>

      <div className="text-center tracking-tighter">
        <p className="my-4 body-md">{CONTACT.address}</p>
        <p className="my-4 body-md">{CONTACT.phoneNo}</p>
        <a href={`mailto:${CONTACT.email}`} className="border-b body-md">
          {CONTACT.email}
        </a>
      </div>
    </section>
  );
};

export default Contact;
