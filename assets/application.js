// Put your application javascript here
function runWhenInit() {
  console.log("The current cart state is: ", window.liquidAjaxCart.cart);
}

if (window.liquidAjaxCart?.init) {
  // if Liquid Ajax Cart is already initialized
  runWhenInit();
} else {
  // wait for Liquid Ajax Cart to be initialized
  document.addEventListener("liquid-ajax-cart:init", runWhenInit);
}