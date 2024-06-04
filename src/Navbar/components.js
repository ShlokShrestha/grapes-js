export default (editor, opts = {}) => {
  const doc = editor.DomComponents;
  const primaryColor = "#58AA46";
  const whiteColor = "#ffffff";

  doc.addType("NAVBAR-COMPONENT", {
    model: {
      defaults: {
        copyable: false,
        removable: false,
        droppable: false,
        editable: false,
        attributes: { class: "css-cmp-navbar" },
        components: [
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

          {
            draggable: false,
            copyable: false,
            removable: false,
            droppable: false,
            editable: false,
            attributes: { class: "css-cmp-search-cart" },
            components: [
              {
                attributes: { class: "css-cmp-searchBox" },
                components: [
                  {
                    tagName: "svg",
                    draggable: false,
                    copyable: false,
                    removable: false,
                    droppable: false,
                    editable: false,
                    content: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_9347)">
                <path d="M8.33333 14.1667C11.555 14.1667 14.1667 11.555 14.1667 8.33333C14.1667 5.11167 11.555 2.5 8.33333 2.5C5.11167 2.5 2.5 5.11167 2.5 8.33333C2.5 11.555 5.11167 14.1667 8.33333 14.1667Z" stroke="#4A4A4A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17.5 17.5L12.5 12.5" stroke="#4A4A4A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_1_9347">
                <rect width="20" height="20" fill="white"/>
                </clipPath>
                </defs>
                </svg>
               `,
                    attributes: { class: "cmp-css-img" },
                  },
                  {
                    tagName: "input",
                    draggable: false,
                    copyable: false,
                    removable: false,
                    droppable: false,
                    editable: false,
                    attributes: {
                      type: "text",
                      name: "default-name",
                      placeholder: "Search food",
                      class: "css-cmp-search-bar",
                    },
                  },
                ],
              },
              {
                attributes: { class: "css-cmp-cart" },
                components: [
                  {
                    tagName: "svg",
                    draggable: false,
                    copyable: false,
                    removable: false,
                    droppable: false,
                    editable: false,
                    content: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1_9329)">
                    <path d="M5.00004 17.5C5.92052 17.5 6.66671 16.7538 6.66671 15.8333C6.66671 14.9128 5.92052 14.1667 5.00004 14.1667C4.07957 14.1667 3.33337 14.9128 3.33337 15.8333C3.33337 16.7538 4.07957 17.5 5.00004 17.5Z" stroke="#4A4A4A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14.1667 17.5C15.0871 17.5 15.8333 16.7538 15.8333 15.8333C15.8333 14.9128 15.0871 14.1667 14.1667 14.1667C13.2462 14.1667 12.5 14.9128 12.5 15.8333C12.5 16.7538 13.2462 17.5 14.1667 17.5Z" stroke="#4A4A4A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14.1667 14.1667H5.00004V2.5H3.33337" stroke="#4A4A4A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M5 4.16666L16.6667 4.99999L15.8333 10.8333H5" stroke="#4A4A4A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_1_9329">
                    <rect width="20" height="20" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                    
               `,
                    attributes: { class: "cmp-css-cart-icon" },
                  },
                  {
                    tagName: "span",
                    draggable: false,
                    copyable: false,
                    removable: false,
                    droppable: false,
                    editable: false,
                    content: "2",
                    attributes: {
                      class: "css-cmp-cart-value",
                    },
                  },
                ],
              },
            ],
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
          position: sticky ;
          top: 0;
        }
        .css-cmp-logo-title{
           font-size: 26px;
           font-weight: bold;
           margin: auto 0
        }
        .css-cmp-search-cart{
          display: flex;
          gap: 5px;
        }
        .css-cmp-searchBox {
          position:relative;
          background-color: #F4F4F4;
          padding: 3px 0;
        }
        .css-cmp-searchBox .cmp-css-img{
          position: absolute;
          top:10px;
          left:5px
        }
        .css-cmp-searchBox .css-cmp-search-bar{
          padding: 10px 10px 10px 30px;
          background-color: #F4F4F4;
          outline: none;
          border: none;
        }
        .css-cmp-cart{
          margin: auto 10px;
          position: relative;
        }
        .cmp-css-cart-icon{
     

        }
       .css-cmp-cart-value{
        position: absolute;
         background-color: ${primaryColor};
         border-radius: 50px;
         font-size: 11px;
         padding: 3px 6px;
         top: -7px;
         right: -10px;
         color: ${whiteColor};
        }

        `,
      },
      view: {},
    },
  });
};
