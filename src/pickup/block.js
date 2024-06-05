export default (editor, opts = {}) => {
    const bm = editor.BlockManager;
  
    bm.add("PickUp", {
      label: "PickUp",
      content: { type: "PICKUP-COMPONENTS" },
    });
  };
  