import React from 'react';
import { Dancing_Script } from 'next/font/google';
import { Mystery_Quest } from 'next/font/google';

interface CardPageProps {
  title?: string;
  body?: string;
  pageNumber: number;
  backgroundColor?: string;
  backgroundImage?: string;
  imageUrl?: string;
  imagePlacement?: 'above' | 'between' | 'below';
  imageShape?: 'rounded' | 'circle';
  textColor?: string;
}

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const mysteryQuest = Mystery_Quest({
  subsets: ['latin'],
  weight: ['400'],
});

const getPageNumberStyle = (pageNumber: number) => {
  return {
    position: 'absolute' as 'absolute',
    bottom: 10,
    left: pageNumber % 2 === 0 ? 15 : 'unset',
    right: pageNumber % 2 !== 0 ? 15 : 'unset',
    fontSize: 14,
    color: '#fff',
    opacity: 0.7,
  };
};

const CardPage: React.FC<CardPageProps> = ({
  title,
  body,
  pageNumber,
  backgroundColor,
  backgroundImage,
  imageUrl,
  imagePlacement = 'above',
  imageShape = 'rounded',
  textColor = '#fff',
}) => {
  const imageStyles: React.CSSProperties = {
    width: 200,
    height: 200,
    objectFit: 'cover',
    marginBottom: 12,
    borderRadius: imageShape === 'circle' ? '50%' : 12,
    boxShadow: '0 2px 10px rgba(0,0,0,0.12)',
    background: '#fff',
  };

  const ImageElem = imageUrl ? (
    <img className="my-5" src={imageUrl} alt="card" style={imageStyles} />
  ) : null;

  return (
    <div
      style={{
        backgroundColor,
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: 15,
        width: '100%',
        height: '100%',
        position: 'relative',
        boxSizing: 'border-box',
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Image above title */}
      {imagePlacement === 'above' && ImageElem}
      <h2 className={dancingScript.className} style={{ color: textColor, marginBottom: body ? 12 : 0, textAlign: 'center', fontSize: 30, fontWeight: 700 }}>{title}</h2>
      {/* Image between title and body */}
      {imagePlacement === 'between' && ImageElem}
      {body && <p className={mysteryQuest.className} style={{ color: textColor, textAlign: 'center', fontSize: 20, fontWeight: 700, letterSpacing: 1}}>{body}</p>}
      {/* Image below body */}
      {imagePlacement === 'below' && ImageElem}
      <span style={getPageNumberStyle(pageNumber)}>{pageNumber}</span>
    </div>
  );
};

export default CardPage;
