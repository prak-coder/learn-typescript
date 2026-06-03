import ShoppingList from "./components/ShoppingList";
export default function App() {
  const items = [
    { id: 1, product: "Eggs", quantity: 12, Emoji: "🥚" },
    { id: 2, product: "Chicken Breast", quantity: 2, Emoji: "🍗" },
    { id: 2, product: "Cauliflower", quantity: 1, Emoji: "🥦" },
  ];
  return (
    <div>
      <ShoppingList items={items} />
    </div>
  );
}
