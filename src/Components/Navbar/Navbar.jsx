import { ArrowDropDown, Logout, Notifications, Search } from '@mui/icons-material';
import styles from './Navbar.module.scss';
import { useState } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    // Set up an event listener for the 'scroll' event of the window
    window.onscroll = () => {
        // Update the state variable 'isScrolled' based on the vertical scroll position of the window
        // If the vertical scroll position is at the top (0 pixels), set 'isScrolled' to false, otherwise set it to true
        setIsScrolled(window.scrollY === 0 ? false : true);

        // Return a cleanup function that removes the event listener when the component unmounts
        return () => (window.onscroll = null);
    }

    return (
        <div className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}> 
            <div className={styles.container}>
                <div className={styles.left}>
                    <img
                        className={styles.logo}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt="Logo"
                    />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New & Poppular</span>
                    <span>My Lists</span>
                </div>

                <div className={styles.right}>
                    <Search className={styles.icon} />
                    <span>KID</span>
                    <Notifications className={styles.icon} />
                    <img
                        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                    />
                    <div className={styles.profile}>
                        <ArrowDropDown className={styles.icon} />
                        <div className={styles.options}>
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default
    Navbar