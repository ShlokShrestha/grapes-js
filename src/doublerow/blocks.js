export default (editor, opts = {}) => {
    const bm = editor.BlockManager;
  
    bm.add("DOUBLE-ROW", {
      label: "Double Row",
      content: { type: "DOUBLE-ROW-COMPONENT" },
    });
  };
  