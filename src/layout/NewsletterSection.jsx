function NewsletterSection() {
  return (
    <section className="container-content w-full py-12 mt-36">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row sm:items-center justify-between gap-6">
        <h2 className="text-msn-28 md:text-3xl lg:text-msn-36 font-semibold text-secondary md:text-left lg:w-max">
          Subscribe to <br className="block sm:hidden" />
          Our Newsletter
        </h2>

        <form className="w-full md:w-auto flex flex-col sm:flex-row items-center gap-4">
          <input
            type="email"
            placeholder="Insert Your E-mail Address Here"
            required
            aria-label="Email address for newsletter subscription"
            className="w-full sm:w-[316px] h-[50px] sm:h-[60px] px-6 py-4 rounded-md border border-[#e2e2e2] text-[#252525] placeholder:text-[#8a8a8a] focus:outline-none"
          />

          <button
            type="submit"
            className="w-full sm:w-[194px] h-[50px] sm:h-[60px] px-6 py-3 bg-[#a85c01] text-white rounded-md font-semibold hover:opacity-90 transition text-lg"
            aria-label="Subscribe to newsletter"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

export default NewsletterSection;
