const Footer = () => {
  return (
    <footer className="text-center py-8">
      <p className="text-slate-500 text-sm">
        &copy; {new Date().getFullYear()} Ridho. Crafted with <span className="text-red-500">♥</span> and React.
      </p>
    </footer>
  );
};

export default Footer;
