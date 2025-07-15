const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto text-center" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-8 dark:text-slate-100">Contact <span className="text-blue-600">Me</span></h2>
        <p className="text-slate-600 mt-4 max-w-2xl mx-auto mb-12 dark:text-slate-400">
          Have a question or want to work together? Leave your details below, and I'll get back to you as soon as possible.
        </p>

        <form action="mailto:rosyidridho9g@gmail.com" method="POST" className="max-w-xl mx-auto text-left" encType="multipart/form-data">
          <div className="mb-4">
            <label htmlFor="name" className="block text-slate-700 text-sm font-bold mb-2 dark:text-slate-100">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors dark:bg-slate-800 dark:border-slate-600 dark:placeholder:text-slate-500"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-slate-700 text-sm font-bold mb-2 dark:text-slate-100">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors dark:bg-slate-800 dark:border-slate-600 dark:placeholder:text-slate-500"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-slate-700 text-sm font-bold mb-2 dark:text-slate-100">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors dark:bg-slate-800 dark:border-slate-600 dark:placeholder:text-slate-500"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white font-bold py-3 px-10 rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30 hover:shadow-xl dark:bg-blue-600 dark:text-slate-100"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
