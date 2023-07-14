import React from "react";
import styles from "./Pages.module.css";

const Thanks = () => {
  return (
    <div className={styles["page-container"]}>
      <div className={styles["page-container__float"]}>
        <div className={styles["thank-you-container"]}>
          <img src="/images/icon-thank-you.svg" alt="" />
          <h1 className="w-700 lg-t">Thank you!</h1>
          <p className="plain-text  sm-t">
            Thanks for confirming your upcoming subscription! We hope you have
            fun using our platform. If you ever need support, please feel free
            to email us at support@loremgaming.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
