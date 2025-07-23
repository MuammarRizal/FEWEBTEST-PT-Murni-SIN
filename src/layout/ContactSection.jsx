function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-2"
      aria-labelledby="contact-heading"
    >
      <div className="container-content">
        <div className="flex flex-col lg:flex-row gap-10 max-w-6xl">
          <form
            className="flex-1 min-w-[300px] lg:min-w-[500px]"
            action="#"
            method="POST"
            aria-label="Contact form"
          >
            <div className="text-container">
              <h4 className="text-base text-primary font-semibold mb-6">
                Get In Touch
              </h4>
              <h2
                id="contact-heading"
                className="text-gray-800 text-2xl md:text-4xl font-semibold leading-tight mb-7 lg:leading-[1.3]"
              >
                Let Us Know by Sent Your
                <br className="hidden md:block" />
                Message For More Information
              </h2>

              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6 max-w-md">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean{" "}
                <br />
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                <br />
                penatibus et magnis dis parturient montes.
              </p>
            </div>

            <div className="mt-11">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-4 lg:text-lg"
              >
                E-mail Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full lg:w-[488px] rounded-md border border-gray-300 px-4 py-2 focus:ring-primary focus:border-primary transition lg:h-[60px]"
                aria-required="true"
                placeholder="Insert Your E-mail Address Here"
              />
            </div>

            <div className="mt-7">
              <label
                htmlFor="message"
                className="block text-sm lg:text-lg font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="w-full lg:w-[488px] h-[150px] rounded-md border border-gray-300 px-7 py-5 focus:ring-primary focus:border-primary transition lg:mt-2"
                aria-required="true"
                placeholder="Insert Your Message Here"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition-colors w-full lg:w-[488px] lg:h-[60px] mt-4 lg:text-lg"
              aria-label="Submit contact form"
            >
              Send Message
            </button>
          </form>

          <div className="ms-0 lg:ms-14 flex justify-center items-center">
            <img
              src="https://placehold.co/505x694"
              alt="Skatcher office and team"
              className="rounded-lg w-full max-w-[505px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
