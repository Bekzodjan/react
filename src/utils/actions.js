function change(e) {
  return { type: "change", payload: e.target.value };
}
function changeE(e, i) {
  return { type: "changeE", payload: { name: e.target.value, i } };
}
function addE(i) {
  return { type: "addE", payload: i };
}
function add() {
  return { type: "add" };
}
function deleteI(i) {
  return { type: "del", payload: i };
}
function clear() {
  return { type: "clear" };
}
function check(i) {
  return { type: "check", payload: i };
}
function order(e) {
  return { type: "order", payload: e.target.value };
}
function search(e) {
  return { type: "search", payload: e.target.value };
}
const actions = {
  add,
  addE,
  changeE,
  change,
  deleteI,
  clear,
  check,
  order,
  search,
};
export default actions;
