import { ArrowBackOutlined } from '@mui/icons-material';
import styles from './Watch.module.scss'
const movie = "https://player.vimeo.com/progressive_redirect/playback/329569841/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=0284bd9f804cd961d21b1f4bc15de2ad9479ae4ea2d807b82e8012d5a6b658e1";

const Watch = () => {
    return (
        <div className={styles.watch}>
            {/* back arrow */}
            <div className={styles.back}>
                <ArrowBackOutlined />
                Home
            </div>
            <video src={movie} autoPlay controls className={styles.video}  />
        </div>
    )
}

export default Watch;