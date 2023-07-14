import React from "react";
import styles from "./NavBtns.module.css";
import BInterface from "../../interface/BInterface";

const NavBtn = ({ currentPhase, setCurrentPhase, reference }: BInterface) => {
  return (
    <div className={styles["page-buttons"]}>
      {currentPhase !== 1 && (
        <button
          onClick={() => setCurrentPhase((prev) => prev - 1)}
          className={styles.previous}
        >
          Go Back
        </button>
      )}
      {currentPhase !== 4 && (
        <button
          onClick={() => {
            // checkFields(reference)
            setCurrentPhase((prev) => prev + 1);
          }}
          className={styles.next}
        >
          Next Step
        </button>
      )}
      {currentPhase === 4 && (
        <button type="submit" className={styles.confirm}>
          Confirm
        </button>
      )}
    </div>
  );
};

export default NavBtn;
