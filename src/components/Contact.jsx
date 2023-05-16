import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const Lang =
    localStorage.getItem("Lang") || localStorage.setItem("Lang", "eng");
  console.log(form);
  const sendEmail = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        "service_08stomk",
        "template_hl808il",
        form.current,
        "S7GrO1eNdTpr8vjmY"
      )
      .then((result) => {
        console.log(result.text);
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setTimeout(() => {
          setSubmitSuccess(false);
          event.target.reset();
        }, 2000);
      })
      .catch((error) => {
        setIsSubmitting(false);
        setSubmitError(true);
        console.log(error.text);
      });
  };

  return (
    <section id="contact" className="contact">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="container"
        data-aos="fade-up"
      >
        <div className="section-title">
          <h2>{Lang == "en" ? "Contact" : "Contact"}</h2>
          <p>{Lang == "en" ? "Contact us" : "CONTACTEZ-NOUS"}</p>
        </div>

        <div>
          <iframe
            style={{ border: "0", width: "100%", height: "270px" }}
            frameborder="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3199.276295678394!2d10.260340066110018!3d36.85007723193009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13f7b91ed3f75d93%3A0xf5ec14b05853b8d7!2sYour%20Location!5e0!3m2!1sen!2sus!4v1651206455755!5m2!1sen!2sus&q=36.85007723193009%2C%2010.260340066110018%20(My%20Location)"
            allowfullscreen
          ></iframe>
        </div>

        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>Les Brges du Lac 1 </p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>contact@unikode.net</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p> +16469188190</p>
              </div>
            </div>
          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">
            <div
              action="forms/contact.php"
              method="post"
              role="form"
              className="php-email-form"
            >
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows="5"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div className="my-3">
                {isSubmitting ? (
                  <div className={isSubmitting ? "loading message" : "loading"}>
                    Loading
                  </div>
                ) : (
                  <div
                    className={
                      submitSuccess ? "sent-message message" : "sent-message"
                    }
                  >
                    Your message has been sent. Thank you!
                  </div>
                )}
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contact;
