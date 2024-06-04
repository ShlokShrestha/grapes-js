export default (editor, opts = {}) => {
  const domc = editor.DomComponents;
  const primary = "#58AA46";
  const secondary = "#F4F4F4";
  const white = "#ffffff";
  domc.addType("CATEGORY-COMPONENT", {
    model: {
      defaults: {
        tagName: "section",
        attributes: { class: "cmp-css-container" },
        editable: false,
        copyable: false,
        droppable: false,
        components: [
          {
            type: "text",
            draggable: false,
            removable: false,
            copyable: false,
            editable: false,
            droppable: false,
            content: "Burger",
            attributes: { class: "cmp-css-category" },
          },
          {
            type: "text",
            draggable: false,
            removable: false,
            copyable: false,
            editable: false,
            droppable: false,
            content: "Burger Meals",
            attributes: { class: "cmp-css-category-1" },
          },
          {
            type: "text",
            draggable: false,
            removable: false,
            copyable: false,
            editable: false,
            droppable: false,
            content: "Kebabs",
            attributes: { class: "cmp-css-category-1" },
          },
          {
            type: "text",
            draggable: false,
            removable: false,
            copyable: false,
            editable: false,
            droppable:false,
            content: "Kebab Meals",
            attributes: { class: "cmp-css-category-1" },
          },
          {
            type: "text",
            draggable: false,
            removable: false,
            copyable: false,
            editable: false,
            droppable:false,
            content: "Snack Packs",
            attributes: { class: "cmp-css-category-1" },
          },
          {
            type: "text",
            draggable: false,
            removable: false,
            copyable: false,
            droppable:false,
            editable: false,
            content: "Plates",
            attributes: { class: "cmp-css-category-1" },
          },
          {
            type: "text",
            draggable: false,
            removable: false,
            droppable:false,
            copyable: false,
            editable: false,
            content: "Combos",
            attributes: { class: "cmp-css-category-1" },
          },
          {
            type: "text",
            draggable: false,
            removable: false,
            droppable:false,
            copyable: false,
            editable: false,
            content: "Sides",
            attributes: { class: "cmp-css-category-1" },
          },
          {
            type: "text",
            draggable: false,
            removable: false,
            copyable: false,
            droppable:false,
            editable: false,
            content: "Drinks",
            attributes: { class: "cmp-css-category-1" },
          },
        ],
        styles: `
        .cmp-css-container{
          padding: 10px 40px;
        }
        .cmp-css-category{
          display: inline-block;
          background-color: ${primary};
          color: ${white};
          padding: 7px 20px;
          border-radius: 4px;
          margin: 5px
        }

        .cmp-css-category-1{
          display: inline-block;
          background-color: ${secondary};
          padding: 7px 20px;
          border-radius: 4px;
          margin: 5px
        }`,
      },
      view: {},
    },
  });
};
