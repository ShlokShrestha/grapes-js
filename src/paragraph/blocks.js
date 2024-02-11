export default (editor, opts = {}) => {
  const bm = editor.BlockManager;

  bm.add("PARAGRAPH", {
    label: "Paragraph",
    content: { type: "PARAGRAPH-COMPONENT" },
  });
};
