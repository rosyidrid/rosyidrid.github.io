const Footer = () => {
  return (
    <footer id="contact" className="text-center p-8 bg-white/80 dark:bg-slate-800/80">
      <p className="text-slate-500 text-sm">
        &copy; {new Date().getFullYear()} Ridho. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
