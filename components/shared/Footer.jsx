import React from "react";
import {
  Instagram,
  Facebook,
  Pinterest,
  Send,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-primary-100/50 text-dark-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Image
              src="/logo.png"
              height={180}
              width={180}
              alt="Inaayat Logo"
              className="mb-4"
            />
          </div>

          {/* Know More */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Know More</h3>
            <ul className="space-y-2 small-medium">
              {[
                "About Inaayat",
                "Privacy Policy",
                "Terms & Conditions",
                "Become An Affiliate",
                "Contact Us",
                "FAQ",
                "Retail Stores",
                "Corporate Gifting",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Help</h3>
            <ul className="space-y-2 small-medium">
              {[
                "Brass Care",
                "Kansa Care",
                "Copper Care",
                "Shipping",
                "Return/Exchange Request",
                "Grievance Redressal Mechanism",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Join Our Email List */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Join Our Email List</h3>
            <p className="mb-4 small-medium">
              Be the first to hear about our latest promotions, new products and
              more.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-dark-100 flex flex-wrap justify-between items-center">
          <p className="small-medium">&copy; 2023, Inaayat All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
