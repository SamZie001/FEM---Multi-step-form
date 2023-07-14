import React from "react";
import BInterface from "../../interface/BInterface";
import styles from "./Pages.module.css";
import NavBtn from "../NavigationBtns/NavBtn";

export interface SProps extends BInterface {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  phone: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  reqErr: {
    name: string;
    email: string;
    phone: string;
  };
}

const Page1 = ({
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  currentPhase,
  setCurrentPhase,
  reqErr,
}: SProps) => {
  return (
    <div className={styles["page-container"]}>
      <div className={styles["page-container__float"]}>
        <header className={styles["page-header"]}>
          <h1 className="w-700 lg-t">Personal info</h1>
          <p className="plain-text">
            Please provide your name, email address, and phone number
          </p>
        </header>

        <div
          className={`${styles["page-content"]} ${
            styles["page-" + currentPhase]
          } `}
          id={currentPhase.toString()}
        >
          <label className={reqErr.name ? styles.error : ""}>
            <p>
              <span>Name</span>
              <span>{reqErr.name}</span>
            </p>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Stephen King"
            />
          </label>
          <label className={reqErr.email ? styles.error : ""}>
            <p>
              <span>Email Address</span>
              <span>{reqErr.email}</span>
            </p>
            <input
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. stephenking@lorem.com"
            />
          </label>
          <label className={reqErr.phone ? styles.error : ""}>
            <p>
              <span>Phone Number</span>
              <span>{reqErr.phone}</span>
            </p>
            <input
              id="phone"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. +1 234 567 890"
            />
          </label>
        </div>
      </div>
      <NavBtn
        currentPhase={currentPhase}
        setCurrentPhase={setCurrentPhase}
        reference={currentPhase.toString()}
      />
    </div>
  );
};

export default Page1;
