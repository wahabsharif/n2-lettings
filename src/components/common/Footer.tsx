// Footer.tsx

import { footerData } from "@/data/footerData";
import Logo from "@/assets/images/logo/n2-logo.svg";
import envLogo from "@/assets/images/logo/env-icon.svg";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa"; // Import social media icons

const Footer = () => {
  // Get the current year
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Footer Layout - 4 Columns (Mobile-first) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Company Info with Social Icons */}
          <div>
            <Link href="/">
              <Image
                src={Logo}
                alt="Logo"
                width={1000}
                height={1000}
                priority
                className="w-28 md:w-36" // Adjust logo size on medium screens
              />
            </Link>
            <p className="text-sm italic my-4">{footerData.companyTagline}</p>
            <div className="flex space-x-4 mt-4">
              {/* Social Icons */}
              <Link href="https://facebook.com" passHref>
                <FaFacebookF className="text-gray-400 hover:text-white text-xl" />
              </Link>
              <Link href="https://twitter.com" passHref>
                <FaTwitter className="text-gray-400 hover:text-white text-xl" />
              </Link>
              <Link href="https://instagram.com" passHref>
                <FaInstagram className="text-gray-400 hover:text-white text-xl" />
              </Link>
              <Link href="https://linkedin.com" passHref>
                <FaLinkedin className="text-gray-400 hover:text-white text-xl" />
              </Link>
            </div>
          </div>

          {/* Center Left Column - Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul>
              {footerData.usefulLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm mb-2 block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Center Right Column - More Links */}
          {/* <div>
            <h3 className="text-lg font-semibold mb-4">More Links</h3>
            <ul>
              {footerData.moreLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm mb-2 block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Right Column - Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>{footerData.contactEmail}</p>
            <p className="font-semibold">Head Office:</p>
            <p>{footerData.headOffice.address}</p>
            <p>{footerData.headOffice.phone}</p>
          </div>
        </div>

        {/* Bottom Footer with Left-aligned Copyright and Right-aligned Terms Links */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-sm text-gray-500">
          {/* Left Side: Copyright */}
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <p>
              © {currentYear}{" "}
              <Link href={"/"} className="text-thRed font-semibold">
                N2 Lettings
              </Link>{" "}
              - All rights reserved.
            </p>

          </div>

          {/* Right Side: Terms & Conditions and Privacy Policy Links */}
          <div className="space-x-4 mb-4 md:mb-0">
            <Link href="/terms" className="text-gray-400 hover:text-white">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="text-gray-400 hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
