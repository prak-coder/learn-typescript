import Greeter from "./components/Greeter";

export default function App() {
  return (
    <div>
      <Greeter person="troy" />
      <Greeter person="abed" />
      <Greeter person="jeff" />
    </div>
  );
}
