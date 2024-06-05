export default (editor, opts = {}) => {
    const bm = editor.BlockManager;
  
    bm.add("Payment", {
      label: "Payment",
      content: { type: "PAYMENT-COMPONENTS" },
    });
  };
  