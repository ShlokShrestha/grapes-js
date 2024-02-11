export default (editor, opts = {}) => {
  const bm = editor.BlockManager;

  bm.add("PRICE", {
    label: "Price",
    content: { type: "PRICE-COMPONENT" },
  });
};
