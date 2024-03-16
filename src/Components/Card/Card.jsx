import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpOutlined } from '@mui/icons-material';
import styles from './Card.module.scss'
import { useState } from 'react';


const Card = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "https://player.vimeo.com/progressive_redirect/playback/482563931/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=71b067da0bd260408a6e96815e38a37cd21ad94889b0b3568e7352f75e2102c4";


  return (
    <div className={styles.card_container}
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src="https://images.pexels.com/photos/3137890/pexels-photo-3137890.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className={styles.item_info}>
            <div className={styles.icons}>
              <PlayArrow  className={styles.icon} />
              <Add  className={styles.icon}/>
              <ThumbUpOutlined className={styles.icon} />
              <ThumbDownAltOutlined  className={styles.icon}/>
            </div>
            <div className={styles.item_info_top}>
              <span>1 hour 14 mins</span>
              <span className={styles.age_limit}>+16</span>
              <span>1999</span>
            </div>
            <div className={styles.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi. Voluptatem necessitatibus nisi beatae nihil quasi
            </div>
            <div className={styles.genre}>Action</div>
          </div>

        </>

      )}


    </div>
  )
}

export default Card;