function changeInp(e) {
  return {type: 'change', payload: e.target.value}
}
function addProduct() {
  return {type: 'add'}
}
function changeCount(type, i){
  return {type: type,payload: i}
}
function deleteItem(i) {
  return {type: 'delete',payload: i}
}
const actions = { changeInp, addProduct, changeCount, deleteItem };
export default actions;
