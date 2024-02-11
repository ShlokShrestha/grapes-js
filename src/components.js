export default (editor, opts = {}) => {
  const domc = editor.DomComponents;

  domc.addType("MY-COMPONENT", {
    model: {
      defaults: {
        components: [
          {
            tagName: "div",
            resizable: true,
            attributes: { class: "cmp-css-container" },
            components: [
              {
                type: "image",
                removable: false,
                draggable: false,
                copyable: false,
                attributes: { src: "https://path/image", class: "cmp-css-img" },
              },

              {
                tagName: "div",
                type: "text",
                removable: false,
                draggable: false,
                copyable: false,
                attributes: { title: "title", class: "cmp-css-title" },
                components: [
                  {
                    type: "textnode",
                    content: "This is the product ",
                  },
                ],
              },
              {
                tagName: "div",
                type: "text",
                editable: false,
                removable: false,
                draggable: false,
                copyable: false,
                attributes: { title: "title", class: "cmp-css-sub-title" },
                components: [
                  {
                    type: "textnode",
                    content: `{{product_name}}`,
                  },
                ],
              },
              {
                tagName: "div",
                type: "text",
                editable: false,
                removable: false,
                draggable: false,
                copyable: false,
                attributes: { title: "title", class: "cmp-css-price" },
                components: [
                  {
                    type: "textnode",
                    content: `{{price}}`,
                  },
                ],
              },
              {
                tagName: "div",
                attributes: { class: "cmp-css-date" },
                removable: false,
                draggable: false,
                copyable: false,
                components: [
                  {
                    tagName: "span",
                    content: "Date: ",
                    removable: false,
                    draggable: false,
                    copyable: false,
                    attributes: { class: "cmp-css-date-span" },
                  },
                  {
                    tagName: "span",
                    type: "text",
                    removable: false,
                    draggable: false,
                    copyable: false,
                    attributes: {
                      title: "title",
                      class: "cmp-css-date-text",
                    },
                    components: [
                      {
                        type: "textnode",
                        content: "2080/12/12",
                      },
                    ],
                  },
                ],
              },
              {
                tagName: "div",
                attributes: { class: "cmp-css-date" },
                removable: false,
                draggable: false,
                copyable: false,
                components: [
                  {
                    tagName: "span",
                    content: "Date: ",
                    removable: false,
                    draggable: false,
                    copyable: false,
                    attributes: { class: "cmp-css-date-span" },
                  },
                  {
                    tagName: "span",
                    type: "text",
                    removable: false,
                    draggable: false,
                    copyable: false,
                    attributes: {
                      title: "title",
                      class: "cmp-css-date-text",
                    },
                    components: [
                      {
                        type: "textnode",
                        content: "2080/12/12",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
        styles: `
        .cmp-css-container{
          padding: 0.5rem;
    
        }
        .cmp-css-img{ 
          display: flex;
          margin: 1rem auto;
         
        }
        .cmp-css-title{
          padding: 0.3rem 0;
          font-size: 12px;
          
        }
        .cmp-css-sub-title{
          padding: 0.3rem 0;
          font-size: 12px;
          
        }
        .cmp-css-price{
          padding: 0.3rem 0;
          font-size: 12px;
        }
        .cmp-css-date {
          margin: 0.2rem 0; 
        }
        .cmp-css-date-span{
          font-size: 12px;
          font-weight: bold;
          margin-right: 5px
        }
        .cmp-css-date-text{
          padding: 0.3rem 0;
          font-size: 12px;
        }
        }
      `,
      },
    },
    view: {},
  });
 
};
