export default (editor, opts = {}) => {
  const doc = editor.DomComponents;

  doc.addType("NAVBAR-COMPONENT", {
    model: {
      defaults: {
        attributes: { class: "css-cmp-navbar" },

        components: [
          {
            type: "image",
            draggable: true,
            copyable: false,
            attributes: { class: "css-cmp-navbar-logo" },
          },
          {
            tagName: "input",
            droppable: false,
            draggable: true,
            copyable: false,
            attributes: {
              type: "text",
              name: "default-name",
              placeholder: "Insert text here",
              class: "css-cmp-search-bar",
            },
          },
        ],
        styles: `
        .css-cmp-navbar{
          display: flex;
          justify-content: space-between;
          background-color: #ffffff;
          box-shadow: rgba(0, 0, 0, 0.14) 0px 2px 2px;
          padding: 10px 30px;
          color:black;
        }
        .css-cmp-navbar-logo{
          width: 40px;
          height: 40px;
        }
        .css-cmp-navbar-link{
          display: flex;
          gap: 0 25px;
          margin: auto 0;
        }
     .css-cmp-search-bar{
          padding: 2px 6px;
          border-radius: 3px;
          outline: none; 
          border: none;
          background-color: #F4F4F4;
        }
        `,
      },
      view: {},
    },
  });
};
