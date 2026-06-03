import type React from "react";
import { useRef } from "react";
interface ShoppingListFormProps {
  onAddItem: (item: string, quantity: number, emoji: string) => void;
}

export default function ShoppingListForm({ onAddItem }: ShoppingListFormProps) {
  const productinputRef = useRef<HTMLInputElement>(null);
  const quantityinputRef = useRef<HTMLInputElement>(null);
  const emojiinputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();
    const newProduct = productinputRef.current!.value;
    const newquantity = parseInt(quantityinputRef.current!.value);
    const newEmoji = emojiinputRef.current!.value;

    onAddItem(newProduct, newquantity, newEmoji);
    productinputRef.current!.value = "";
    quantityinputRef.current!.value = "";
    emojiinputRef.current!.value = "";
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="product name" ref={productinputRef} />
      <input
        type="number"
        min={0}
        placeholder="quantity"
        ref={quantityinputRef}
      />
      <input type="text" placeholder="emoji" ref={emojiinputRef} />
      <button type="submit">Add</button>
    </form>
  );
}
