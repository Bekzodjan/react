function changeInp(e) {
  return { type: "change", payload: e.target.value };
}
function add() {
  return { type: "add" };
}
function changeStatus(i) {
  return { type: "changeStatus", payload: i };
}
function changeStatus2(i) {
  return { type: "changeStatus2", payload: i };
}
function clearAll() {
  return { type: "clear" };
}
function deleteAll() {
  return { type: "delete" };
}
function edit(e) {
  return { type: "edit", payload: e };
}
const actions = {
  changeInp,
  add,
  changeStatus,
  changeStatus2,
  clearAll,
  deleteAll,
  edit,
};
export default actions;
