export default (editor, opts = {}) => {
  const bm = editor.BlockManager;

  bm.add("TRIPLE ROW", {
    label: "Custom Row",
    content: [{ type: "CUSTOM-ROW-COMPONENT" }],
    onClick: () => {
      let userValueEnter = prompt("Enter the value");
      if (userValueEnter !== null && userValueEnter.trim() !== "") {
        editor.trigger("block:userValueEntered", userValueEnter);
        block.set({ disable: false });
      } else {
        alert("Enter the valid value");
      }
    },
  });
};
