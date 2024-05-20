export default (editor, opts = {}) => {
    const bm = editor.BlockManager;
  
    bm.add("Card", {
      label: "Card",
      content: { type: "CARD-COMPONENTS" },
    });
  };
  