export default (editor, opts = {}) => {
  const domc = editor.DomComponents;

  domc.addType("DOUBLE-ROW-COMPONENT", {
    model: {
      defaults: {
        resizable: true,
        draggable: true,
        attributes: { class: "css-cmp-double-row" },
        components: [
          {
            type: "div",
            resizable: true,
            draggable: true,
            copyable: false,
            attributes: { class: "css-cmp-double-row-1" },
            components: "<span>Double Row 1</span>",
          },
          {
            type: "div",
            resizable: true,
            draggable: true,
            copyable: false,
            attributes: { class: "css-cmp-double-row-2" },
            components: "<span>Double Row 2</span>",
          },
        ],
        styles: `
        .css-cmp-double-row{
          display: flex;
     
        }
        .css-cmp-double-row-1 , .css-cmp-double-row-2 {
          width: 100%
        }
        `,
      },
      view: {},
    },
  });
};
