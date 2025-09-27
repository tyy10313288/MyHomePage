import { useEffect, useRef } from 'react';

const Profile = () => {
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
    <section id="profile" className="fade-section container" ref={sectionRef}>
      <h2>プロフィール</h2>
      <p>
        こんにちは、香港出身のジュリアです。<br />
        現在専門学校東京クールジャパン・アカデミーにてゲームプログラミングを専攻しています。<br />
        以前は香港の飲食業界で管理職として勤務し、現在は Flying Milk Tea（香港のEコマース系スタートアップ） にてプロジェクトマネージャーを務めています。<br />
      </p>
    </section>
  );
};

export default Profile;