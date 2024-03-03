import classNames from "classnames/bind";
import styles from "./Blog.module.scss";

import blog1 from "../../assets/images/blog-1.png";
import blog2 from "../../assets/images/blog-2.png";
import blog3 from "../../assets/images/blog-3.png";

import dateIcon from "../../assets/icons/date.png";
import timeIcon from "../../assets/icons/time.png";

const cx = classNames.bind(styles);

const Blog = () => {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("container")}>
                <h2 className={cx("blog-title")}>Learn to thrive</h2>
                <div className={cx("blogs-list")}>
                    <div className={cx("blog-item")}>
                        <img
                            className={cx("blog-img")}
                            src={blog1}
                            alt="blog-image"
                        />
                        <div className={cx("blog-content")}>
                            <h3 className={cx("blog-name")}>
                                New Leveraged Pairs Added to Margin Trading on
                                the Crypto.com Exchange
                            </h3>
                            <p className={cx("blog-des")}>
                                We urge everyone adopt good cybersecurity
                                habits, and to have unique passwords on every
                                site they use...
                            </p>
                            <div className={cx("blog-info")}>
                                <span className={cx("author")}>
                                    By: Jennia Peris
                                </span>
                                <span className={cx("date")}>
                                    <img
                                        className={cx("date-icon")}
                                        src={dateIcon}
                                    />
                                    15/07/2021
                                </span>
                                <span className={cx("time")}>
                                    <img
                                        className={cx("time-icon")}
                                        src={timeIcon}
                                    />
                                    5 Min to read
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={cx("blog-item")}>
                        <img
                            className={cx("blog-img")}
                            src={blog2}
                            alt="blog-image"
                        />
                        <div className={cx("blog-content")}>
                            <h3 className={cx("blog-name")}>
                                New Leveraged Pairs Added to Margin Trading on
                                the Crypto.com Exchange
                            </h3>
                            <p className={cx("blog-des")}>
                                We urge everyone adopt good cybersecurity
                                habits, and to have unique passwords on every
                                site they use...
                            </p>
                            <div className={cx("blog-info")}>
                                <span className={cx("author")}>
                                    By: Jennia Peris
                                </span>
                                <span className={cx("date")}>
                                    <img
                                        className={cx("date-icon")}
                                        src={dateIcon}
                                    />
                                    15/07/2021
                                </span>
                                <span className={cx("time")}>
                                    <img
                                        className={cx("time-icon")}
                                        src={timeIcon}
                                    />
                                    5 Min to read
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={cx("blog-item")}>
                        <img
                            className={cx("blog-img")}
                            src={blog3}
                            alt="blog-image"
                        />
                        <div className={cx("blog-content")}>
                            <h3 className={cx("blog-name")}>
                                New Leveraged Pairs Added to Margin Trading on
                                the Crypto.com Exchange
                            </h3>
                            <p className={cx("blog-des")}>
                                We urge everyone adopt good cybersecurity
                                habits, and to have unique passwords on every
                                site they use...
                            </p>
                            <div className={cx("blog-info")}>
                                <span className={cx("author")}>
                                    By: Jennia Peris
                                </span>
                                <span className={cx("date")}>
                                    <img
                                        className={cx("date-icon")}
                                        src={dateIcon}
                                    />
                                    15/07/2021
                                </span>
                                <span className={cx("time")}>
                                    <img
                                        className={cx("time-icon")}
                                        src={timeIcon}
                                    />
                                    5 Min to read
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
