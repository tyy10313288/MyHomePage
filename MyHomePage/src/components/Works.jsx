import { useEffect, useRef } from 'react';
import LikeButton from './LikeButton';

const Works = () => {
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

  const works = [
    {
      id: 'escape',
      title: 'Escape',
      details: [
        '🛠 開発環境： Unreal Engine',
        '👤 制作体制： 個人制作',
        '⏳ 開発期間： 約2週間'
      ],
      description: '初めて遊べるくらいのゲーム作りました。パスワードシステムだけで二日かかって、BluePrintのnodeもめちゃくちゃでした。',
      images: ['Image/ue1.png', 'Image/ue2.png', 'Image/ue3.png'],
      link: 'https://www.youtube.com/watch?v=HSyOgS2g5HY&list=PLxlxhxve1vaB-4ML3mfd8QM2Zh1jx1iCc&index=2'
    },
    {
      id: 'makeup',
      title: 'すっぴんなんて見せられない！',
      details: [
        '🛠 開発環境： Unity',
        '👥 制作体制： チーム制作（約10人）',
        '🎯 担当： プログラマー（ゲーム学科のメンバーと協力）',
        '⏳ 開発期間： 約4～5か月'
      ],
      description: 'プランナー、グラフィックとプログラマーのチームです。わたしは三つの突発イベントを制作ました。',
      images: ['Image/makeup1.png', 'Image/makeup2.png', 'Image/make3.png'],
      link: 'https://www.youtube.com/watch?v=94kDJoeTx6Y&list=PLxlxhxve1vaB-4ML3mfd8QM2Zh1jx1iCc&index=3'
    },
    {
      id: 'monk',
      title: '出家シミュレーター',
      details: [
        '🛠 開発環境： Unreal Engine',
        '👥 制作体制： チーム制作（2人）',
        '🎯 担当： ゲームシステム全般',
        '⏳ 開発期間： 約3週間'
      ],
      description: '仏教の教えに興味があり、出家をテーマにしたゲームを制作しました。このゲームを通して、少しでも仏教の言葉や考え方が伝わればと思っています。',
      images: ['Image/monk1.png', 'Image/monk2.png', 'Image/monk3.png'],
      links: [
        { text: '▶ YouTube - Part 1', url: 'https://www.youtube.com/watch?v=ZQnxzHmKIxU' },
        { text: 'Part 2', url: 'https://www.youtube.com/watch?v=79lRV5pePG4' }
      ]
    },
    {
      id: 'trpg',
      title: 'TRPG（タイトル未定 / 開発中）',
      details: [
        '🛠 開発環境： Unity',
        '👥 制作体制： 学外サークル制作',
        '🎯 担当： プログラマーと企画'
      ],
      description: '学外の方と一緒に制作します。初めて挑戦するジャンルで、とても面白いです。',
      link: 'https://www.youtube.com/watch?v=LipVikHc27w&list=PLxlxhxve1vaB-4ML3mfd8QM2Zh1jx1iCc'
    },
    {
      id: 'hospital',
      title: '病棟∞（開発中）',
      details: [
        '🛠 開発環境： Unreal Engine',
        '👥 制作体制： チーム制作',
        '🎯 担当： メインプログラマー',
        '⏳ 開発期間： 約4か月（開発中）',
        '🌟 目標：TGSに出展する'
      ],
      description: '8號出口風のゲームですが、背景は精神病院です。異常を観察するだけでなく、アイテムとのインタラクションも可能です。TGS2025に出展しました。',
      images: ['Image/8exit.jpg', 'Image/8exit2.jpg'],
      link: 'https://drive.google.com/file/d/1Fkp6_x2pQABfGt6vppmHZ27Ns0ovk-xN/view?usp=sharing'
    }
  ];

  return (
    <section id="works" className="fade-section container" ref={sectionRef}>
      <h2>作品一覧（開発順）</h2>
      <div className="works-list">
        {works.map((work) => (
          <div key={work.id} className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h3>{work.title}</h3>
                <ul className="work-details">
                  {work.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
              <div className="flip-card-back">
                <h4>{work.title} について</h4>
                <p>{work.description}</p>
                {work.images && (
                  <div className="work-gallery">
                    {work.images.map((image, index) => (
                      <img key={index} src={image} alt={`${work.title} Screenshot ${index + 1}`} />
                    ))}
                  </div>
                )}
                <p className="work-link">
                  {work.links ? (
                    work.links.map((link, index) => (
                      <span key={index}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          {link.text}
                        </a>
                        {index < work.links.length - 1 && ' | '}
                      </span>
                    ))
                  ) : work.link ? (
                    <a href={work.link} target="_blank" rel="noopener noreferrer">
                      {work.id === 'hospital' ? '🎮 ゲームデモをダウンロード' : '▶ YouTube'}
                    </a>
                  ) : null}
                </p>
                <LikeButton itemId={work.id} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;