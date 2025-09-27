import { useState, useEffect } from 'react';

const LikeButton = ({ itemId }) => {
  const [liked, setLiked] = useState(false);

  // 從 localStorage 讀取 like 狀態
  useEffect(() => {
    const savedLikes = JSON.parse(localStorage.getItem('likes') || '{}');
    if (savedLikes[itemId]) {
      setLiked(true);
    }
  }, [itemId]);

  const handleLike = () => {
    const savedLikes = JSON.parse(localStorage.getItem('likes') || '{}');
    
    if (liked) {
      // Unlike
      setLiked(false);
      delete savedLikes[itemId];
    } else {
      // Like
      setLiked(true);
      savedLikes[itemId] = true;
    }
    
    localStorage.setItem('likes', JSON.stringify(savedLikes));
  };

  return (
    <div className="like-section">
      <button 
        className={`like-button ${liked ? 'liked' : ''}`}
        onClick={handleLike}
      >
        <span className="like-icon">
          {liked ? '❤️' : '🤍'}
        </span>
      </button>
      <span style={{ fontSize: '0.9rem', opacity: 0.7 }}>
        {liked ? 'いいね！' : 'いいね'}
      </span>
    </div>
  );
};

export default LikeButton;