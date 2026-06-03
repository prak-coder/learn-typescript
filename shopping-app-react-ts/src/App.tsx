import ShoppingList from "./components/ShoppingList";
import type Item from "./models/item";
import { useState } from "react";
import ShoppingListForm from "./components/ShoppingListForm";
import { v4 as getId } from "uuid";
export default function App() {
  const [items, setItems] = useState<Item[]>([]);
  const addItem = (product: string, quantity: number, Emoji: string) => {
    console.log("made into app component");
    setItems([...items, { id: getId(), product, quantity, Emoji }]);
  };
  // const items = [
  //   { id: 1, product: "Eggs", quantity: 12, Emoji: "🥚" },
  //   { id: 2, product: "Chicken Breast", quantity: 2, Emoji: "🍗" },
  //   { id: 3, product: "Cauliflower", quantity: 1, Emoji: "🥦" },
  // ];
  return (
    <div>
      <ShoppingList items={items} />
      <ShoppingListForm onAddItem={addItem} />
    </div>
  );
}
