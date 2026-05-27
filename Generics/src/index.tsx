const randomElement =<T,>(list: T[]): T | undefined =>{
    // if(list.length ===0) throw new Error('not an empty array')
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}