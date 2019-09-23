export default {
  cartTotalCount(state) {
    return state.cartList.length
  },
  isTotalCheck(state) {   //是否全选
    if (state.cartList.length === 0) {
      return false
    } else {
      return state.cartList.every(item => item.checked === true)
    }
  },
  totalPrice(state) {  //选中的总价格和数量
    let total = {
      price: 0,
      num: 0
    };
    state.cartList.forEach(item => {
      if (item.checked) {
        total.price += parseFloat(item.price)*parseInt(item.count);
        total.num += 1;
      }
    });
    return total;
  },
  // currentCheckedCount(state) {  //当前选中的数量
  //   let num = 0;
  //   state.cartList.forEach(item => {
  //     if (item.checked) {
  //
  //     }
  //   })
  // }
}
