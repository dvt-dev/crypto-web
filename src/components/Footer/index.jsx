import classNames from "classnames/bind";
import styles from "./Footer.module.scss";

import fb from "../../assets/images/socials/facebook.png";
import twitter from "../../assets/images/socials/twitter.png";
import linkedin from "../../assets/images/socials/linkedin.png";
import insta from "../../assets/images/socials/insta.png";

const cx = classNames.bind(styles);

const Footer = () => {
    return (
        <footer className={cx("wrapper")}>
            <div className={cx("container")}>
                <div className={cx("footer-content")}>
                    <div className={cx("footer-item")}>
                        <h4 className={cx("footer-item-name")}>Company</h4>
                        <ul className={cx("footer-item-info")}>
                            <li>
                                <a className={cx("footer-item-info-link")}>
                                    About us
                                </a>
                            </li>
                            <li>
                                <a className={cx("footer-item-info-link")}>
                                    Terms of use
                                </a>
                            </li>
                            <li>
                                <a className={cx("footer-item-info-link")}>
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a className={cx("footer-item-info-link")}>
                                    Disclaimer
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={cx("footer-item")}>
                        <h4 className={cx("footer-item-name")}>Businesses</h4>
                        <ul className={cx("footer-item-info")}>
                            <li>
                                <a className={cx("footer-item-info-link")}>
                                    Prime
                                </a>
                            </li>
                            <li>
                                <a className={cx("footer-item-info-link")}>
                                    Custody
                                </a>
                            </li>
                            <li>
                                <a className={cx("footer-item-info-link")}>
                                    Asset Hub
                                </a>
                            </li>
                            <li>
                                <a className={cx("footer-item-info-link")}>
                                    Commerce
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={cx("footer-item")}>
                        <h4 className={cx("footer-item-name")}>Exchange</h4>
                        <ul className={cx("footer-item-info")}>
                            <li>
                                <a className={cx("footer-item-info-link")}>
                                    Exchange Home
                                </a>
                            </li>
                            <li>
                                <a className={cx("footer-item-info-link")}>
                                    Margin Trading
                                </a>
                            </li>
                            <li>
                                <a className={cx("footer-item-info-link")}>
                                    Derivatives Trading
                                </a>
                            </li>
                            <li>
                                <a className={cx("footer-item-info-link")}>
                                    Trading Arena
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={cx("footer-item")}>
                        <h4 className={cx("footer-item-name")}>Blockchain</h4>
                        <ul className={cx("footer-item-info")}>
                            <li>
                                <a className={cx("footer-item-info-link")}>
                                    Chain Explorer
                                </a>
                            </li>
                            <li>
                                <a className={cx("footer-item-info-link")}>
                                    The Syndicate
                                </a>
                            </li>
                            <li>
                                <a className={cx("footer-item-info-link")}>
                                    Sercurity
                                </a>
                            </li>
                            <li>
                                <a className={cx("footer-item-info-link")}>
                                    Cryptous Credit
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={cx("footer-item")}>
                        <h4 className={cx("footer-item-name")}>Resources</h4>
                        <ul className={cx("footer-item-info")}>
                            <li>
                                <a className={cx("footer-item-info-link")}>
                                    Prices
                                </a>
                            </li>
                            <li>
                                <a className={cx("footer-item-info-link")}>
                                    Site Widgets
                                </a>
                            </li>
                            <li>
                                <a className={cx("footer-item-info-link")}>
                                    Tax
                                </a>
                            </li>
                            <li>
                                <a className={cx("footer-item-info-link")}>
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a className={cx("footer-item-info-link")}>
                                    Research
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={cx("copyright-social")}>
                    <p className={cx("copy-right")}>Copyright 2021, Cryptous</p>
                    <ul className={cx("social-list")}>
                        <li className={cx("social-item")}>
                            <img
                                className={cx("social-icon")}
                                src={fb}
                                alt="social-icon"
                            />
                        </li>
                        <li className={cx("social-item")}>
                            <img
                                className={cx("social-icon")}
                                src={twitter}
                                alt="social-icon"
                            />
                        </li>
                        <li className={cx("social-item")}>
                            <img
                                className={cx("social-icon")}
                                src={linkedin}
                                alt="social-icon"
                            />
                        </li>
                        <li className={cx("social-item")}>
                            <img
                                className={cx("social-icon")}
                                src={insta}
                                alt="social-icon"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
