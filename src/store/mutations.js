import {ADD_Cart} from "./const-types";

export default {
  [ADD_Cart](state, payload) { //添加到购物车
    let item = state.cartList.find(item => item.iid === payload.iid);
    if (item) {
      item.count += 1;
    } else {
      payload.count = 1;
      payload.checked = true;
      state.cartList.push(payload);
    }
  },
  changeCartChecked(state, payload) {  //修改某一个选中状态
    let item = state.cartList.find(item => item.iid === payload.iid);
    item.checked = !item.checked;
  },
  changeAllChecked(state, flag) {  //修改所有选中状态
    if (flag) {
      state.cartList.map(item => item.checked = false);
    } else {
      state.cartList.map(item => item.checked = true);
    }
  }
}


