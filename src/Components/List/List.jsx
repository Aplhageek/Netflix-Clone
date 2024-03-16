import { ArrowBackIosNewOutlined, ArrowBackIosOutlined, ArrowForwardIosOutlined, GolfCourse } from '@mui/icons-material';
import styles from './List.module.scss'
import Card from '../Card/Card';
import { useRef, useState } from 'react';


const List = () => {
    const carouselRef = useRef();
    const [isAnimating, setIsAnimating] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);      // we will limit slides number to 10;

    const handleArrowClick = (direction) => {
        // Check if carouselRef.current is defined
        if (isAnimating || !carouselRef.current) return;

        setIsAnimating(true);

        // getBoundingClientRect() gives the position of the element and x gives distance from the left on the x-axis
        let currDistanceFromStart = carouselRef.current.getBoundingClientRect().x - 50; // -50 to exclude the margin from the left

        // Access the width of the first Card element inside the carousel
        const cardMargin = 5;
        const cardWidth = carouselRef.current.firstChild.clientWidth + cardMargin;

        if (direction === "left" && slideNumber > 0) {
            setSlideNumber(prevSlideNumber => Math.max(prevSlideNumber - 1, 0)); // Ensure slide number doesn't go below 0
            // Setting new style properties using transform, similar to CSS
            carouselRef.current.style.transform = `translateX(${currDistanceFromStart + cardWidth}px)`;
        } else if (direction === "right" && slideNumber < 4) {
            setSlideNumber(prevSlideNumber => Math.min(prevSlideNumber + 1, 4)); // Ensure slide number doesn't go above 5
            carouselRef.current.style.transform = `translateX(${currDistanceFromStart - cardWidth}px)`;
        }

        // Add a delay slightly longer than your animation duration
        setTimeout(() => {
            setIsAnimating(false);
        }, 700); // Adjust the delay as per your animation duration
    }


    return (
        <div className={styles.list}>
            <span className={styles.list_title}>Continue to watch</span>
            <div className={styles.carousel_container}>
                {slideNumber > 0 && <ArrowBackIosOutlined onClick={() => handleArrowClick("left")} className={`${styles.sliderArrow} ${styles.left}`} />}
                <div ref={carouselRef} className={styles.carousel_row}>
                    <Card index={0} />
                    <Card index={1} />
                    <Card index={2}/>
                    <Card index={3}/>
                    <Card index={4}/>
                    <Card index={5}/>
                    <Card index={6}/>
                    <Card index={7}/>
                    <Card index={8}/>
                    <Card index={9}/>
                </div>
                {slideNumber < 4 && <ArrowForwardIosOutlined onClick={() => handleArrowClick("right")} className={`${styles.sliderArrow} ${styles.right}`} />}
            </div>

        </div>
    )
}

export default List;