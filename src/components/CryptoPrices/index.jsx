import styles from "./CryptoPrices.module.scss";
import classNames from "classnames/bind";
// Icons
import sortUp from "../../assets/icons/sort-up.png";
import star from "../../assets/icons/star.png";
import upIcon from "../../assets/icons/up-green.png";
import downIcon from "../../assets/icons/down-red.png";

import bitcoin from "../../assets/images/coins/bitcoin.png";
import ethereum from "../../assets/images/coins/ethereum.png";
import cardano from "../../assets/images/coins/cardano.png";
import tether from "../../assets/images/coins/tether.png";
import avalanche from "../../assets/images/coins/avalanche.png";
import algorand from "../../assets/images/coins/algorand.png";

import chartUp from "../../assets/images/chart-up.png";
import chartDown from "../../assets/images/chart-down.png";

const cx = classNames.bind(styles);

const CryptoPrices = () => {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("container")}>
                <h2 className={cx("crypto-prices__title")}>
                    Today{`'`}s Cryptocurrency Prices
                </h2>
                <table className={cx("table-prices")}>
                    <thead className={cx("table-head")}>
                        <tr className={cx("table-title")}>
                            <th className={cx("table-heading")}>
                                #
                                <img
                                    className={cx("sort-up-icon")}
                                    src={sortUp}
                                />
                            </th>
                            <th className={cx("table-heading")}>Name</th>
                            <th className={cx("table-heading")}>Price</th>
                            <th className={cx("table-heading")}>24h %</th>
                            <th className={cx("table-heading")}>7d %</th>
                            <th className={cx("table-heading")}>Market Cap</th>
                            <th className={cx("table-heading")}>Volume(24h)</th>
                            <th className={cx("table-heading")}>Last 7 Days</th>
                        </tr>
                    </thead>
                    <tbody className={cx("table-body")}>
                        <tr className={cx("table-row")}>
                            <td className={cx("table-data", "rank")}>
                                <img
                                    className={cx("start-icon")}
                                    src={star}
                                    alt="star-icon"
                                />
                                <span className={cx("rank-number")}>1</span>
                            </td>
                            <td className={cx("table-data")}>
                                <div className={cx("name-wrapper")}>
                                    <img
                                        className={cx("coin-img")}
                                        src={bitcoin}
                                        alt="bitcoin"
                                    />
                                    <p className={cx("coin-name")}>
                                        Bitcoin
                                        <span className={cx("name-acronym")}>
                                            BTC
                                        </span>
                                    </p>
                                </div>
                            </td>
                            <td className={cx("table-data", "last-price")}>
                                $55,206.61
                            </td>
                            <td
                                className={cx("table-data", "last-update-date")}
                            >
                                <img
                                    className={cx("up-icon")}
                                    src={upIcon}
                                    alt="up-icon"
                                />
                                <span
                                    className={cx(
                                        "last-update-date-percent",
                                        "green"
                                    )}
                                >
                                    0.92%
                                </span>
                            </td>
                            <td
                                className={cx("table-data", "last-update-week")}
                            >
                                <img
                                    className={cx("down-icon")}
                                    src={upIcon}
                                    alt="down-icon"
                                />
                                <span
                                    className={cx(
                                        "last-update-week-percent",
                                        "green"
                                    )}
                                >
                                    15.86%
                                </span>
                            </td>
                            <td className={cx("table-data", "market-cap")}>
                                $1,046,899,935,348
                            </td>
                            <td className={cx("table-data", "volume")}>
                                <div className={cx("volume-date")}>
                                    <p className={cx("volume-date-USD")}>
                                        $1,046,899,935,348
                                    </p>
                                    <span className={cx("volume-date-BTC")}>
                                        653,452 BTC
                                    </span>
                                </div>
                            </td>
                            <td className={cx("table-data", "char")}>
                                <img
                                    className={cx("char-image")}
                                    src={chartUp}
                                    alt="chart"
                                />
                            </td>
                        </tr>
                        <tr className={cx("table-row")}>
                            <td className={cx("table-data", "rank")}>
                                <img
                                    className={cx("start-icon")}
                                    src={star}
                                    alt="star-icon"
                                />
                                <span className={cx("rank-number")}>2</span>
                            </td>
                            <td className={cx("table-data")}>
                                <div className={cx("name-wrapper")}>
                                    <img
                                        className={cx("coin-img")}
                                        src={ethereum}
                                        alt="ethereum"
                                    />
                                    <p className={cx("coin-name")}>
                                        Ethereum
                                        <span className={cx("name-acronym")}>
                                            ETH
                                        </span>
                                    </p>
                                </div>
                            </td>
                            <td className={cx("table-data", "last-price")}>
                                $55,206.61
                            </td>
                            <td
                                className={cx("table-data", "last-update-date")}
                            >
                                <img
                                    className={cx("up-icon")}
                                    src={downIcon}
                                    alt="down-icon"
                                />
                                <span
                                    className={cx(
                                        "last-update-date-percent",
                                        "red"
                                    )}
                                >
                                    0.92%
                                </span>
                            </td>
                            <td
                                className={cx("table-data", "last-update-week")}
                            >
                                <img
                                    className={cx("down-icon")}
                                    src={upIcon}
                                    alt="up-icon"
                                />
                                <span
                                    className={cx(
                                        "last-update-week-percent",
                                        "green"
                                    )}
                                >
                                    15.86%
                                </span>
                            </td>
                            <td className={cx("table-data", "market-cap")}>
                                $1,046,899,935,348
                            </td>
                            <td className={cx("table-data", "volume")}>
                                <div className={cx("volume-date")}>
                                    <p className={cx("volume-date-USD")}>
                                        $1,046,899,935,348
                                    </p>
                                    <span className={cx("volume-date-BTC")}>
                                        653,452 BTC
                                    </span>
                                </div>
                            </td>
                            <td className={cx("table-data", "char")}>
                                <img
                                    className={cx("char-image")}
                                    src={chartUp}
                                    alt="chart"
                                />
                            </td>
                        </tr>
                        <tr className={cx("table-row")}>
                            <td className={cx("table-data", "rank")}>
                                <img
                                    className={cx("start-icon")}
                                    src={star}
                                    alt="star-icon"
                                />
                                <span className={cx("rank-number")}>3</span>
                            </td>
                            <td className={cx("table-data")}>
                                <div className={cx("name-wrapper")}>
                                    <img
                                        className={cx("coin-img")}
                                        src={cardano}
                                        alt="cardano"
                                    />
                                    <p className={cx("coin-name")}>
                                        Cardano
                                        <span className={cx("name-acronym")}>
                                            ADA
                                        </span>
                                    </p>
                                </div>
                            </td>
                            <td className={cx("table-data", "last-price")}>
                                $55,206.61
                            </td>
                            <td
                                className={cx("table-data", "last-update-date")}
                            >
                                <img
                                    className={cx("up-icon")}
                                    src={downIcon}
                                    alt="down-icon"
                                />
                                <span
                                    className={cx(
                                        "last-update-date-percent",
                                        "red"
                                    )}
                                >
                                    0.92%
                                </span>
                            </td>
                            <td
                                className={cx("table-data", "last-update-week")}
                            >
                                <img
                                    className={cx("down-icon")}
                                    src={downIcon}
                                    alt="down-icon"
                                />
                                <span
                                    className={cx(
                                        "last-update-week-percent",
                                        "red"
                                    )}
                                >
                                    15.86%
                                </span>
                            </td>
                            <td className={cx("table-data", "market-cap")}>
                                $1,046,899,935,348
                            </td>
                            <td className={cx("table-data", "volume")}>
                                <div className={cx("volume-date")}>
                                    <p className={cx("volume-date-USD")}>
                                        $1,046,899,935,348
                                    </p>
                                    <span className={cx("volume-date-BTC")}>
                                        653,452 BTC
                                    </span>
                                </div>
                            </td>
                            <td className={cx("table-data", "char")}>
                                <img
                                    className={cx("char-image")}
                                    src={chartDown}
                                    alt="chart"
                                />
                            </td>
                        </tr>
                        <tr className={cx("table-row")}>
                            <td className={cx("table-data", "rank")}>
                                <img
                                    className={cx("start-icon")}
                                    src={star}
                                    alt="star-icon"
                                />
                                <span className={cx("rank-number")}>4</span>
                            </td>
                            <td className={cx("table-data")}>
                                <div className={cx("name-wrapper")}>
                                    <img
                                        className={cx("coin-img")}
                                        src={tether}
                                        alt="tether"
                                    />
                                    <p className={cx("coin-name")}>
                                        Tether
                                        <span className={cx("name-acronym")}>
                                            USDT
                                        </span>
                                    </p>
                                </div>
                            </td>
                            <td className={cx("table-data", "last-price")}>
                                $55,206.61
                            </td>
                            <td
                                className={cx("table-data", "last-update-date")}
                            >
                                <img
                                    className={cx("up-icon")}
                                    src={upIcon}
                                    alt="up-icon"
                                />
                                <span
                                    className={cx(
                                        "last-update-date-percent",
                                        "green"
                                    )}
                                >
                                    0.92%
                                </span>
                            </td>
                            <td
                                className={cx("table-data", "last-update-week")}
                            >
                                <img
                                    className={cx("down-icon")}
                                    src={upIcon}
                                    alt="up-icon"
                                />
                                <span
                                    className={cx(
                                        "last-update-week-percent",
                                        "green"
                                    )}
                                >
                                    15.86%
                                </span>
                            </td>
                            <td className={cx("table-data", "market-cap")}>
                                $1,046,899,935,348
                            </td>
                            <td className={cx("table-data", "volume")}>
                                <div className={cx("volume-date")}>
                                    <p className={cx("volume-date-USD")}>
                                        $1,046,899,935,348
                                    </p>
                                    <span className={cx("volume-date-BTC")}>
                                        653,452 BTC
                                    </span>
                                </div>
                            </td>
                            <td className={cx("table-data", "char")}>
                                <img
                                    className={cx("char-image")}
                                    src={chartUp}
                                    alt="chart"
                                />
                            </td>
                        </tr>
                        <tr className={cx("table-row")}>
                            <td className={cx("table-data", "rank")}>
                                <img
                                    className={cx("start-icon")}
                                    src={star}
                                    alt="star-icon"
                                />
                                <span className={cx("rank-number")}>5</span>
                            </td>
                            <td className={cx("table-data")}>
                                <div className={cx("name-wrapper")}>
                                    <img
                                        className={cx("coin-img")}
                                        src={avalanche}
                                        alt="avalanche"
                                    />
                                    <p className={cx("coin-name")}>
                                        Avalanche
                                        <span className={cx("name-acronym")}>
                                            AVAX
                                        </span>
                                    </p>
                                </div>
                            </td>
                            <td className={cx("table-data", "last-price")}>
                                $55,206.61
                            </td>
                            <td
                                className={cx("table-data", "last-update-date")}
                            >
                                <img
                                    className={cx("up-icon")}
                                    src={downIcon}
                                    alt="down-icon"
                                />
                                <span
                                    className={cx(
                                        "last-update-date-percent",
                                        "red"
                                    )}
                                >
                                    0.92%
                                </span>
                            </td>
                            <td
                                className={cx("table-data", "last-update-week")}
                            >
                                <img
                                    className={cx("down-icon")}
                                    src={downIcon}
                                    alt="down-icon"
                                />
                                <span
                                    className={cx(
                                        "last-update-week-percent",
                                        "red"
                                    )}
                                >
                                    15.86%
                                </span>
                            </td>
                            <td className={cx("table-data", "market-cap")}>
                                $1,046,899,935,348
                            </td>
                            <td className={cx("table-data", "volume")}>
                                <div className={cx("volume-date")}>
                                    <p className={cx("volume-date-USD")}>
                                        $1,046,899,935,348
                                    </p>
                                    <span className={cx("volume-date-BTC")}>
                                        653,452 BTC
                                    </span>
                                </div>
                            </td>
                            <td className={cx("table-data", "char")}>
                                <img
                                    className={cx("char-image")}
                                    src={chartDown}
                                    alt="chart"
                                />
                            </td>
                        </tr>
                        <tr className={cx("table-row")}>
                            <td className={cx("table-data", "rank")}>
                                <img
                                    className={cx("start-icon")}
                                    src={star}
                                    alt="star-icon"
                                />
                                <span className={cx("rank-number")}>6</span>
                            </td>
                            <td className={cx("table-data")}>
                                <div className={cx("name-wrapper")}>
                                    <img
                                        className={cx("coin-img")}
                                        src={algorand}
                                        alt="algorand"
                                    />
                                    <p className={cx("coin-name")}>
                                        Algorand
                                        <span className={cx("name-acronym")}>
                                            ALGO
                                        </span>
                                    </p>
                                </div>
                            </td>
                            <td className={cx("table-data", "last-price")}>
                                $55,206.61
                            </td>
                            <td
                                className={cx("table-data", "last-update-date")}
                            >
                                <img
                                    className={cx("up-icon")}
                                    src={upIcon}
                                    alt="up-icon"
                                />
                                <span
                                    className={cx(
                                        "last-update-date-percent",
                                        "green"
                                    )}
                                >
                                    0.92%
                                </span>
                            </td>
                            <td
                                className={cx("table-data", "last-update-week")}
                            >
                                <img
                                    className={cx("down-icon")}
                                    src={upIcon}
                                    alt="up-icon"
                                />
                                <span
                                    className={cx(
                                        "last-update-week-percent",
                                        "green"
                                    )}
                                >
                                    15.86%
                                </span>
                            </td>
                            <td className={cx("table-data", "market-cap")}>
                                $1,046,899,935,348
                            </td>
                            <td className={cx("table-data", "volume")}>
                                <div className={cx("volume-date")}>
                                    <p className={cx("volume-date-USD")}>
                                        $1,046,899,935,348
                                    </p>
                                    <span className={cx("volume-date-BTC")}>
                                        653,452 BTC
                                    </span>
                                </div>
                            </td>
                            <td className={cx("table-data", "char")}>
                                <img
                                    className={cx("char-image")}
                                    src={chartUp}
                                    alt="chart"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CryptoPrices;
