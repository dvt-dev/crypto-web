import classNames from "classnames/bind";
import styles from "./Download.module.scss";

import AppStore from "../../assets/images/AppStore.png";
import GooglePlay from "../../assets/images/GooglePlay.png";
import introApp from "../../assets/images/intro-app.png";

const cx = classNames.bind(styles);

const Download = () => {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("container")}>
                <div className={cx("content")}>
                    <h2 className={cx("download-title")}>
                        Try the future, today. <br /> Download Crypto
                    </h2>
                    <p className={cx("download-des")}>
                        Stay connected to the market with our mobile app.
                        Featuring advanced order types and analytical tools for
                        experienced traders, as well as a simple buy & sell
                        interface for those just getting started.
                    </p>
                    <div className={cx("app-store")}>
                        <img
                            className={cx("apple-store")}
                            src={AppStore}
                            alt="apple-store"
                        />
                        <img
                            className={cx("google-play")}
                            src={GooglePlay}
                            alt="google-play"
                        />
                    </div>
                </div>

                <div className={cx("intro")}>
                    <img className={cx("intro-img")} src={introApp} />
                </div>

                <div className={cx("app-store-2")}>
                    <img
                        className={cx("apple-store")}
                        src={AppStore}
                        alt="apple-store"
                    />
                    <img
                        className={cx("google-play")}
                        src={GooglePlay}
                        alt="google-play"
                    />
                </div>
            </div>
        </div>
    );
};

export default Download;
