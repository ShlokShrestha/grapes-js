export default (editor, opts = {}) => {
  const domc = editor.DomComponents;
  domc.addType("IMAGE-COMPONENT", {
    model: {
      defaults: {
        components: [
          {
            type: "image",
            draggable: true,
            copyable: false,
            // resizable: true,
            attributes: { src: "https://path/image", class: "cmp-css-img" },
          },
        ],
      },
      view: {},
    },
  });
};
