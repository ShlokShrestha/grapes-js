export default (editor, opts = {}) => {
  const bm = editor.BlockManager;

  bm.add("TITLE", {
    label: "Title",
    content: { type: "TITLE-COMPONENT" },
  });
};
