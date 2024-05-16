export default (editor, opts = {}) => {
  const bm = editor.BlockManager;

  bm.add("NAVBAR", {
    label: "Navbar",
    content: {
      type: "NAVBAR-COMPONENT",
    },
  });
};
