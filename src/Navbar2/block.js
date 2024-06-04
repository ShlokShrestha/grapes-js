export default (editor, opts = {}) => {
  const bm = editor.BlockManager;

  bm.add("NAVBAR2", {
    label: "Navbar2",
    content: {
      type: "NAVBAR-2-COMPONENT",
    },
  });
};
