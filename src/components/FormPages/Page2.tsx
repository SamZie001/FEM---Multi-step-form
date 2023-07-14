import React from "react";
import BInterface from "../../interface/BInterface";
import { planInterface } from "../../App";
import styles from "./Pages.module.css";
import NavBtn from "../NavigationBtns/NavBtn";
import CustomizedSwitches from "../CustomizedSwitches";

export interface SProps extends BInterface {
  plans: planInterface[];
  setPlans: React.Dispatch<React.SetStateAction<planInterface[]>>;
  yearlyBilling: boolean;
  setYearlyBilling: React.Dispatch<React.SetStateAction<boolean>>;
}

const Page2 = ({
  plans,
  setPlans,
  yearlyBilling,
  setYearlyBilling,
  currentPhase,
  setCurrentPhase,
}: SProps) => {
  const handleSelectPlan = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const targetId = e.currentTarget.id;

    const updatedPlans = plans.map((plan, index) => {
      if (`plan${index + 1}` === targetId) {
        return {
          ...plan,
          selected: true,
        };
      } else {
        return {
          ...plan,
          selected: false,
        };
      }
    });

    // Update the state with the new array
    setPlans(updatedPlans);
  };
  return (
    <div className={styles["page-container"]}>
      <div className={styles["page-container__float"]}>
        <header className={styles["page-header"]}>
          <h1 className="w-700 lg-t">Select your plan</h1>
          <p className="plain-text">
            You have the option of monthly or yearly billing
          </p>
        </header>

        <div
          className={`${styles["page-content"]} ${
            styles["page-" + currentPhase]
          } `}
          id={currentPhase.toString()}
        >
          <div className={styles["page-2__plans"]}>
            {plans.map((plan, index) => (
              <div
                id={`plan${index + 1}`}
                key={index}
                className={`${styles["page-2__plan"]} ${
                  plan.selected ? styles.selected : null
                }`}
                onClick={handleSelectPlan}
              >
                <img src={plan.icon} alt="" />

                <div>
                  <p className="w-700">{plan.plan}</p>
                  <p className="plain-text">
                    ${plan.price}
                    {yearlyBilling ? "0/yr" : "/mo"}
                  </p>
                  {yearlyBilling && (
                    <p className="w-500 sm-t">{plan.billingFeature}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className={styles["page-2__billing-switch"]}>
            <p>Monthly</p>
            <CustomizedSwitches
              check={yearlyBilling}
              setCheck={setYearlyBilling}
            />
            <p>Yearly</p>
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

export default Page2;
