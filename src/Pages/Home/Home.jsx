import { AcUnit } from '@mui/icons-material'
import styles from './Home.module.scss'
import Navbar from '../../Components/Navbar/Navbar'
import Featured from '../../Components/Featured/Featured'
import List from '../../Components/List/List'

const Home = () => {
    return (
        <div className={styles.home}>
            <Navbar />
            <Featured type="movie" />
            <List />
            <List />
            <List />
        </div>
    )
}

export default Home