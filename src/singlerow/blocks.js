export default (editor, opts = {}) => {
  const bm = editor.BlockManager;
  bm.add("SINGLE-ROW", {
    label: "Single Row",
    content: { type: "SINGLE-ROW-COMPONENT" },
  });
};
