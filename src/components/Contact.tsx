const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl">
          <h2 className="text-4xl font-bold text-center text-white mb-4">
            Let's Work <span className="text-blue-500">Together</span>
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-xl mx-auto">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>

          <form action="mailto:rosyidridho9g@gmail.com" method="POST" className="space-y-6" encType="multipart/form-data">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group">
                <label htmlFor="name" className="block text-slate-400 text-sm font-medium mb-2 group-focus-within:text-blue-400 transition-colors">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all placeholder:text-slate-600"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="group">
                <label htmlFor="email" className="block text-slate-400 text-sm font-medium mb-2 group-focus-within:text-blue-400 transition-colors">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all placeholder:text-slate-600"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            <div className="group">
              <label htmlFor="message" className="block text-slate-400 text-sm font-medium mb-2 group-focus-within:text-blue-400 transition-colors">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all placeholder:text-slate-600 resize-none"
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>

            <div className="text-center pt-4">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold py-4 px-12 rounded-full hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300 w-full md:w-auto"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
