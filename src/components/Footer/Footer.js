import { Link } from "react-router-dom";
import config from "../../config/config";


const Footer = () => {
  return (
    <footer className="bg-slate-200">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        <span className="text-sm">
          &copy; {new Date().getFullYear()}{" "}
          <Link
            to="/"
            className="font-semibold hover:text-green-500 transition-colors">
            {config.site.name}
          </Link>{" "}
          All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;