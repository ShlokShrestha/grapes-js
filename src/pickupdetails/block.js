export default (editor, opts = {}) => {
    const bm = editor.BlockManager;
  
    bm.add("PickUp Details", {
      label: "PickUp Details",
      content: { type: "PICKUP-DETAILS-COMPONENTS" },
    });
  };
  