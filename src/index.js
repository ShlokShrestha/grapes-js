import loadComponents from "./components";
import loadBlocks from "./blocks";
import singleRowComponents from "./singlerow/components";
import singleRowBlocks from "./singlerow/blocks";
import doubleRowBlocks from "./doublerow/blocks";
import doubleRowComponents from "./doublerow/components";
import titleBlocks from "./title/blocks";
import titleComponents from "./title/components";
import paragraphBlocks from "./paragraph/blocks";
import paragraphComponents from "./paragraph/components";
import loadImageBlocks from "./loadimage/blocks";
import loadImageComponents from "./loadimage/components";
import priceBlocks from "./price/blocks";
import priceComponents from "./price/components";
import divideLineComponents from "./divideline/components";
import divideLineBlocks from "./divideline/blocks";
import tripleRowBlocks from "./triplerow/blocks";
import tripleRowComponent from "./triplerow/components";
import en from "./locale/en";

export default (editor, opts = {}) => {
  const options = {
    ...{
      i18n: {},
      // default options
    },
    ...opts,
  };

  // Add components

  singleRowComponents(editor, options);
  doubleRowComponents(editor, options);
  titleComponents(editor, options);
  paragraphComponents(editor, options);
  loadImageComponents(editor, options);
  priceComponents(editor, options);
  divideLineComponents(editor, options);
  tripleRowComponent(editor, options);
  // Add blocks

  singleRowBlocks(editor, options);
  doubleRowBlocks(editor, options);
  titleBlocks(editor, options);
  paragraphBlocks(editor, options);
  loadImageBlocks(editor, options);
  priceBlocks(editor, options);
  divideLineBlocks(editor, options);
  tripleRowBlocks(editor, options);
  // loadBlocks(editor, options);
  // loadComponents(editor, options);

  // Load i18n files

  editor.I18n &&
    editor.I18n.addMessages({
      en,
      ...options.i18n,
    });
};
