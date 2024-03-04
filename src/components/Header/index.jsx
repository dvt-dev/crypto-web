import classNames from "classnames/bind";
import styles from "./Header.module.scss";

import logo from "../../assets/images/logo.png";
import barIcon from "../../assets/icons/bars.png";

const cx = classNames.bind(styles);

const Header = () => {
    return (
        <header className={cx("wrapper")}>
            <div className={cx("header-container")}>
                <div className={cx("logo")}>
                    <img className={cx("logo-img")} src={logo} alt="Logo" />
                    <p className={cx("name")}>Cryptous</p>
                </div>

                <nav className={cx("nav-bar")}>
                    <ul className={cx("nav-list")}>
                        <li className={cx("nav-item")}>
                            <a className={cx("nav-item-link")}>Home</a>
                        </li>
                        <li className={cx("nav-item")}>
                            <a className={cx("nav-item-link")}>Company</a>
                        </li>
                        <li className={cx("nav-item")}>
                            <a className={cx("nav-item-link")}>About</a>
                        </li>
                        <li className={cx("nav-item")}>
                            <a className={cx("nav-item-link")}>Pricing</a>
                        </li>
                        <li className={cx("nav-item")}>
                            <a className={cx("nav-item-link")}>Team</a>
                        </li>
                        <li className={cx("nav-item")}>
                            <a className={cx("nav-item-link")}>Contact</a>
                        </li>
                        <li className={cx("nav-item")}>
                            <a className={cx("nav-item-link")}>Blog</a>
                        </li>
                    </ul>
                </nav>

                <button className={cx("button-trade", "btn")}>Trade Now</button>

                <div className={cx("menu-mobile")}>
                    <img
                        className={cx("bars-icon")}
                        src={barIcon}
                        alt="bars-icon"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
