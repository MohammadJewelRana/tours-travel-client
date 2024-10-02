 
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Links Section */}
          <div className="mb-6 md:mb-0">
            <h5 className="font-bold mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-gray-400">Home</a></li>
              <li><a href="/about" className="hover:text-gray-400">About</a></li>
              <li><a href="/services" className="hover:text-gray-400">Services</a></li>
              <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="mb-6 md:mb-0">
            <h5 className="font-bold mb-4">Follow Us</h5>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-gray-400"><FaFacebook size={24} /></Link>
              <Link href="#" className="hover:text-gray-400"><FaTwitter size={24} /></Link>
              <Link href="#" className="hover:text-gray-400"><FaInstagram size={24} /></Link>
              <Link href="#" className="hover:text-gray-400"><FaLinkedin size={24} /></Link>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h5 className="font-bold mb-4">Contact Us</h5>
            <p className="text-gray-400">1234 Street Name, City, State, 12345</p>
            <p className="text-gray-400">Email: info@example.com</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
