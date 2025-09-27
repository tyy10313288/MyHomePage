import { useEffect, useRef } from 'react';

const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="fade-section container" ref={sectionRef}>
      <h2>連絡先</h2>
      <p className="contact-email">
        <a href="mailto:game22403001@gmail.com">game22403001@gmail.com</a>
      </p>
    </section>
  );
};

export default Contact;