export default (editor, opts = {}) => {
  const domc = editor.DomComponents;
  const white = "#ffffff";
  const borderColor = "#EDEDED";

  domc.addType("PAYMENT-COMPONENTS", {
    model: {
      defaults: {
        attributes: { class: "cmp-css-container" },
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
            content: "Payment",
            attributes: { class: "cmp-css-payment" },
          },
          {
            typename: "div",
            draggable: false,
            copyable: false,
            removable: false,
            droppable: false,
            editable: false,
            attributes: { class: "cmp-css-cardDetails" },
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
                    content: "Card Number",
                    attributes: { class: "cmp-css-cardnumber" },
                  },
                  {
                    tagName: "input",
                    draggable: false,
                    copyable: false,
                    removable: false,
                    droppable: false,
                    editable: false,
                    attributes: {
                      type: "number",
                      name: "default-name",
                      placeholder: "XXXX XXXX XXXX XXXX",
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
                components: [
                  {
                    type: "text",
                    draggable: false,
                    copyable: false,
                    removable: false,
                    droppable: false,
                    editable: false,
                    content: "Exp. Date",
                    attributes: { class: "cmp-css-cardnumber" },
                  },
                  {
                    tagName: "input",
                    draggable: false,
                    copyable: false,
                    removable: false,
                    droppable: false,
                    editable: false,
                    attributes: {
                      type: "number",
                      name: "default-name",
                      placeholder: "MM/YY",
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
                components: [
                  {
                    type: "number",
                    draggable: false,
                    copyable: false,
                    removable: false,
                    droppable: false,
                    editable: false,
                    content: "Security code",
                    attributes: { class: "cmp-css-cardnumber" },
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
                      placeholder: "0000",
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
                components: [
                  {
                    type: "num",
                    draggable: false,
                    copyable: false,
                    removable: false,
                    droppable: false,
                    editable: false,
                    content: "Name on card",
                    attributes: { class: "cmp-css-cardnumber" },
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
                      placeholder: "John Deo",
                      class: "css-cmp-cardinput",
                    },
                  },
                ],
              },
            ],
          },
        ],
        styles: `
        .cmp-css-container{
          padding: 20px 40px;
          width: 700px;
        }
        .cmp-css-payment{
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 20px;
         }
         .cmp-css-cardDetails{
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 10px;
         }
         .cmp-css-cardnumber{
          margin-bottom: 5px;
         }
         .css-cmp-cardinput{
          width: 100%;
          padding: 10px;
          outline: none;
          border-radius: 5px;
          border: 1px solid ${borderColor};
        }
        ::placeholder{
          color: ${borderColor}
        }
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        input[type=number] {
          -moz-appearance: textfield;
        }
        `,
      },
      view: {},
    },
  });
};
