const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      <div className="header-content container">
        <h1 className="header-title">
          Tang Yuen Yee Julia<span className="nickname">（ジュリア）</span>
        </h1>
        <p className="header-tagline">
          ✨Thanks For Accessing My Page✨
        </p>
        <nav>
          <a onClick={() => scrollToSection('profile')}>プロフィール</a>
          <a onClick={() => scrollToSection('skills')}>スキル</a>
          <a onClick={() => scrollToSection('works')}>作品一覧</a>
          <a onClick={() => scrollToSection('contact')}>連絡先</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;