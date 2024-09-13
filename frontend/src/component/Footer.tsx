
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white py-12 px-4 md:px-8 mt-28">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Left column */}
        <div className="md:col-span-2">
          <p className="text-gray-600 mb-4">
            With lots of unique blocks, you can easily build a page without coding.
            Build your next landing page.
          </p>
          <div className="flex space-x-4">
            <FaXTwitter className="text-gray-400 hover:text-gray-600" />
            <FaFacebook className="text-gray-400 hover:text-gray-600" />
            <FaInstagram className="text-gray-400 hover:text-gray-600" />
            <FaLinkedin className="text-gray-400 hover:text-gray-600" />
          </div>
        </div>

        {/* Company column */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-gray-900">About us</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact us</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Careers</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Press</a></li>
          </ul>
        </div>

        {/* Product column */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Product</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Features</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">News</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Help desk</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Support</a></li>
          </ul>
        </div>

        {/* Services and Legal columns */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Digital Marketing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Content Writing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">SEO for Business</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">UI Design</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Return Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;