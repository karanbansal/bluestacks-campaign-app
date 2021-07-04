import Modal from "@material-ui/core/Modal";
import React from "react";
import "./priceModal.css";

// Modal component that shows the pricing for selected game

function PriceModal({ show, content, close }) {
  return (
    <Modal open={show} onClose={() => close()}>
      <div className="modal">
        {Object.keys(content).length !== 0 && [
          <div className="campaign-cell" key={0}>
            <img
              alt="img"
              src={require("../assets/" + content.image_url).default}
            />
            <div className="campaign-cell-inner">
              <span className="text-color">{content.name}</span>
              <span className="sub-color">{content.region}</span>
            </div>
          </div>,
          <h3 key={1} className="text-color">
            Pricing
          </h3>,
          <div key={2} className="sub-color">
            <div className="price-label">
              <label>1 Week - 1 Month</label>
              <span>$ {content.price.toFixed(2)}</span>
            </div>
            <div className="price-label">
              <label>6 Months</label>
              <span>$ {(content.price * 6).toFixed(2)}</span>
            </div>
            <div className="price-label">
              <label>1 Year</label>
              <span>$ {(content.price * 12).toFixed(2)}</span>
            </div>
          </div>,
          <button className="close-button" key={3} onClick={() => close()}>
            Close
          </button>,
        ]}
      </div>
    </Modal>
  );
}

export default PriceModal;
