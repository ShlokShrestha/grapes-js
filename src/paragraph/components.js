export default (editor, opts = {}) => {
  const domc = editor.DomComponents;
  domc.addType("PARAGRAPH-COMPONENT", {
    model: {
      defaults: {
        components: [
          {
            type: "text",
            draggable: true,
            copyable: false,
            content: "Paragraph Text",
          },
        ],
      },
      view: {},
    },
  });
};
