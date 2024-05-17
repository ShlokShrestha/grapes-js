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
            attributes: { class: "css-cmp-navbar-link" },
            components: [
              {
                type: "text",
                draggable: true,
                copyable: true,
                content: "First Link",
              },
              {
                type: "text",
                draggable: true,
                copyable: true,
                content: "Second Link",
              },
              {
                type: "text",
                draggable: true,
                copyable: true,
                content: "Third Link",
              },
            ],
          },
        ],
        styles: `
        .css-cmp-navbar{
          display: flex;
          justify-content: space-between;
          background-color: #4D56AC;
          padding: 10px 30px;
        }
        .css-cmp-navbar-logo{
          width: 40px;
          height: 40px;
        }
        .css-cmp-navbar-link{
          display: flex;
          gap: 0 25px;
          margin: auto 0;
          color: white;
        }
        `,
      },
      view: {},
    },
  });
};
