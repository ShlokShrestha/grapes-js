export default (editor, opts = {}) => {
  const domc = editor.DomComponents;

  domc.addType("TITLE-COMPONENT", {
    model: {
      defaults: {
        components: [
          {
            type: "text",
            draggable: true,
            copyable: false,
            content: "Title Text",
          },
        ],
      },
      view: {},
    },
  });
};
