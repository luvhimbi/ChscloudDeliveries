import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="section-custom"
      style={{ backgroundColor: '#f9fafb', minHeight: '80vh' }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 bg-white p-4 p-md-5 rounded-4 shadow-sm border">
            <h1 className="fw-bold mb-2">Privacy Policy</h1>
            <p className="text-muted mb-5">Last Updated: {new Date().toLocaleDateString()}</p>
            
            <div style={{ lineHeight: 1.8, color: '#4b5563' }}>
              <p>
                Chiscloud Deliveries ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website (the "Platform").
              </p>

              <h4 className="fw-bold mt-5 mb-3 text-dark">1. Information We Collect</h4>
              <p>We collect information that identifies, relates to, or could reasonably be linked to you ("Personal Information"). This includes:</p>
              <ul>
                <li><strong>Identity Data:</strong> First name, last name, profile picture.</li>
                <li><strong>Contact Data:</strong> Delivery addresses, email address, telephone numbers.</li>
                <li><strong>Financial Data:</strong> Payment card details (processed securely via third-party gateways; we do not store full card numbers).</li>
                <li><strong>Transaction Data:</strong> Details about orders, payments, and services purchased through the Platform.</li>
                <li><strong>Location Data:</strong> Real-time GPS location of your device to facilitate delivery logistics and tracking.</li>
                <li><strong>Technical Data:</strong> IP address, device type, operating system, and app usage metrics.</li>
              </ul>

              <h4 className="fw-bold mt-5 mb-3 text-dark">2. How We Use Your Information</h4>
              <p>We use the collected information for the following purposes:</p>
              <ul>
                <li>To process and fulfill your orders, including sharing necessary details with Vendors and Drivers.</li>
                <li>To communicate with you regarding order updates, customer support, and promotional offers.</li>
                <li>To improve, maintain, and optimize our Platform's functionality and user experience.</li>
                <li>To detect, prevent, and address technical issues, fraud, or illegal activities.</li>
                <li>To comply with legal obligations and enforce our Terms of Service.</li>
              </ul>

              <h4 className="fw-bold mt-5 mb-3 text-dark">3. Sharing Your Information</h4>
              <p>We may share your information in the following circumstances:</p>
              <ul>
                <li><strong>With Vendors & Drivers:</strong> We share your name, delivery address, and order details to ensure successful delivery. Drivers may receive your phone number to contact you upon arrival.</li>
                <li><strong>With Service Providers:</strong> Third-party companies that assist us with payment processing, data analytics, and cloud hosting.</li>
                <li><strong>For Legal Reasons:</strong> If required by law, subpoena, or other legal process, or to protect the rights, property, or safety of Chiscloud Deliveries, our users, or others.</li>
              </ul>

              <h4 className="fw-bold mt-5 mb-3 text-dark">4. Data Security & Retention</h4>
              <p>
                We implement commercially reasonable security measures designed to protect your Personal Information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
                <br/><br/>
                We retain your Personal Information only for as long as is necessary for the purposes set out in this Privacy Policy, or as required by law.
              </p>

              <h4 className="fw-bold mt-5 mb-3 text-dark">5. Your Privacy Rights</h4>
              <p>
                Depending on your location, you have the right to access, update, or delete your Personal Information. You may update your profile details within the app or contact us to request data deletion.
              </p>

              <p className="mt-5">
                If you have any questions or concerns about our Privacy Policy, please contact us at <strong>info@chiscloud.co.za</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
