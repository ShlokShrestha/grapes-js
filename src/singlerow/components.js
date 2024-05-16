export default (editor, opts = {}) => {
  const domc = editor.DomComponents;

  domc.addType("SINGLE-ROW-COMPONENT", {
    model: {
      defaults: {
        tagName: "div",
        draggable: true,
        resizable: true,
        attributes: { class: "css-cmp-single-row" },
        components: "<span>Single Row</span>",
        styles: `
        .css-cmp-single-row{
          display:flex;
          gap: 5px;
          flex-wrap: wrap;
        }`,
      },
      view: {},
    },
  });
};
