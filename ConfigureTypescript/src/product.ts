interface Product {
  name: string;
  price: number;
  quantity: number;
}
const watercolor: Product = {
  name: "watercolor paint tubes",
  price: 400,
  quantity: 1,
};

const printProduct = (product: Product): void =>
  console.log(`${product.name}--${product.price}`);
printProduct(watercolor);
