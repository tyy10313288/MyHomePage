import { useEffect, useRef } from 'react';

const Skills = () => {
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
    <section id="skills" className="fade-section container" ref={sectionRef}>
      <h2>スキル</h2>
      <div className="skills-grid">
        <div className="skill-card">
          <h3>ゲームエンジン</h3>
          <div className="subskill">
            <span className="subskill-name">Unreal Engine</span>
            <span className="star-rating">★★★★☆</span>
          </div>
          <div className="subskill">
            <span className="subskill-name">Unity</span>
            <span className="star-rating">★★★☆☆</span>
          </div>
        </div>
        <div className="skill-card">
          <h3>3Dモデリング</h3>
          <div className="subskill">
            <span className="subskill-name">Blender</span>
            <span className="star-rating">★★☆☆☆</span>
          </div>
        </div>
        <div className="skill-card">
          <h3>プログラミング</h3>
          <div className="subskill">
            <span className="subskill-name">C#, HTML, CSS, JavaScript</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;