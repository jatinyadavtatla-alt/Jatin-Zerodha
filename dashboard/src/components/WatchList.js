import React, { useState } from "react";
import DoughnutChart from "./DoughnoutChart";
import BuyActionWindow from "./BuyActionWindow";
import { Tooltip, Grow } from "@mui/material";
import {
  BarChartOutlined,
  MoreHoriz,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@mui/icons-material";
import { WatchList } from "../data/data";

const Watchlist = () => {
  const [modalConfig, setModalConfig] = useState(null); // { stock, mode } or null

  const openModal = (stock, mode) => {
    setModalConfig({ stock, mode });
  };

  const closeModal = () => {
    setModalConfig(null);
  };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {WatchList.length}/50 </span>
      </div>

      <ul className="list">
        {WatchList.map((stock, index) => (
          <WatchListItem stock={stock} key={index} onOpenModal={openModal} />
        ))}
      </ul>

      {modalConfig && (
        <BuyActionWindow
          stock={modalConfig.stock}
          mode={modalConfig.mode}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Watchlist;

const WatchListItem = ({ stock, onOpenModal }) => {
  const [showWatchlistAction, setWatchlistAction] = useState(false);

  const handleMouseEnter = () => setWatchlistAction(true);
  const handleMouseExit = () => setWatchlistAction(false);

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchlistAction && (
        <WatchlistAction stock={stock} onOpenModal={onOpenModal} />
      )}
    </li>
  );
};

const WatchlistAction = ({ stock, onOpenModal }) => {
  return (
    <span className="actions" style={{ gap: "10px" }}>
      <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
        <button className="buy" onClick={() => onOpenModal(stock, "BUY")}>
          Buy
        </button>
      </Tooltip>
      <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
        <button className="sell" onClick={() => onOpenModal(stock, "SELL")}>
          Sell
        </button>
      </Tooltip>
      <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
        <button>
          <BarChartOutlined className="icons" />
        </button>
      </Tooltip>
      <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
        <button>
          <MoreHoriz className="icons" />
        </button>
      </Tooltip>
    </span>
  );
};