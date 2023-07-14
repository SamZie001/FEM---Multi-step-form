import React, { useState, FormEvent } from "react";
import Page1 from "./components/FormPages/Page1";
import Page2 from "./components/FormPages/Page2";
import Page3 from "./components/FormPages/Page3";
import Page4 from "./components/FormPages/Page4";
import Thanks from "./components/FormPages/Thanks";

export interface stepInterface {
  tag: number;
  desc: string;
}
export interface planInterface {
  icon: string;
  plan: string;
  price: string;
  selected: boolean;
  billingFeature: string;
}
export interface adInterface {
  adName: string;
  price: string;
  checked: boolean;
  desc: string;
}

function App() {
  const phases: stepInterface[] = [
    { tag: 1, desc: "your info" },
    { tag: 2, desc: "select plan" },
    { tag: 3, desc: "add-ons" },
    { tag: 4, desc: "summary" },
  ];
  const [currentPhase, setCurrentPhase] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [plans, setPlans] = useState<planInterface[]>([
    {
      icon: "/images/icon-arcade.svg",
      plan: "Arcade",
      price: "9",
      selected: false,
      billingFeature: "2 months free",
    },
    {
      icon: "/images/icon-advanced.svg",
      plan: "Advanced",
      price: "12",
      selected: false,
      billingFeature: "2 months free",
    },
    {
      icon: "/images/icon-pro.svg",
      plan: "Pro",
      price: "15",
      selected: false,
      billingFeature: "2 months free",
    },
  ]);
  const [yearlyBilling, setYearlyBilling] = useState(false);
  const [adOns, setAdOns] = useState<adInterface[]>([
    {
      checked: false,
      adName: "Online service",
      price: "1",
      desc: "Access to multiplayer games",
    },
    {
      checked: false,
      adName: "Larger storage",
      price: "2",
      desc: "Extra 1TB of cloud save",
    },
    {
      checked: false,
      adName: "Customizable profile",
      price: "2",
      desc: "Custom theme on your profile",
    },
  ]);
  const [reqErr, setReqErr] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email && !email.toLowerCase().match(regex)) {
      setReqErr((prev) => ({ ...prev, email: "This is not a valid email" }));
      return setCurrentPhase(1);
    }
    if (!name || !email || !phone) {
      setCurrentPhase(1);
      if (!name) {
        setReqErr((prev) => ({ ...prev, name: "This field is required" }));
      }
      if (!email) {
        setReqErr((prev) => ({ ...prev, email: "This field is required" }));
      }
      if (!phone) {
        setReqErr((prev) => ({ ...prev, phone: "This field is required" }));
      }
      return;
    }

    return setCurrentPhase(5);
  };
  return (
    <main>
      <form className="App" onSubmit={handleSubmit}>
        <div className="phase-list pt-sm">
          <div className="phase-list__container">
            {phases.map((phase) => (
              <div
                key={phase.tag}
                onClick={() => setCurrentPhase(phase.tag)}
                className="phase-list__item"
              >
                <p
                  className={`phase-list__item__manual | w-500 ${
                    currentPhase === phase.tag ? "active" : null
                  }`}
                >
                  {phase.tag}
                </p>
                <div className="phase-list__item__div">
                  <p className="sm-t">STEP {phase.tag}</p>
                  <p className="w-500">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {currentPhase === 1 && (
          <Page1
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
            currentPhase={currentPhase}
            setCurrentPhase={setCurrentPhase}
            reqErr={reqErr}
          />
        )}
        {currentPhase === 2 && (
          <Page2
            plans={plans}
            setPlans={setPlans}
            yearlyBilling={yearlyBilling}
            setYearlyBilling={setYearlyBilling}
            currentPhase={currentPhase}
            setCurrentPhase={setCurrentPhase}
          />
        )}
        {currentPhase === 3 && (
          <Page3
            adOns={adOns}
            setAdOns={setAdOns}
            currentPhase={currentPhase}
            setCurrentPhase={setCurrentPhase}
            yearly={yearlyBilling}
          />
        )}
        {currentPhase === 4 && (
          <Page4
            yearly={yearlyBilling}
            adOns={adOns}
            plans={plans}
            currentPhase={currentPhase}
            setCurrentPhase={setCurrentPhase}
          />
        )}
        {currentPhase === 5 && <Thanks />}
      </form>
    </main>
  );
}

export default App;
