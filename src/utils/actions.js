function plus() {
  return { type: "plus" };
}
function minus() {
  return { type: "minus" };
}
function plus2() {
  return { type: "plus2" };
}
function minus2() {
  return { type: "minus2" };
}
function ch(e) {
  return { type: "h1", payload: e.target.value };
}
function iso() {
  return { type: "open" };
}
function tab(data) {
  return { type: "tab", payload: data };
}
function repeat(e) {
  return { type: "rep", payload: e.target.value };
}
const actions = { plus, minus, plus2, minus2, ch, iso, tab, repeat };
export default actions;
