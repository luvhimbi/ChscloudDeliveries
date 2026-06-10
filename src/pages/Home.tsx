import {
  FaGooglePlay, FaClock, FaBuilding,
  FaShoppingCart, FaMapMarkerAlt, FaStore, FaBolt,
  FaEnvelope, FaPhoneAlt, FaMapPin, FaChevronDown, FaChevronUp,
  FaUtensils, FaMotorcycle
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useState } from 'react';

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What areas do you currently deliver to?",
      answer: "We proudly serve Centurion and surrounding areas including Tembisa, Pretoria Central, and Sunnyside."
    },
    {
      question: "How long does delivery usually take?",
      answer: "Our average delivery time is under 30 minutes, but this can vary slightly depending on the restaurant preparation time and exact distance."
    },
    {
      question: "How do I pay for my order?",
      answer: "You can securely pay via credit/debit card directly within the Chiscloud Deliveries app."
    },
    {
      question: "Can I track my delivery driver?",
      answer: "Yes! Our app provides real-time GPS tracking so you can follow your order from the kitchen to your doorstep."
    },
    {
      question: "How can I partner my restaurant with Chiscloud Deliveries?",
      answer: "We welcome local restaurants, home kitchens, and food/beverage vendors! To partner with us, please reach out via our contact form below, email us at info@chiscloud.co.za, or call +27 79 797 6919. Our onboarding team will help you set up your menu and start receiving orders."
    },
    {
      question: "How do I apply to become a delivery driver?",
      answer: "We are always looking for reliable drivers and riders to join our team in Centurion, Tembisa, Pretoria Central, and Sunnyside. You will need a valid driver's or motorcycle license, a reliable vehicle (car, scooter, or motorbike), a smartphone, and a clean record. Contact us via +27 79 797 6919 or email thembisotshisikhawe@gmail.com to apply."
    },
    {
      question: "What are your operating hours?",
      answer: "Chiscloud Deliveries operates daily from 08:00 AM to 10:00 PM. Please note that restaurant availability within the app depends on the specific operating hours of each partner kitchen."
    },
    {
      question: "What should I do if there is an issue with my order?",
      answer: "Your satisfaction is our priority! If you experience any issues with missing items, incorrect orders, or delivery delays, please contact our support team immediately by calling +27 79 797 6919 or emailing thembisotshisikhawe@gmail.com for fast support."
    }
  ];

  return (
    <main>
      {/* ===== HERO ===== */}
      <section id="home" className="section-custom position-relative">
        <div className="container">
          <div className="row g-5 align-items-center py-4 py-lg-5">
            <motion.div 
              className="col-lg-6 text-center text-lg-start"
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="badge-custom">Your Satisfaction, Our Priority</span>
              <h1 className="display-4 fw-bold mb-4" style={{ letterSpacing: '-0.04em', lineHeight: 1.15 }}>
                Your Favorite Local Flavors, Delivered&nbsp;Fresh
              </h1>
              <p className="mb-5" style={{ fontSize: '1.1rem', maxWidth: '540px', color: '#6b7280', lineHeight: 1.8 }}>
                From hot meals to refreshing drinks — get whatever you're craving
                from top local spots across <strong style={{ color: '#111' }}>Centurion</strong>,{' '}
                <strong style={{ color: '#111' }}>Tembisa</strong>,{' '}
                <strong style={{ color: '#111' }}>Pretoria Central</strong>,{' '}
                <strong style={{ color: '#111' }}>Sunnyside</strong>, and more,
                delivered straight to your door.
              </p>
              <div className="d-flex justify-content-center justify-content-lg-start gap-3 align-items-center mt-3">
                <a href="https://play.google.com/store/apps/details?id=za.co.chiscloud.kasicentralservices&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="btn-custom btn-custom-primary py-3 px-4">
                  <FaGooglePlay size={18} />
                  <span>GET IT ON PLAYSTORE</span>
                </a>

                <div className="d-none d-xl-flex align-items-center" style={{ transform: 'translateY(15px)' }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#A31D1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(-10deg)' }}>
                    <path d="M9 14 L4 9 L9 4" />
                    <path d="M4 9 C12 9 20 12 20 20" />
                  </svg>
                  <span className="fw-bold ms-1" style={{ color: '#A31D1D', fontFamily: 'cursive', fontSize: '1.2rem', transform: 'rotate(-5deg)' }}>
                    Order Now!
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="col-lg-6 d-flex justify-content-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <img
                src="/app_screenshot.png"
                alt="Chiscloud App Mockup"
                className="img-fluid position-relative"
                style={{
                  width: '160%',        // increase size
                  maxWidth: 'none',     // remove width limit
                  objectFit: 'contain',
                  marginBottom: '-80px',
                  zIndex: 10,
                  filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.15))'
                }}
              />
            </motion.div>
          </div>

          {/* ---- Key Features Grid ---- */}
          <motion.div 
            className="row g-4 py-5 mt-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              { icon: FaBolt, title: 'Lightning Fast', desc: 'Hot meals delivered straight to your door in record time.' },
              { icon: FaMapMarkerAlt, title: 'Wide Coverage', desc: 'Serving Centurion, Tembisa, Pretoria Central, Sunnyside & more.' },
              { icon: FaStore, title: 'Top Partners', desc: 'Partnered with the highest-rated kitchens and eateries near you.' },
              { icon: FaClock, title: 'Live Tracking', desc: 'Follow your driver in real-time from kitchen to your doorstep.' },
            ].map(({ icon: Icon, title, desc }) => (
              <motion.div className="col-sm-6 col-lg-3" key={title} variants={fadeUpVariant}>
                <div className="stat-card text-center h-100">
                  <div className="stat-icon-wrap">
                    <Icon size={24} color="#A31D1D" />
                  </div>
                  <h6 className="fw-bold mb-2">{title}</h6>
                  <p className="mb-0 small" style={{ color: '#6b7280' }}>{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* ---- Groceries Feature ---- */}
          <motion.div 
            className="pt-5 mt-4"
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="feature-card-custom row align-items-center g-5">
              <div className="col-lg-6">
                <span className="badge-custom">Coming Soon</span>
                <h2 className="fw-bold display-6 mb-4" style={{ letterSpacing: '-0.02em' }}>
                  Fresh Groceries, Coming to Your Doorstep
                </h2>
                <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: '#6b7280' }}>
                  We're expanding our ecosystem! Soon you'll be able to restock daily
                  essentials, fresh farm produce, and pantry staples — using the
                  exact same app you love for food deliveries. Available across all
                  our coverage areas.
                </p>
              </div>
              <div className="col-lg-6 text-center feature-image-container">
                <img src="/groceries.png" alt="Fresh Groceries" className="img-fluid" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== HOW TO ORDER ===== */}
      <section id="how-to-order" className="section-custom">
        <div className="container py-4 py-lg-5">
          <motion.div 
            className="text-center mb-5"
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="badge-custom">Simple Process</span>
            <h2 className="display-5 fw-bold mb-3" style={{ letterSpacing: '-0.02em' }}>How to Order</h2>
            <p style={{ color: '#6b7280', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto' }}>
              Getting your favorite food is just a few taps away. Follow these simple steps.
            </p>
          </motion.div>

          <motion.div 
            className="row g-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { step: '1', title: 'Home Services', desc: 'Browse categories like Fast Food, Grocery, or Alkaline Water.', img: '/step1.jpg' },
              { step: '2', title: 'Set Location', desc: 'Add your specific delivery address in Centurion and surrounds.', img: '/step2.jpg' },
              { step: '3', title: 'Select Restaurant', desc: 'Find your favorite local restaurant or vendor.', img: '/step3.jpg' },
              { step: '4', title: 'Choose Items', desc: 'Select your preferred items from the vendor menu.', img: '/step4.jpg' },
              { step: '5', title: 'Add to Cart', desc: 'Set quantities and add your selected items to your cart.', img: '/step5.jpg' },
              { step: '6', title: 'Checkout & Track', desc: 'Pay securely and track your delivery in real-time!', img: null }
            ].map((item, i) => (
              <motion.div className="col-md-4 text-center" key={i} variants={fadeUpVariant}>
                <div className="mb-4 d-flex align-items-center justify-content-center" style={{ borderRadius: '16px', overflow: 'hidden', height: '240px', backgroundColor: '#f3f4f6', border: '1px solid #e5e7eb' }}>
                  {item.img ? (
                    <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  ) : (
                    <div style={{ padding: '2rem' }}>
                      <FaShoppingCart size={60} color="#A31D1D" style={{ opacity: 0.2 }} />
                    </div>
                  )}
                </div>
                <div className="d-flex align-items-center justify-content-center mx-auto mb-3" 
                     style={{ width: 32, height: 32, borderRadius: '50%', backgroundColor: '#A31D1D', color: 'white', fontSize: '1rem', fontWeight: 'bold' }}>
                  {item.step}
                </div>
                <h5 className="fw-bold mb-2">{item.title}</h5>
                <p className="small" style={{ color: '#6b7280' }}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== ABOUT US ===== */}
      <section id="about" className="section-custom" style={{ backgroundColor: '#f9fafb' }}>
        <div className="container py-4 py-lg-5">
          <div className="row g-5 align-items-center mb-5">
            <motion.div 
              className="col-lg-7"
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="badge-custom">Our Mission</span>
              <h2 className="display-5 fw-bold mb-4" style={{ letterSpacing: '-0.03em' }}>
                Bringing the Best Local Flavors Straight&nbsp;to&nbsp;You
              </h2>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#6b7280' }}>
                Chiscloud Deliveries was built to bridge the gap between your
                favorite local food spots, refreshing drinks, and your doorstep.
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#6b7280' }}>
                We believe on-demand delivery should be fast, seamless, and
                completely reliable. We proudly cover Centurion and key surrounding
                areas — ensuring local kitchens can reach hungry customers in
                Tembisa, Pretoria Central, Sunnyside, and beyond.
              </p>
            </motion.div>
            <motion.div 
              className="col-lg-5 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img src="/driver.png" alt="Delivery Courier" className="img-fluid" style={{ maxHeight: '420px', objectFit: 'contain' }} />
            </motion.div>
          </div>

          <motion.div 
            className="pt-4"
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="fw-bold mb-4" style={{ letterSpacing: '-0.01em' }}>What We Stand For</h3>
            <div className="row g-4 mb-5">
              {[
                { icon: FaClock, title: 'On-Demand Speed', desc: 'We optimize our delivery routing so your hot food and cold drinks arrive exactly when you expect them.' },
                { icon: FaBuilding, title: 'Empowering Local Spots', desc: 'We partner closely with neighborhood kitchens, gourmet creators, and drink spots to help them grow.' },
                { icon: FaShoppingCart, title: 'Continuous Innovation', desc: "We don't stop at meals. Our ecosystem is actively expanding to bring fresh groceries and household essentials to you soon." },
              ].map(({ icon: Icon, title, desc }) => (
                <div className="col-md-4" key={title}>
                  <div className="pillar-card">
                    <div className="pillar-icon">
                      <Icon size={20} color="#A31D1D" />
                    </div>
                    <h6 className="fw-bold mb-2">{title}</h6>
                    <p className="mb-0 small" style={{ color: '#6b7280', lineHeight: 1.65 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* CTA Banner */}
          <motion.div 
            className="cta-banner mt-5 position-relative"
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="row align-items-center g-5">
              <div className="col-lg-7 text-center text-lg-start">
                <h4 className="fw-bold mb-3 display-6" style={{ letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                  Ready to experience fresh, on-demand convenience?
                </h4>
                <p className="mb-4" style={{ color: '#6b7280', fontSize: '1.05rem', lineHeight: 1.6 }}>
                  Download the active Play Store app today and get your first delivery in minutes.
                </p>
                <div className="d-flex justify-content-center justify-content-lg-start gap-3 flex-wrap">
                  <button className="btn-custom btn-custom-secondary" disabled style={{ opacity: 0.5, cursor: 'not-allowed' }}>
                    APPLE STORE (COMING SOON)
                  </button>
                  <a href="https://play.google.com/store/apps/details?id=za.co.chiscloud.kasicentralservices&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="btn-custom btn-custom-primary">
                    <FaGooglePlay size={18} /> PLAYSTORE
                  </a>
                </div>
              </div>
              <div className="col-lg-5 text-center position-relative">
                <img 
                  src="/app_screenshot.png" 
                  alt="Chiscloud App Mockup" 
                  className="img-fluid cta-phone-img" 
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== PARTNER WITH US ===== */}
      <section id="partner" className="section-custom" style={{ backgroundColor: '#ffffff' }}>
        <div className="container py-4 py-lg-5">
          <motion.div 
            className="text-center mb-5"
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="badge-custom">Grow With Us</span>
            <h2 className="display-5 fw-bold mb-3" style={{ letterSpacing: '-0.02em' }}>Partner With Chiscloud</h2>
            <p style={{ color: '#6b7280', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto' }}>
              Whether you want to expand your food business or earn competitive income as a driver, we provide the platform to help you succeed.
            </p>
          </motion.div>

          <motion.div 
            className="row g-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Restaurant Partner Card */}
            <motion.div className="col-md-6" variants={fadeUpVariant}>
              <div className="partner-card">
                <div>
                  <div className="partner-icon-wrap">
                    <FaUtensils size={28} color="#A31D1D" />
                  </div>
                  <h4 className="fw-bold mb-3">Partner Your Restaurant</h4>
                  <p className="small mb-4" style={{ color: '#6b7280', lineHeight: 1.7 }}>
                    Reach thousands of hungry local customers across Centurion, Tembisa, Pretoria Central, and Sunnyside. 
                    We handle all the delivery logistics and tracking so you can focus entirely on preparation. 
                    Receive orders seamlessly, track delivery riders, and grow your sales dashboard.
                  </p>
                </div>
                <div className="pt-2">
                  <a href="mailto:info@chiscloud.co.za?subject=Restaurant Partner Inquiry" className="btn-custom btn-custom-primary w-100 py-3">
                    REGISTER RESTAURANT
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Driver Partner Card */}
            <motion.div className="col-md-6" variants={fadeUpVariant}>
              <div className="partner-card">
                <div>
                  <div className="partner-icon-wrap">
                    <FaMotorcycle size={28} color="#A31D1D" />
                  </div>
                  <h4 className="fw-bold mb-3">Drive &amp; Earn With Us</h4>
                  <p className="small mb-4" style={{ color: '#6b7280', lineHeight: 1.7 }}>
                    Looking for a flexible way to earn competitive income? Join our rider network. 
                    Work whenever you want, track your earnings in real-time in the app, and deliver food/beverages 
                    to grateful neighbors. All you need is a valid license, a smartphone, and your own vehicle.
                  </p>
                </div>
                <div className="pt-2">
                  <a href="mailto:thembisotshisikhawe@gmail.com?subject=Driver Application Inquiry" className="btn-custom btn-custom-secondary w-100 py-3">
                    APPLY AS DRIVER
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="section-custom border-top">
        <div className="container py-4 py-lg-5">
          <motion.div 
            className="row justify-content-center"
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="col-lg-8">
              <div className="text-center mb-5">
                <span className="badge-custom">Support</span>
                <h2 className="display-5 fw-bold mb-3" style={{ letterSpacing: '-0.02em' }}>Frequently Asked Questions</h2>
              </div>
              <div className="faq-accordion">
                {faqs.map((faq, index) => (
                  <div key={index} className="faq-item border-bottom py-4" style={{ cursor: 'pointer' }} onClick={() => toggleFaq(index)}>
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="fw-bold mb-0" style={{ color: '#111' }}>{faq.question}</h6>
                      <div style={{ color: '#A31D1D' }}>
                        {openFaq === index ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
                      </div>
                    </div>
                    <motion.div 
                      initial={false}
                      animate={{ height: openFaq === index ? 'auto' : 0, opacity: openFaq === index ? 1 : 0 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3 mb-0 small" style={{ color: '#6b7280', lineHeight: 1.7 }}>
                        {faq.answer}
                      </p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="section-custom" style={{ backgroundColor: '#f9fafb' }}>
        <div className="container py-4 py-lg-5">
          <motion.div 
            className="row justify-content-center mb-5"
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="col-lg-7 text-center">
              <span className="badge-custom">Contact Us</span>
              <h2 className="display-5 fw-bold mb-3" style={{ letterSpacing: '-0.02em' }}>Get in Touch</h2>
              <p style={{ color: '#6b7280', fontSize: '1.05rem' }}>
                Have questions about our service, delivery areas, or partnering with us? We'd love to hear from you.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="row justify-content-center g-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="col-lg-6" variants={fadeUpVariant}>
              <div className="contact-card p-2 h-100 overflow-hidden">
                <iframe
                  title="Map of Centurion"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114389.56942959891!2d28.083162799999998!3d-25.8643501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e956461f5c6b9bb%3A0xc66512ba80e4b7b3!2sCenturion!5e0!3m2!1sen!2sza!4v1700000000000!5m2!1sen!2sza"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px', borderRadius: '16px' }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>

            <motion.div className="col-lg-4" variants={fadeUpVariant}>
              <div className="contact-info-box p-md-5 p-4 h-100">
                <h5 className="fw-bold mb-4">Contact Information</h5>

                <div className="contact-info-item">
                  <div className="d-flex align-items-center gap-3">
                    <div className="pillar-icon" style={{ width: 40, height: 40, borderRadius: 10 }}>
                      <FaEnvelope size={16} color="#A31D1D" />
                    </div>
                    <div>
                      <p className="mb-0 small fw-semibold" style={{ color: '#111' }}>General Info</p>
                      <p className="mb-0 small" style={{ color: '#6b7280' }}>info@chiscloud.co.za</p>
                    </div>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="d-flex align-items-center gap-3">
                    <div className="pillar-icon" style={{ width: 40, height: 40, borderRadius: 10 }}>
                      <FaEnvelope size={16} color="#A31D1D" />
                    </div>
                    <div>
                      <p className="mb-0 small fw-semibold" style={{ color: '#111' }}>Support Email</p>
                      <p className="mb-0 small" style={{ color: '#6b7280' }}>thembisotshisikhawe@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="d-flex align-items-center gap-3">
                    <div className="pillar-icon" style={{ width: 40, height: 40, borderRadius: 10 }}>
                      <FaPhoneAlt size={16} color="#A31D1D" />
                    </div>
                    <div>
                      <p className="mb-0 small fw-semibold" style={{ color: '#111' }}>Call Us</p>
                      <p className="mb-0 small" style={{ color: '#6b7280' }}>+27 79 797 6919</p>
                    </div>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="d-flex align-items-center gap-3">
                    <div className="pillar-icon" style={{ width: 40, height: 40, borderRadius: 10 }}>
                      <FaMapPin size={16} color="#A31D1D" />
                    </div>
                    <div>
                      <p className="mb-0 small fw-semibold" style={{ color: '#111' }}>Headquarters</p>
                      <p className="mb-0 small" style={{ color: '#6b7280' }}>
                        Centurion &amp; Surrounding Areas<br />
                        Gauteng, South Africa
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
