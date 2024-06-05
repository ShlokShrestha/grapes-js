export default (editor, opts = {}) => {
  const domc = editor.DomComponents;
  const white = "#ffffff";
  const borderColor = "#EDEDED";
  const secondary = "#F4F4F4";

  domc.addType("PRODUCT-DETAIL-COMPONENTS", {
    model: {
      defaults: {
        attributes: { class: "cmp-css-container" },
        copyable: false,
        removable: false,
        droppable: false,
        editable: false,

        attributes: { class: "cmp-css-cards" },
        components: [
          {
            draggable: false,
            copyable: false,
            removable: false,
            droppable: false,
            editable: false,
            attributes: { class: "cmp-css-card" },
            components: [
              {
                type: "div",
                draggable: false,
                copyable: false,
                removable: false,
                droppable: false,
                editable: false,
                attributes: { class: "cmp-css-imagefield" },
                components: [
                  {
                    type: "image",
                    draggable: false,
                    copyable: false,
                    removable: false,
                    attributes: {
                      src: "https://path/image",
                      class: "cmp-css-img",
                    },
                  },
                ],
              },
              {
                type: "div",
                draggable: false,
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
                    content: "Crispy Chicken Burger",
                    attributes: { class: "cmp-css-title" },
                  },
                  {
                    type: "text",
                    draggable: false,
                    copyable: false,
                    removable: false,
                    droppable: false,
                    editable: false,
                    content: "$15.99",
                    attributes: { class: "cmp-css-subtitle" },
                  },
                  {
                    type: "text",
                    draggable: false,
                    copyable: false,
                    removable: false,
                    droppable: false,
                    editable: false,
                    attributes: { class: "cmp-css-paragraph" },
                    content:
                      " crispy chicken fillet, cheese, tomatoes, lettuce, signature sauce on a milky brioche bun",
                  },
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
                    attributes: { class: "cmp-css-category" },
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
                    type: "div",
                    draggable: false,
                    copyable: false,
                    removable: false,
                    droppable: false,
                    editable: false,
                    components: [
                      {
                        type: "num",
                        draggable: false,
                        copyable: false,
                        removable: false,
                        droppable: false,
                        editable: false,
                        content: "Special instructions",
                        attributes: { class: "cmp-css-specialinst" },
                      },
                      {
                        tagName: "textarea",
                        draggable: false,
                        copyable: false,
                        removable: false,
                        droppable: false,
                        editable: false,
                        attributes: {
                          type: "text",
                          name: "default-name",
                          placeholder: "Note goes here...",
                          class: "css-cmp-cardinput",
                        },
                      },
                    ],
                  },
                  {
                    type: "div",
                    draggable: false,
                    copyable: false,
                    removable: false,
                    droppable: false,
                    editable: false,
                    attributes: { class: "cmp-css-qtn" },
                    components: [
                      {
                        tagName: "text",
                        draggable: false,
                        copyable: false,
                        removable: false,
                        droppable: false,
                        editable: false,
                        content: `1 <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.66663 1.66669L4.99996 5.00002L8.33329 1.66669" stroke="#4A4A4A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        `,
                        attributes: {
                          class: "css-cmp-qtnvalue",
                        },
                      },
                      {
                        tagName: "text",
                        draggable: false,
                        copyable: false,
                        removable: false,
                        droppable: false,
                        editable: false,
                        content: "You may be charged for extras.",
                        attributes: {
                          class: "css-cmp-qtntext",
                        },
                      },
                    ],
                  },
                  {
                    type: "button",
                    draggable: false,
                    copyable: false,
                    removable: false,
                    droppable: false,
                    editable: false,
                    attributes: { class: "cmp-css-button" },
                    content: "Add (1) order - $15.99",
                  },
                ],
              },
            ],
          },
        ],

        styles: `
        .cmp-css-container{
          padding: 20px 40px;
        }
        .cmp-css-categorytitle{
          font-size: 20px;
          font-weight: bolder;
          margin-bottom: 20px 
        }
        .cmp-css-cards{
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        .cmp-css-card{
          display:flex; 
          gap: 20px;
          height: auto;
          padding:10px;
          background-color: white;
          border-radius: 10px;
          border: 2px solid ${borderColor}
        }
        .cmp-css-title{
          font-size: 22px;
          font-weight: bold;
          margin: 20px 0 10px 0;
        }
        .cmp-css-subtitle{
          font-weight: bold;
          font-size: 18px;
          margin-bottom: 5px 
      }
        .cmp-css-paragraph{
          margin-bottom: 5px 
        }

        .cmp-css-imagefield{
          position: relative;
        }
        .cmp-css-img{
          width:250px;
          height: 250px;
          object-fit: cover;
        }
        .cmp-css-category{
          display: inline-block;
          background-color: ${secondary};
          padding: 7px 15px;
          border-radius: 4px;
          margin: 5px 0 15px 0;
        }
        .cmp-css-divider{
          width:100%;
          border: 1px solid ${borderColor};
          margin: 10px 0;
        }
        .cmp-css-specialinst{
          font-weight: bold;
          font-size: 18px;
          margin: 10px 0;
        }
        .css-cmp-cardinput{
          width: 100%;
          resize: none;
          padding: 10px;
          outline: none;
          border: none;
          border-radius: 4px;
          background-color: ${borderColor}
        }
        .cmp-css-qtn{
          margin: 10px 0;
          display: flex;
          gap: 10px
        }
        .css-cmp-qtnvalue{
          background-color: ${borderColor};
          padding: 5px 10px;
          border-radius: 50px
        }
        .css-cmp-qtntext{
          margin: auto 0;
        }
        .cmp-css-button{
          background-color: black;
          padding: 10px 0;
          text-align: center;
          border-radius: 4px;
          color: ${white}
        }
        `,
      },
      view: {},
    },
  });
};
