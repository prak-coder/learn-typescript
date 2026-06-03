import type { JSX } from "react";

interface Item {
  id: number;
  product: string;
  quantity: string;
  Emoji: string;
}
interface ShoppingListProps {
  items: Item[];
}

export default function ShoppingList({
  items,
}: ShoppingListProps): JSX.Element {
  return (
    <div>
      <h1>Shopping List</h1>
      <ul style={{ display: "inline-block" }}>
        {items.map((item) => (
          <li key={item.id}>
            {item.product} -{item.quantity}-{item.Emoji}
          </li>
        ))}
      </ul>
    </div>
  );
}
