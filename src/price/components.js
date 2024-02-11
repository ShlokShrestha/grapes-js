export default (editor, opts = {}) => {
  const domc = editor.DomComponents;

  domc.addType("PRICE-COMPONENT", {
    model: {
      defaults: {
        components: [
          {
            type: "text",
            draggable: true,
            copyable: false,
            content: "$ Price",
          },
        ],
      },
      view: {},
    },
  });
};
