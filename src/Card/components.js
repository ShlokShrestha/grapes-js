export default (editor, opts = {}) => {
  const domc = editor.DomComponents;
  const white = "#ffffff";
  const borderColor = "#EDEDED";
  domc.addType("CARD-COMPONENTS", {
    model: {
      defaults: {
        attributes: { class: "cmp-css-container" },
        copyable: false,
        removable: false,
        droppable: false,
        editable: false,
        components: [
          {
            components: [
              {
                type: "text",
                draggable: false,
                copyable: false,
                removable: false,
                droppable: false,
                editable: false,
                content: "Burger",
                attributes: { class: "cmp-css-categorytitle" },
              },
            ],
          },
          {
            draggable: false,
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
                    ],
                  },
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
                      {
                        type: "span",
                        draggable: false,
                        copyable: false,
                        removable: false,
                        content: "+",
                        attributes: {
                          class: "cmp-css-add",
                        },
                      },
                    ],
                  },
                ],
              },
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
                    ],
                  },
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
                      {
                        type: "span",
                        draggable: false,
                        copyable: false,
                        removable: false,
                        content: "+",
                        attributes: {
                          class: "cmp-css-add",
                        },
                      },
                    ],
                  },
                ],
              },
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
                    ],
                  },
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
                      {
                        type: "span",
                        draggable: false,
                        copyable: false,
                        removable: false,
                        content: "+",
                        attributes: {
                          class: "cmp-css-add",
                        },
                      },
                    ],
                  },
                ],
              },
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
                    ],
                  },
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
                      {
                        type: "span",
                        draggable: false,
                        copyable: false,
                        removable: false,
                        content: "+",
                        attributes: {
                          class: "cmp-css-add",
                        },
                      },
                    ],
                  },
                ],
              },
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
                    ],
                  },
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
                      {
                        type: "span",
                        draggable: false,
                        copyable: false,
                        removable: false,
                        content: "+",
                        attributes: {
                          class: "cmp-css-add",
                        },
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
          justify-content: space-between;
          height: auto;
          padding:10px;
          background-color: white;
          border-radius: 10px;
          border: 2px solid ${borderColor}
        }
        .cmp-css-title{
          font-size: 18px;
            font-weight: bold;
            margin-bottom: 5px 
        }
        .cmp-css-subtitle{
          font-weight: bold;
          margin-bottom: 5px 
      }
        .cmp-css-paragraph{
          margin-bottom: 5px 
        }

        .cmp-css-imagefield{
          position: relative;
        }
        .cmp-css-img{
          width:150px;
          height: 150px;
          object-fit: cover;
          position: relative;
        }
        .cmp-css-add{
          position: absolute;
          bottom: 15px;
          right: 15px;
          width: 40px;
          height: 40px;
          border-radius: 50px;
          background-color: ${white};
          box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 30px;
          font-weight: bold;
        }
        `,
      },
      view: {},
    },
  });
};
