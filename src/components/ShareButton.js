import React from 'react';
import Badge from './Badge';

const ShareButton = ({ textToShare }) => {
  const handleShare = async () => {
    if (navigator.share) {
      // Native share available (e.g. on iOS Safari)
      try {
        await navigator.share({
          text: `${textToShare} ${window.location.href}`,
        });
      } catch (err) {
        console.error('Share failed:', err.message);
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(textToShare);
        alert('Copied to clipboard!');
      } catch (err) {
        console.error('Copy failed:', err.message);
        alert('Failed to copy');
      }
    }
  };

  return (
    <div className='share-button'>
      <Badge onClick={handleShare}>Share</Badge>
    </div>
  );
};

export default ShareButton;
