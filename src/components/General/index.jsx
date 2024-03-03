import styles from "./General.module.scss";
import classNames from "classnames/bind";

import frame from "../../assets/images/frame.png";
// import scrool from "../../assets/images/scrool.png";

const cx = classNames.bind(styles);

function General() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("general-container")}>
                <div className={cx("general-content")}>
                    <h2 className={cx("general-text")}>
                        Make better businees
                        <br /> with Cryptocurrency
                    </h2>
                    <p className={cx("general-sub-text")}>
                        We offers users a fully operational long-term rental
                        platform.
                        <br />
                        It plans to leverages blockchain technology.
                    </p>
                    <button className={cx("general-btn", "btn")}>
                        Get Whitelisted
                    </button>
                </div>
                <div className={cx("frame")}>
                    <img src={frame} alt="frame" className={cx("frame-img")} />
                </div>
                {/* <div className={cx("scrool")}>
                    <img
                        src={scrool}
                        alt="Scrool"
                        className={cx("scrool-btn")}
                    ></img>
                </div> */}
            </div>
        </div>
    );
}

export default General;
