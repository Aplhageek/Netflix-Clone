import { InfoOutlined, PlayArrow } from '@mui/icons-material'
import styles from './Featured.module.scss'

const Featured = ({ type }) => {
    return (
        <div className={styles.featured_Container}>
            {type && (
                <div className={styles.category}>
                    <span>{type  === "movie" ? "Movies " : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}

            <img
                width="100%"
                src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
            />
            <div className={styles.info_Card}>
                <img src="https://images.pexels.com/photos/1091294/pexels-photo-1091294.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <div className={styles.description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur maxime a accusantium aspernatur magni nesciunt et quas totam id voluptatum ex commodi rem temporibus reiciendis ab similique, soluta quam consequatur.
                </div>
                <div className={styles.card_buttons}>
                    <button className={styles.play_button}>
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className={styles.info_button}>
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Featured