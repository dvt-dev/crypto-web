import styles from "./CryptoPrices.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const CryptoPrices = () => {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("container")}>
                <h2 className={cx("crypto-prices__title")}>
                    Today{`'`}s Cryptocurrency Prices
                </h2>
            </div>
        </div>
    );
};

export default CryptoPrices;
