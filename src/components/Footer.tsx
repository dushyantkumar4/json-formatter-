const Footer = () => {
  return (
    <div>
      <footer className="mt-10 border-t pt-6 text-center">
        <div className="flex items-center justify-between">
          {" "}
          <p className="font-semibold">Dushyant Kumar</p>
          <p>dushyantvelar@gmail.com</p>
        </div>

        <a
          href="https://digitalheroesco.com"
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block rounded-lg bg-black px-6 py-2 text-white"
        >
          Built for Digital Heroes
        </a>
      </footer>
    </div>
  );
};

export default Footer;
