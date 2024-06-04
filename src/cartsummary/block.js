export default (editor, opts = {}) => {
    const bm = editor.BlockManager;
  
    bm.add("CartSummary", {
      label: "Cart Summary",
      content: { type: "CART-SUMMARY-COMPONENTS" },
    });
  };
  