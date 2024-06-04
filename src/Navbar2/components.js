export default (editor, opts = {}) => {
  const doc = editor.DomComponents;
  const primaryColor = "#58AA46";
  const whiteColor = "#ffffff";

  doc.addType("NAVBAR-2-COMPONENT", {
    model: {
      defaults: {
        copyable: false,
        removable: false,
        droppable: false,
        editable: false,
        attributes: { class: "css-cmp-navbar" },
        components: [
          {
            attributes: { class: "css-cmp-back" },
            components: [
              {
                tagName: "svg",
                draggable: false,
                copyable: false,
                removable: false,
                droppable: false,
                editable: false,
                content: `<svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.99994 6L1.29294 6.707L0.585938 6L1.29294 5.293L1.99994 6ZM18.9999 14C18.9999 14.2652 18.8946 14.5196 18.707 14.7071C18.5195 14.8946 18.2652 15 17.9999 15C17.7347 15 17.4804 14.8946 17.2928 14.7071C17.1053 14.5196 16.9999 14.2652 16.9999 14H18.9999ZM6.29294 11.707L1.29294 6.707L2.70694 5.293L7.70694 10.293L6.29294 11.707ZM1.29294 5.293L6.29294 0.292999L7.70694 1.707L2.70694 6.707L1.29294 5.293ZM1.99994 5H11.9999V7H1.99994V5ZM18.9999 12V14H16.9999V12H18.9999ZM11.9999 5C13.8565 5 15.6369 5.7375 16.9497 7.05025C18.2624 8.36301 18.9999 10.1435 18.9999 12H16.9999C16.9999 10.6739 16.4732 9.40215 15.5355 8.46447C14.5978 7.52678 13.326 7 11.9999 7V5Z" fill="#4A4A4A"/>
                </svg>`,
                attributes: { class: "cmp-css-back-icon" },
              },
              {
                tagName: "span",
                draggable: false,
                copyable: false,
                removable: false,
                droppable: false,
                editable: false,
                content: "Back to Store",
                attributes: {
                  class: "css-cmp-cart-value",
                },
              },
            ],
          },
          {
            type: "text",
            draggable: false,
            copyable: false,
            removable: false,
            droppable: false,
            editable: false,
            content: "Website Builder",
            attributes: {
              class: "css-cmp-logo-title",
            },
          },
        ],
        styles: `
        .css-cmp-navbar{
          display:flex;
          background-color: #ffffff;
          box-shadow: rgba(0, 0, 0, 0.14) 0px 2px 2px;
          padding: 10px 30px;
          color:black;
          position: sticky ;
          top: 0;
        }
        .css-cmp-logo-title{
           font-size: 26px;
           font-weight: bold;
           margin:  0 auto;
        }
        .css-cmp-back{
          margin: auto 0;
        }
        .cmp-css-back-icon{
          margin-right: 13px
        }
        `,
      },
      view: {},
    },
  });
};
