export default (editor, opts = {}) => {
  const domc = editor.DomComponents;
  const whiteColor = "#ffffff";
  const borderColor = "#EDEDED";
  const blackcolor = "#000000";
  domc.addType("CART-SUMMARY-COMPONENTS", {
    model: {
      defaults: {
        attributes: { class: "cmp-css-container" },
        copyable: false,
        removable: false,
        droppable: false,
        editable: false,
        components: [
          {
            copyable: false,
            removable: false,
            droppable: false,
            editable: false,
            attributes: { class: "cmp-css-cartsummary" },
            components: [
              {
                type: "text",
                draggable: false,
                copyable: false,
                removable: false,
                droppable: false,
                editable: false,
                content: "Cart summary (2 items)",
                attributes: { class: "cmp-css-cartTitle" },
              },
              {
                tagname: "div",
                draggable: false,
                copyable: false,
                removable: false,
                droppable: false,
                editable: false,
                attributes: { class: "cmp-css-divider" },
              },
              {
                tagname: "div",
                draggable: false,
                copyable: false,
                removable: false,
                droppable: false,
                editable: false,
                components: [
                  {
                    tagname: "div",
                    draggable: false,
                    copyable: false,
                    removable: false,
                    droppable: false,
                    editable: false,
                    attributes: { class: "cmp-css-products" },
                    components: [
                      {
                        tagname: "span",
                        draggable: false,
                        copyable: false,
                        removable: false,
                        droppable: false,
                        editable: false,
                        attributes: { class: "cmp-css-product" },
                        components: [
                          {
                            type: "text",
                            draggable: false,
                            copyable: false,
                            removable: false,
                            droppable: false,
                            editable: false,
                            content: "1",
                            attributes: { class: "cmp-css-productqtn" },
                          },
                          {
                            type: "text",
                            draggable: false,
                            copyable: false,
                            removable: false,
                            droppable: false,
                            editable: false,
                            content: "Cart summary ",
                            attributes: { class: "cmp-css-productname" },
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
                        content: "$24.99",
                        attributes: { class: "cmp-css-productPrice" },
                      },
                    ],
                  },
                  {
                    tagname: "div",
                    draggable: false,
                    copyable: false,
                    removable: false,
                    droppable: false,
                    editable: false,
                    attributes: { class: "cmp-css-divider" },
                  },
                  {
                    tagname: "div",
                    draggable: false,
                    copyable: false,
                    removable: false,
                    droppable: false,
                    editable: false,
                    attributes: { class: "cmp-css-products" },
                    components: [
                      {
                        tagname: "span",
                        draggable: false,
                        copyable: false,
                        removable: false,
                        droppable: false,
                        editable: false,
                        attributes: { class: "cmp-css-product" },
                        components: [
                          {
                            type: "text",
                            draggable: false,
                            copyable: false,
                            removable: false,
                            droppable: false,
                            editable: false,
                            content: "1",
                            attributes: { class: "cmp-css-productqtn" },
                          },
                          {
                            type: "text",
                            draggable: false,
                            copyable: false,
                            removable: false,
                            droppable: false,
                            editable: false,
                            content: "Cart summary ",
                            attributes: { class: "cmp-css-productname" },
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
                        content: "$15.99",
                        attributes: { class: "cmp-css-productPrice" },
                      },
                    ],
                  },
                  {
                    tagname: "div",
                    draggable: false,
                    copyable: false,
                    removable: false,
                    droppable: false,
                    editable: false,
                    attributes: { class: "cmp-css-divider" },
                  },
                ],
              },
            ],
          },
          {
            copyable: false,
            removable: false,
            droppable: false,
            editable: false,
            components: [
              {
                type: "text",
                draggable: false,
                copyable: false,
                removable: false,
                droppable: false,
                editable: false,
                content: "Order total",
                attributes: { class: "cmp-css-orderTotal" },
              },
              {
                tagname: "div",
                draggable: false,
                copyable: false,
                removable: false,
                droppable: false,
                editable: false,
                attributes: { class: "cmp-css-divider" },
              },
              {
                tagname: "div",
                draggable: false,
                copyable: false,
                removable: false,
                droppable: false,
                editable: false,
                attributes: { class: "cmp-css-products" },
                components: [
                  {
                    type: "text",
                    draggable: false,
                    copyable: false,
                    removable: false,
                    droppable: false,
                    editable: false,
                    components: [
                      {
                        draggable: false,
                        copyable: false,
                        removable: false,
                        droppable: false,
                        editable: false,
                        content: "Subtotal",
                        attributes: { class: "cmp-css-service" },
                      },
                      {
                        draggable: false,
                        copyable: false,
                        removable: false,
                        droppable: false,
                        editable: false,
                        content: "Delivery Fee",
                        attributes: { class: "cmp-css-service" },
                      },
                      {
                        draggable: false,
                        copyable: false,
                        removable: false,
                        droppable: false,
                        editable: false,
                        content: "Service Fee",
                        attributes: { class: "cmp-css-service" },
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
                    components: [
                      {
                        draggable: false,
                        copyable: false,
                        removable: false,
                        droppable: false,
                        editable: false,
                        content: "$37.38",
                        attributes: { class: "cmp-css-service" },
                      },
                      {
                        draggable: false,
                        copyable: false,
                        removable: false,
                        droppable: false,
                        editable: false,
                        content: "$0.99",
                        attributes: { class: "cmp-css-service" },
                      },
                      {
                        draggable: false,
                        copyable: false,
                        removable: false,
                        droppable: false,
                        editable: false,
                        content: "$3.30",
                        attributes: { class: "cmp-css-service" },
                      },
                    ],
                  },
                ],
              },
              {
                tagname: "div",
                draggable: false,
                copyable: false,
                removable: false,
                droppable: false,
                editable: false,
                attributes: { class: "cmp-css-divider" },
              },
              {
                tagname: "div",
                draggable: false,
                copyable: false,
                removable: false,
                droppable: false,
                editable: false,
                attributes: { class: "cmp-css-products" },
                components: [
                  {
                    draggable: false,
                    copyable: false,
                    removable: false,
                    droppable: false,
                    editable: false,
                    content: "Total",
                    attributes: { class: "cmp-css-totalprice" },
                  },
                  {
                    draggable: false,
                    copyable: false,
                    removable: false,
                    droppable: false,
                    editable: false,
                    content: "$37.38",
                    attributes: { class: "cmp-css-totalprice" },
                  },
                ],
              },
            ],
          },
        ],
        styles: `
       .cmp-css-container{
        width: 400px;
        background-color: ${whiteColor};
        padding: 15px;
        border-radius: 10px;
        border: 1px solid ${borderColor};

       }
       .cmp-css-cartsummary{
        margin-bottom: 40px;
       }

       .cmp-css-cartTitle{
        font-size: 20px;
        font-weight: 600;
       }
       .cmp-css-orderTotal{
        font-size: 20px;
        font-weight: 600;
       }
      .cmp-css-divider{
        width:100%;
        border: 1px solid ${borderColor};
        margin: 10px 0;
      }
      .cmp-css-products{
        display:flex;
        justify-content: space-between;
      }
      .cmp-css-product{
        display:flex;
        gap: 7px
      }
      .cmp-css-productqtn{
        width: 30px;
        height: 30px;
        border-radius: 50px;
        background-color: ${borderColor};
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
      }
      .cmp-css-productname{
        margin: auto 0;
      }
      .cmp-css-productPrice{
        margin: auto 0;
        font-size: 18px;
        font-weight: 500;
      }
      .cmp-css-service{
        margin-bottom: 5px;
      }
      .cmp-css-totalprice{
        font-weight: 600;
      }
        `,
      },
      view: {},
    },
  });
};
