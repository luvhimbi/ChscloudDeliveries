import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function PopiAct() {
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
            <h1 className="fw-bold mb-2">POPI Act Compliance</h1>
            <p className="text-muted mb-5">Protection of Personal Information Act (South Africa)</p>
            
            <div style={{ lineHeight: 1.8, color: '#4b5563' }}>
              <p>
                Chiscloud Deliveries (Pty) Ltd operates within the Republic of South Africa and strictly adheres to the <strong>Protection of Personal Information Act, No. 4 of 2013 (POPIA)</strong>. This page outlines our commitment to processing your personal data lawfully, reasonably, and in a manner that protects your privacy.
              </p>

              <h4 className="fw-bold mt-5 mb-3 text-dark">1. Accountability & Processing Principles</h4>
              <p>
                We accept full responsibility for ensuring that the conditions for lawful processing of personal information are complied with. Information is collected directly from you, for specific, explicitly defined, and lawful purposes related to providing our delivery services. We do not process data in a manner incompatible with these purposes.
              </p>

              <h4 className="fw-bold mt-5 mb-3 text-dark">2. Consent, Justification, and Objection</h4>
              <p>
                By registering on the Chiscloud Deliveries Platform, you explicitly consent to the collection and processing of your personal information as defined in our Privacy Policy. You maintain the right to object to the processing of your personal information, in the prescribed manner, on reasonable grounds relating to your particular situation, unless legislation provides for such processing.
              </p>

              <h4 className="fw-bold mt-5 mb-3 text-dark">3. Information Quality & Openness</h4>
              <p>
                We take reasonably practicable steps to ensure that the personal information we process is complete, accurate, not misleading, and updated where necessary. We maintain strict transparency about what data we hold, why we hold it, and who has access to it.
              </p>

              <h4 className="fw-bold mt-5 mb-3 text-dark">4. Security Safeguards</h4>
              <p>
                Under Section 19 of POPIA, we secure the integrity and confidentiality of your personal information in our possession by taking appropriate, reasonable technical and organizational measures to prevent:
              </p>
              <ul>
                <li>Loss of, damage to, or unauthorized destruction of personal information.</li>
                <li>Unlawful access to or processing of personal information.</li>
              </ul>
              <p>
                We enforce strict data processing agreements with any third-party operators (such as payment gateways and cloud servers) to ensure they establish and maintain security safeguards equivalent to our own.
              </p>

              <h4 className="fw-bold mt-5 mb-3 text-dark">5. Data Subject Participation (Your Rights)</h4>
              <p>
                In accordance with POPIA, as a data subject, you have the right to:
              </p>
              <ul>
                <li>Request confirmation, free of charge, of whether we hold personal information about you.</li>
                <li>Request the record or a description of the personal information we hold, including information about the identity of all third parties who have had access to the information.</li>
                <li>Request the correction or deletion of your personal information that is inaccurate, irrelevant, excessive, out of date, incomplete, misleading, or obtained unlawfully.</li>
              </ul>

              <h4 className="fw-bold mt-5 mb-3 text-dark">6. Information Officer Contact</h4>
              <p>
                In compliance with POPIA, Chiscloud Deliveries has a designated Information Officer to handle all data protection matters. For requests to access, correct, or delete your data, or if you believe we have utilized your personal information contrary to POPIA, please contact our Information Officer:
              </p>
              <div className="bg-light p-4 rounded mt-3">
                <strong>Email:</strong> info@chiscloud.co.za<br/>
                <strong>Support:</strong> thembisotshisikhawe@gmail.com<br/>
                <strong>Phone:</strong> +27 79 797 6919
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
