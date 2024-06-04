export default (editor, opts = {}) => {
    const bm = editor.BlockManager;
  
    bm.add("CATEGORY", {
      label: "Category",
      content: { type: "CATEGORY-COMPONENT" },
    });
  };
  