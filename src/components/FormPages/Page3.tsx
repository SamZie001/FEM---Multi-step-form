import React from "react";
import BInterface from "../../interface/BInterface";
import { adInterface } from "../../App";
import styles from "./Pages.module.css";
import NavBtn from "../NavigationBtns/NavBtn";
import { Checkbox } from "@mui/material";

export interface SProps extends BInterface {
  adOns: adInterface[];
  yearly: boolean;
  setAdOns: React.Dispatch<React.SetStateAction<adInterface[]>>;
}

const Page3 = ({
  adOns,
  setAdOns,
  currentPhase,
  setCurrentPhase,
  yearly,
}: SProps) => {
  const handleCheck = (
    // e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    adIndex: number
  ) => {
    const updatedAdOns = adOns.map((ad, index) => {
      if (index === adIndex) {
        return {
          ...ad,
          checked: !ad.checked, // Toggle the checked property
        };
      }
      return ad;
    });

    setAdOns(updatedAdOns);
  };

  return (
    <div className={styles["page-container"]}>
      <div className={styles["page-container__float"]}>
        <header className={styles["page-header"]}>
          <h1 className="w-700 lg-t">Pick add-ons</h1>
          <p className="plain-text">
            Add-ons help enhance your gaming experience
          </p>
        </header>

        <div
          className={`${styles["page-content"]} ${
            styles["page-" + currentPhase]
          } `}
          id={currentPhase.toString()}
        >
          {adOns.map((ad, ind) => (
            <div
              key={ind}
              className={`${styles["page-3__ad-on"]} ${
                ad.checked ? styles.selected : null
              }`}
              onClick={(e) => handleCheck(e, ind)}
            >
              <div className={styles["page-3__check-div"]}>
                <Checkbox
                  sx={{
                    "&.Mui-checked": {
                      color: "hsl(242, 94%, 61%)",
                    },
                  }}
                  checked={ad.checked}
                />
                <div className={styles["page-3__ad-on__desc"]}>
                  <p className="w-700">{ad.adName}</p>
                  <p className="sm-t plain-text">{ad.desc}</p>
                </div>
              </div>

              <p className={styles["page-3__ad-on__price"]}>
                +${ad.price}
                {yearly ? "0/yr" : "/mo"}
              </p>
            </div>
          ))}
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

export default Page3;
