export default (editor, opts = {}) => {
  const bm = editor.BlockManager;

  bm.add("FOOTER", {
    label: "Footer",
    content: { type: "FOOTER-COMPONENT" },
  });
};
