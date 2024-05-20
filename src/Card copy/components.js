import components from "../components";

export default (editor, opts = {}) => {
  const domc = editor.DomComponents;
  domc.addType("CARD-COMPONENTS", {
    model: {
      defaults: {
        attributes: { class: "css-cmp-card" },
        components: [
          {
            type: "image",
            draggable: true,
            copyable: false,
            attributes: { src: "https://path/image", class: "cmp-css-img" },
          },
          {
            attributes: { class: "css-cmp-sub" },
            components: [
              {
                type: "text",
                draggable: true,
                copyable: false,
                content: "Title Text",
                attributes: {
                  class: "cmp-css-title",
                },
              },
              {
                type: "text",
                draggable: true,
                copyable: false,
                content: "Price Text",
                attributes: {
                  class: "cmp-css-title",
                },
              },
            ],
          },
          {
            type: "text",
            draggable: true,
            copyable: false,
            content: "Paragraph Text",
            attributes: {
              class: "cmp-css-paragraph",
            },
          },
          {
            type: "button",
            draggable: true,
            copyable: false,
            content: "Add to cart",
            attributes: {
              class: "cmp-css-button",
            },
          },
        ],
        styles: `
        .css-cmp-card{
            display:flex; 
            flex-direction: column;
            width:200px;
            height: auto;
            padding:10px;
            background-color: white;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 6px;
        }
        .css-cmp-sub{
            display:flex;
            justify-content: space-between;
            width: 100%;
            margin-bottom: 5px;
        }
        .cmp-css-title{
            font-weight: bold;
            margin-bottom: 5px 
        }
        .cmp-css-img{
            width:130px;
            height: 150px;
            object-fit: cover;
            margin: 0 auto;
        }
        .cmp-css-paragraph{
          margin-bottom: 5px 
        }
        .cmp-css-button{
            display:flex;
            justify-content:center;
            background-color: #4D56AC;
            padding:6px 0px;
            color:white;
            margin:8px 0px;
      }
        `,
      },
      view: {},
    },
  });
};
