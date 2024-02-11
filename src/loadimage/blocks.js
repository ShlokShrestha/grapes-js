export default (editor, opts = {}) => {
  const bm = editor.BlockManager;

  bm.add("LOAD IMAGE", {
    label: "Load/Image",
    content: { type: "IMAGE-COMPONENT" },
  });
};
