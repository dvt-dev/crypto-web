import styles from "./CryptoPlatform.module.scss";
import classNames from "classnames/bind";

import platform1 from "../../assets/images/platform-1.png";
import platform2 from "../../assets/images/platform-2.png";
import platform3 from "../../assets/images/platform-3.png";

const cx = classNames.bind(styles);

const CryptoPlatform = () => {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("container")}>
                <h2 className={cx("title")}>
                    The most trusted cryptocurrency platform
                </h2>
                <div className={cx("crypto-platform-reasons")}>
                    <div className={cx("reason-item")}>
                        <div className={cx("reason-image")}>
                            <img className={cx("reason-img")} src={platform1} />
                        </div>
                        <div className={cx("reason-content")}>
                            <h2 className={cx("reason-name")}>
                                Ease of Trading
                            </h2>
                            <ul className={cx("reason-content-list")}>
                                <li className={cx("reason-content-item")}>
                                    Intuitive interface
                                </li>
                                <li className={cx("reason-content-item")}>
                                    Instant deposit options
                                </li>
                                <li className={cx("reason-content-item")}>
                                    Cash out directly to your bank account
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx("reason-item")}>
                        <div className={cx("reason-image")}>
                            <img className={cx("reason-img")} src={platform2} />
                            <div className={cx("reason-content")}>
                                <h2 className={cx("reason-name")}>
                                    Institutional-grade Security
                                </h2>
                                <ul className={cx("reason-content-list")}>
                                    <li className={cx("reason-content-item")}>
                                        98% of assets stored safely offline
                                    </li>
                                    <li className={cx("reason-content-item")}>
                                        Highly encrypted personal data
                                    </li>
                                    <li className={cx("reason-content-item")}>
                                        Whitelisting and transaction
                                        confirmations
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={cx("reason-item")}>
                        <div className={cx("reason-image")}>
                            <img className={cx("reason-img")} src={platform3} />
                            <div className={cx("reason-content")}>
                                <h2 className={cx("reason-name")}>
                                    Proven Reliability
                                </h2>
                                <ul className={cx("reason-content-list")}>
                                    <li className={cx("reason-content-item")}>
                                        Exchanging bitcoin since 2011
                                    </li>
                                    <li className={cx("reason-content-item")}>
                                        Industry-leading uptime
                                    </li>
                                    <li className={cx("reason-content-item")}>
                                        24/7 dedicated support
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CryptoPlatform;
