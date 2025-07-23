function NewsletterSection() {
  return (
    <section className="container-content w-full bg-neutral-50 py-12 mt-36">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#252525] text-center md:text-left">
          Subscribe to Our Newsletter
        </h2>

        <form className="w-full md:w-auto flex flex-col sm:flex-row items-center gap-4">
          <input
            type="email"
            placeholder="E-mail Address"
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
