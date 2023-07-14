import React from "react";
import BInterface from "../../interface/BInterface";
import { planInterface, adInterface } from "../../App";
import styles from "./Pages.module.css";
import NavBtn from "../NavigationBtns/NavBtn";

export interface finishInterface extends BInterface {
  yearly: boolean;
  adOns: adInterface[];
  plans: planInterface[];
}

const Page4 = ({
  yearly,
  adOns,
  plans,
  currentPhase,
  setCurrentPhase,
}: finishInterface) => {
  const getPlans = () => {
    return plans.filter((plan) => plan.selected);
  };
  const getAdOns = () => {
    return adOns.filter((ad) => ad.checked);
  };
  const getTotalPrice = (): number => {
    let sum = 0;
    let plan = getPlans();
    let adOns = getAdOns();

    if (plan.length && adOns.length) {
      adOns.forEach((ad) => {
        sum += parseInt(ad.price);
      });
      let pPrice = parseInt(plan[0]["price"]);

      sum += pPrice;
    }

    return yearly ? sum * 10 : sum;
  };

  return (
    <div className={styles["page-container"]}>
      <div className={styles["page-container__float"]}>
        <header className={styles["page-header"]}>
          <h1 className="w-700 lg-t">Finishing up</h1>
          <p className="plain-text">
            Double-check everything looks OK before confirming.
          </p>
        </header>

        <div
          className={`${styles["page-content"]} ${
            styles["page-" + currentPhase]
          } `}
          id={currentPhase.toString()}
        >
          <div className={styles["page-4__summary"]}>
            {getPlans().map((plan, ind) => (
              <div key={ind} className={styles["page-4__plan"]}>
                <div className={styles["page-4__plan__desc"]}>
                  <p className="w-700">
                    {plan.plan} ({yearly ? "Yearly" : "Monthly"})
                  </p>
                  <p
                    onClick={() => setCurrentPhase(2)}
                    className={styles["change-opt"]}
                  >
                    Change
                  </p>
                </div>
                <p className="w-700">
                  ${yearly ? 10 * parseInt(plan.price) : plan.price}
                  {yearly ? "/yr" : "/mo"}
                </p>
              </div>
            ))}
            <hr />
            {getAdOns().map((adOn, ind) => (
              <div key={ind} className={styles["page-4__adOn"]}>
                <span>{adOn.adName}</span>
                <p>
                  +$
                  {yearly ? 10 * parseInt(adOn.price) : adOn.price}
                  {yearly ? "/yr" : "/mo"}
                </p>
              </div>
            ))}
          </div>
          <div className={styles["page-4__total"]}>
            <span>Total (per {yearly ? "Year" : "Month"})</span>
            <p className="w-700 md-t">
              +${getTotalPrice()} {yearly ? "/yr" : "/mo"}
            </p>
          </div>
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

export default Page4;
