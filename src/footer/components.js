export default (editor, opts = {}) => {
  const domc = editor.DomComponents;
  const grayColor = "#EDEDED";
  domc.addType("FOOTER-COMPONENT", {
    model: {
      defaults: {
        tagName: "footer",
        attributes: { class: "cmp-css-footer" },
        editable: false,
        copyable: false,
        droppable: false,
        removable: false,
        components: [
          {
            type: "text",
            draggable: false,
            copyable: false,
            editable: false,
            droppable: false,
            content: "Copyright 2024 - Weborder | Alright Reserved",
          },
        ],
        styles: `
        .cmp-css-footer{
          margin-top: 10px;
          padding: 15px 0;
          text-align: center;
          background-color: ${grayColor}
        }
        `,
      },
      init() {
        this.set({ draggable: false, removable: false });
      },
      view: {},
    },
  });
};
