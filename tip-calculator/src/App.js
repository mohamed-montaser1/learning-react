import BillComponent from "./BillComponent";
import Reset from "./Button";
import Output from "./Output";
import ServiceQuality from "./ServiceQuality";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(0);
  const [opinion, setOpinion] = useState(0);
  const [friendOpinion, setFriendOpinion] = useState(0);
  const avrage = (first, second) => (first + second) / 2;

  let tip = avrage(opinion, friendOpinion);

  const resetHanlder = () => {
    setBill(0);
    setOpinion(0);
    setFriendOpinion(0);
  };

  return (
    <>
      <BillComponent amount={bill} setAmount={setBill} />
      <ServiceQuality onChange={(e) => setOpinion(() => Number(e.target.value))} value={opinion}>
        How did you like the service?
      </ServiceQuality>
      <ServiceQuality onChange={(e) => setFriendOpinion(() => Number(e.target.value))} value={friendOpinion}>
        How did your friend like the service?
      </ServiceQuality>
      <Output bill={bill} tip={tip} />
      <Reset onClick={resetHanlder}>Reset</Reset>
    </>
  );
}
