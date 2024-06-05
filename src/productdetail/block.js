export default (editor, opts = {}) => {
    const bm = editor.BlockManager;
  
    bm.add("Product Detail", {
      label: "Product Detail",
      content: { type: "PRODUCT-DETAIL-COMPONENTS" },
    });
  };
  