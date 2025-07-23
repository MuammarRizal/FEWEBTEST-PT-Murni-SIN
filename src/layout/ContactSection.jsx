function ContactSection() {
  return (
    <section id="contact" className="" aria-labelledby="contact-heading">
      <div className="container-content">
        <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto">
          <form className="flex-1 w-full" aria-label="Contact form">
            <div className="text-container mb-6">
              <h4 className="title-section text-primary mb-2">Get In Touch</h4>
              <h2 id="contact-heading" className="subtitle-section w-max">
                Let Us Know by Sent Your
                <br className="hidden md:block" />
                Message For More Information
              </h2>
              <p className="description-section mt-4">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes.
              </p>
            </div>

            <div className="mt-6">
              <label htmlFor="email" className="label">
                E-mail Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-md border border-gray-300 px-4 py-3 focus:ring-primary focus:border-primary transition"
                aria-required="true"
                placeholder="Insert Your E-mail Address Here"
              />
            </div>

            <div className="mt-6">
              <label htmlFor="message" className="label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="w-full h-[150px] rounded-md border border-gray-300 px-4 py-3 focus:ring-primary focus:border-primary transition"
                aria-required="true"
                placeholder="Insert Your Message Here"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition-colors w-full mt-6 text-base sm:text-lg"
              aria-label="Submit contact form"
            >
              Send Message
            </button>
          </form>

          <div className="lg:ms-14 flex justify-center items-center">
            <img
              src="https://placehold.co/505x694"
              alt="Skatcher office and team"
              className="rounded-lg w-full max-w-[400px] sm:max-w-[480px] lg:max-w-[505px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
