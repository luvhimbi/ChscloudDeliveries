import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function TermsOfService() {
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
            <h1 className="fw-bold mb-2">Terms of Service</h1>
            <p className="text-muted mb-5">Last Updated: {new Date().toLocaleDateString()}</p>
            
            <div style={{ lineHeight: 1.8, color: '#4b5563' }}>
              <h4 className="fw-bold mt-4 mb-3 text-dark">1. Introduction</h4>
              <p>
                Welcome to Chiscloud Deliveries. These Terms of Service ("Terms") govern your use of the Chiscloud Deliveries application, website, and related services (collectively, the "Platform"), operated by Chiscloud Deliveries (Pty) Ltd in South Africa. By accessing, downloading, or using the Platform, you agree to be bound by these Terms. If you do not agree, please do not use our services.
              </p>

              <h4 className="fw-bold mt-5 mb-3 text-dark">2. Description of Services</h4>
              <p>
                Chiscloud Deliveries provides a technology platform connecting users ("Customers") with independent third-party vendors, including restaurants, grocery stores, and water suppliers ("Vendors"), and independent delivery contractors ("Drivers"). 
                <br/><br/>
                <strong>Disclaimer of Liability:</strong> Chiscloud Deliveries acts solely as an intermediary. We do not prepare food, bottle water, or employ the drivers. As such, Chiscloud Deliveries is not liable or responsible for the quality, safety, or legality of the goods provided by Vendors, nor any actions, omissions, or negligence of the independent Drivers.
              </p>

              <h4 className="fw-bold mt-5 mb-3 text-dark">3. User Accounts & Obligations</h4>
              <p>
                To use the Platform, you must register for an account. You agree to:
              </p>
              <ul>
                <li>Provide accurate, current, and complete information during registration.</li>
                <li>Maintain the security of your account credentials.</li>
                <li>Be at least 18 years of age, or have the supervision of a legal guardian.</li>
                <li>Accept full responsibility for all activities that occur under your account.</li>
              </ul>
              <p>
                We reserve the right to suspend or terminate accounts that violate these Terms, engage in fraudulent activity, or exhibit abusive behavior toward our support staff, Vendors, or Drivers.
              </p>

              <h4 className="fw-bold mt-5 mb-3 text-dark">4. Ordering, Pricing, and Payments</h4>
              <p>
                <strong>Order Placement:</strong> Once an order is placed through the Platform, it is transmitted to the respective Vendor. Orders are subject to the Vendor's acceptance and availability of items.
                <br/><br/>
                <strong>Pricing:</strong> Prices listed on the Platform are determined by the Vendors and may differ from in-store prices. Delivery fees, service fees, and applicable taxes will be displayed at checkout. Prices are subject to change without notice.
                <br/><br/>
                <strong>Payment:</strong> All payments must be made through the Platform's authorized payment gateways. You authorize Chiscloud Deliveries to charge your provided payment method for the total order amount.
              </p>

              <h4 className="fw-bold mt-5 mb-3 text-dark">5. Cancellations and Refunds</h4>
              <p>
                <strong>Cancellations:</strong> You may cancel an order without charge only before the Vendor has accepted and begun preparing the order. Once preparation has commenced, cancellations are not permitted, and you will be charged the full amount.
                <br/><br/>
                <strong>Refunds:</strong> Refunds are issued solely at the discretion of Chiscloud Deliveries. If an order is delivered with missing items, incorrect items, or severe quality issues, you must report it to our customer service via <strong>thembisotshisikhawe@gmail.com</strong> within 24 hours with photographic proof. Approved refunds may be issued as in-app credit or returned to the original payment method.
              </p>

              <h4 className="fw-bold mt-5 mb-3 text-dark">6. Delivery Limitations</h4>
              <p>
                Delivery times provided are estimates and are not guaranteed. Factors such as traffic, weather conditions, and Vendor preparation times may cause delays. Drivers will attempt to deliver to the address provided. If the address is incorrect or you are unreachable upon arrival, the Driver may leave the order at the premises or cancel the order without a refund.
              </p>

              <h4 className="fw-bold mt-5 mb-3 text-dark">7. Indemnification</h4>
              <p>
                You agree to indemnify, defend, and hold harmless Chiscloud Deliveries, its directors, employees, and affiliates from any claims, damages, losses, liabilities, and expenses (including legal fees) arising out of your use of the Platform, your violation of these Terms, or your violation of any rights of a third party.
              </p>

              <h4 className="fw-bold mt-5 mb-3 text-dark">8. Governing Law</h4>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the Republic of South Africa. Any disputes arising out of these Terms shall be subject to the exclusive jurisdiction of the South African courts.
              </p>

              <h4 className="fw-bold mt-5 mb-3 text-dark">9. Changes to Terms</h4>
              <p>
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on the Platform. Your continued use of the Platform constitutes acceptance of the updated Terms.
              </p>

              <p className="mt-5">
                For questions regarding these Terms, please contact us at <strong>info@chiscloud.co.za</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
