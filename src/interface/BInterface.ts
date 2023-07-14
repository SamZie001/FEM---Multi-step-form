export default interface BInterface {
  currentPhase: number;
  setCurrentPhase: React.Dispatch<React.SetStateAction<number>>;
  reference?: string;
}
