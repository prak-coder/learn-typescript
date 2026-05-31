export function mutiply(x: number, y: number) {
  return x * y;
}

export function sample<T>(list: T[]): T {
  const indx = Math.floor(Math.random() * list.length);
  return list[indx]!;
}
