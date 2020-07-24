import React from "react";
import heartbeatIcon from "../../assets/heartbeat.svg";
import bluetoothIcon from "../../assets/bluetooth.svg";
import batteryIcon from "../../assets/battery-status.svg";
import "./style.css";

const Footer = () => {
  return (
    <footer className="Footer">
      <section className="funcionalities">
        <img src={heartbeatIcon} alt="Heartbeat Icon" />
        <p>High-Resolution Audio comatible</p>
      </section>
      <section className="funcionalities">
        <img src={bluetoothIcon} alt="Bluetooth Icon" />
        <p>Wireless connectivy using bluetooth</p>
      </section>
      <section className="funcionalities">
        <img src={batteryIcon} alt="Battery Icon" />
        <p>A powerful battery that lists up to 4 hours of use</p>
      </section>
    </footer>
  );
};

export default Footer;
