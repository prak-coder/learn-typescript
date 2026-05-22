const color: [number, number, number] = [255, 0, 0];
// console.log(typeof color);
type httpResponse = [number, string];
const myhttpResponses: httpResponse[] = [
  [200, "OK"],
  [404, "Not Found"],
];
//exception to tuples dont push or pop on tuples
//myhttpResponses[0].push("1"); //DONT
console.log(myhttpResponses);

//Enums
enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}
//adding const infront of enum reduce js code
//enums are  named constants not used that much
