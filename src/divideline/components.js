export default (editor, opts = {}) => {
  const domc = editor.DomComponents;

  domc.addType("DIVIDE-LINE-COMPONENT", {
    model: {
      defaults: {
        components: [
          {
            type: "div",
            draggable: true,
            copyable: false,
            attributes: { class: "cmp-css-divideline" },
          },
        ],
        styles: `
          .cmp-css-divideline{
            width:100%;
            height : 1px;
            background-color: black
          }
          `,
      },
      view: {},
    },
  });
};
