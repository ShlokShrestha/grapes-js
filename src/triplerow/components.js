export default (editor, opts = {}) => {
  const domc = editor.DomComponents;

  function createComponentWithUserValue(userValueEnter) {
    const generateDivs = (numDivs) => {
      const divComponents = [];
      for (let i = 0; i < numDivs; i++) {
        divComponents.push({
          typeName: "div",
          resizable: true,
          draggable: true,
          copyable: false,
          attributes: { class: `css-cmp-custom-row-${i + 1}` },
          components: `<span>Custom row ${i + 1}</span>`,
          styles: `
            .css-cmp-custom-row-${i + 1}  {
              width: 100%
            }
          `,
        });
      }
      return divComponents;
    };

    domc.addType("CUSTOM-ROW-COMPONENT", {
      model: {
        defaults: {
          tagName: "div",
          resizable: true,
          draggable: true,
          attributes: { class: "css-cmp-custom-row" },
          components: generateDivs(userValueEnter),
          styles: `
            .css-cmp-custom-row{
              display: flex;
            }
          `,
        },
      },
    });
  }

  editor.on("block:userValueEntered", (userValue) => {
    createComponentWithUserValue(userValue);
    console.log(userValue, "user");
  });
};
