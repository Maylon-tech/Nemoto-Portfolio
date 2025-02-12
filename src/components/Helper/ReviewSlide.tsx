
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import ClientReviewCard from './ClientReviewCard';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1300, min: 764 },
      items: 2,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };


const ReviewSlide = () => {
  return (
    <Carousel
        responsive={responsive}
        additionalTransform={0}
        arrow={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        centerMode={false}
        infinite
        itemClass="item"
    >
        {/* ClientReviewCard */}
        <ClientReviewCard 
            image="/images/user1.jpg"
            user="Salamao Tunder"
            role="Web Designer"
        />
    </Carousel>
  )
}

export default ReviewSlide
