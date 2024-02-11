export default (editor, opts = {}) => {
  const bm = editor.BlockManager;

  bm.add("DIVIDE-LINE", {
    label: "Divide Line",
    content: { type: "DIVIDE-LINE-COMPONENT" },
  });
};
