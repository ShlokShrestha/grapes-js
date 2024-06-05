export default (editor, opts = {}) => {
    const bm = editor.BlockManager;
  
    bm.add("Delivery Detail", {
      label: "Delivery Detail",
      content: { type: "DELIVERY-DETAIL-COMPONENTS" },
    });
  };
  