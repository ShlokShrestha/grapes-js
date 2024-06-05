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
import cardBlocks from "./Card/block";
import cardComponents from "./Card/components";
import cartSummaryBlock from "./cartsummary/block";
import cartSummaryComponents from "./cartsummary/components";
import navbarBlocks from "./Navbar/block";
import navbarComponent from "./Navbar/components";
import navbarBlocks2 from "./Navbar2/block";
import navbarComponent2 from "./Navbar2/components";
import categoryComponent from "./Categories/components";
import categoryBlock from "./Categories/blocks";
import footerBlock from "./footer/blocks";
import footerComponent from "./footer/components";
import paymentBlock from "./payment/block";
import paymentComponent from "./payment/components";
import productDetailBlock from "./productdetail/block";
import productDetailComponent from "./productdetail/components";
import pickUpDetailBlock from "./pickupdetails/block";
import pickUpDetailComponent from "./pickupdetails/components";
import deliveryDetailBlock from "./deliveryDetail/block";
import deliveryDetailComponent from "./deliveryDetail/components";

import pickupBlock from "./pickup/block";
import pickupComponent from "./pickup/components";
export default (editor, opts = {}) => {
  const options = {
    ...{
      i18n: {},
      // default options
    },
    ...opts,
  };

  // Add components

  // singleRowComponents(editor, options);
  // doubleRowComponents(editor, options);
  // titleComponents(editor, options);
  // paragraphComponents(editor, options);
  // loadImageComponents(editor, options);
  // priceComponents(editor, options);
  // divideLineComponents(editor, options);
  // tripleRowComponent(editor, options);
  cardComponents(editor, options);
  cardComponents(editor, options);
  navbarComponent(editor, options);
  categoryComponent(editor, options);
  footerComponent(editor, options);
  navbarComponent2(editor, options);
  cartSummaryComponents(editor, options);
  paymentComponent(editor, options);
  productDetailComponent(editor, options);
  pickUpDetailComponent(editor, options);
  deliveryDetailComponent(editor, options);

  pickupComponent(editor, options);


  // Add blocks

  // singleRowBlocks(editor, options);
  // doubleRowBlocks(editor, options);
  // titleBlocks(editor, options);
  // paragraphBlocks(editor, options);
  // loadImageBlocks(editor, options);
  // priceBlocks(editor, options);
  // divideLineBlocks(editor, options);
  // tripleRowBlocks(editor, options);
  cardBlocks(editor, options);
  cardBlocks(editor, options);
  navbarBlocks(editor, options);
  categoryBlock(editor, options);
  footerBlock(editor, options);
  navbarBlocks2(editor, options);
  cartSummaryBlock(editor, options);
  paymentBlock(editor, options);
  productDetailBlock(editor, options);
  pickUpDetailBlock(editor, options);
  deliveryDetailBlock(editor, options);


  pickupBlock(editor, options);
  // loadBlocks(editor, options);
  // loadComponents(editor, options);

  // Load i18n files

  editor.I18n &&
    editor.I18n.addMessages({
      en,
      ...options.i18n,
    });
};
