import classNames from "classnames/bind";
import styles from "./Contact.module.scss";

const cx = classNames.bind(styles);

const Contact = () => {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("container")}>
                <h2 className={cx("contact-title")}>Never miss a drop</h2>
                <p className={cx("contact-des")}>
                    Subscribe for the latest news, drops & collectibles
                </p>
                <div className={cx("input-container")}>
                    <input
                        className={cx("contact-input")}
                        type="text"
                        placeholder="Enter your email address"
                    />
                    <button className={cx("subscribe-btn", "btn")}>
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Contact;
