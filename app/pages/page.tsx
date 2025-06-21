"use client";
import HTMLFlipBook from 'react-pageflip';
import CardPage from '../components/CardPage';

export default function MyBook() {
  return (
    <div className="flex justify-center items-center h-screen">
      <HTMLFlipBook
        width={300}
        height={500}
        className="book"
        style={{}}
        startPage={0}
        size="fixed"
        minWidth={300}
        minHeight={500}
        maxWidth={300}
        maxHeight={500}
        drawShadow={true}
        flippingTime={1000}
        usePortrait={true}
        startZIndex={1}
        autoSize={true}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        clickEventForward={true}
        useMouseEvents={true}
        swipeDistance={50}
        showPageCorners={true}
        disableFlipByClick={false}
      >
        <div className="card-page">
          <CardPage
            title="Happy Father's Day, Dad"
            pageNumber={1}
            backgroundImage="/fathers-bg-1.jpg"
            imageUrl="/family_3.jpg"
            imagePlacement="below"
          />
        </div>
        <div className="card-page">
          <CardPage
            title="Hey Dad,"
            body="thanks for the love you've given us over the years"
            textColor="#000"
            pageNumber={2}
            backgroundImage="/fathers-bg-2.jpg"
            imageUrl="/canoe.jpg"
            imagePlacement="between"
          />
        </div>
        <div className="card-page">
          <CardPage
            title="Remember that one time..."
            body="when I pooped my pants?"
            pageNumber={3}
            backgroundColor="#B8860B" // Dark Yellow
            imageUrl="/jackson-baby.jpg"
            imagePlacement="between"
          />
        </div>
        <div className="card-page">
          <CardPage
            title="Well... it was probably more than one time..."
            body="afterall I was just a baby 👼"
            pageNumber={4}
            backgroundImage="/fathers-bg-3.jpg"
            textColor="#000"
          />
        </div>
        <div className="card-page">
          <CardPage
            body="Must've been all that CORN!"
            pageNumber={5}
            backgroundImage="/fathers-bg-7.jpg"
            imageUrl='/corn.jpg'
            imagePlacement="below"
          />
        </div>
        <div className="card-page">
          <CardPage
            title="One thing I know for sure... Family is the most important"
            body="thanks for teaching me that"
            pageNumber={6}
            backgroundImage="/fathers-bg-5.jpg"
            imageUrl="/dad_richard.jpg"
            imagePlacement="between"
          />
        </div>
        <div className="card-page">
          <CardPage
            title="Thanks for everything, Dad"
            body="Thanks for raising me right, supporting me, and surrounding me with love.  I'm blessed to have you as my dad. Love you tons!"
            pageNumber={7}
            backgroundColor="#4B006E" // Dark Violet
            backgroundImage="/fathers-bg-1.jpg"
            imageUrl="/family_2.jpg"
            imagePlacement="between"
          />
        </div>
        <div className="card-page">
          <CardPage
            title="Happy Fathers Day, Dad"
            body={"I love you!"}
            pageNumber={8}
            backgroundColor="#800020" // Burgundy Red
          />
        </div>
      </HTMLFlipBook>
    </div>
  );
}