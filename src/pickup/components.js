export default (editor, opts = {}) => {
  const domc = editor.DomComponents;
  const whiteColor = "#ffffff";
  const borderColor = "#F5F5F5";
  const inputBorderColor = "#c1c1c1";

  domc.addType("PICKUP-COMPONENTS", {
    model: {
      defaults: {
        attributes: { class: "cmp-css-container" },
        copyable: false,
        removable: false,
        droppable: false,
        editable: false,
        components: [
          {
            tagname: "div",
            attributes: { class: "cmp-css-pickup-layout" },
            copyable: false,
            removable: false,
            droppable: false,
            editable: false,
            draggable: false,
            components: [
              {
                tagname: "div",
                attributes: { class: "cmp-css-pickupdetails" },
                copyable: false,
                removable: false,
                droppable: false,
                editable: false,
                draggable: false,
                components: [
                  {
                    tagname: "div",
                    draggable: false,
                    copyable: false,
                    removable: false,
                    droppable: false,
                    editable: false,
                    attributes: { class: "cmp-css-pickup" },
                    components: [
                      {
                        type: "text",
                        draggable: false,
                        copyable: false,
                        removable: false,
                        droppable: false,
                        editable: false,
                        content: "Pickup Details",
                        attributes: { class: "cmp-css-title" },
                      },
                      {
                        type: "text",
                        draggable: false,
                        copyable: false,
                        removable: false,
                        droppable: false,
                        editable: false,
                        attributes: { class: "cmp-css-toggle" },
                        components: [
                          {
                            type: "text",
                            draggable: false,
                            copyable: false,
                            removable: false,
                            droppable: false,
                            editable: false,
                            content: "Pickup",
                            attributes: { class: "cmp-css-pickuptoggle" },
                          },
                          {
                            type: "text",
                            draggable: false,
                            copyable: false,
                            removable: false,
                            droppable: false,
                            editable: false,
                            content: "Delivery",
                            attributes: { class: "cmp-css-deliverytoggle" },
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: "text",
                    attributes: { class: "cmp-css-map-image" },
                    copyable: false,
                    removable: false,
                    droppable: false,
                    editable: false,
                    draggable: false,
                    content: "Map Image Here",
                  },
                  {
                    tagname: "div",
                    attributes: { class: "cmp-css-address" },
                    copyable: false,
                    removable: false,
                    droppable: false,
                    editable: false,
                    draggable: false,
                    components: [
                      {
                        copyable: false,
                        removable: false,
                        droppable: false,
                        editable: false,
                        draggable: false,
                        attributes: { class: "cmp-css-address-icon" },

                        content: `<svg width="31" height="27" viewBox="0 0 31 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.125 10.75V23.125C3.125 23.8543 3.41473 24.5538 3.93046 25.0695C4.44618 25.5853 5.14565 25.875 5.875 25.875H25.125C25.8543 25.875 26.5538 25.5853 27.0695 25.0695C27.5853 24.5538 27.875 23.8543 27.875 23.125V10.75" stroke="#4A4A4A" stroke-width="2"/>
                    <path d="M19.3955 25.875V17.625C19.3955 16.8957 19.1058 16.1962 18.5901 15.6805C18.0743 15.1647 17.3749 14.875 16.6455 14.875H13.8955C13.1662 14.875 12.4667 15.1647 11.951 15.6805C11.4352 16.1962 11.1455 16.8957 11.1455 17.625V25.875" stroke="#4A4A4A" stroke-width="2" stroke-miterlimit="16"/>
                    <path d="M28.9998 9.8755L26.6705 1.72312C26.6212 1.55077 26.5171 1.39915 26.3739 1.29124C26.2308 1.18332 26.0564 1.12496 25.8771 1.125H20.3125L20.9656 8.968C20.9757 9.09406 21.0156 9.2159 21.0821 9.32349C21.1486 9.43107 21.2397 9.52131 21.3479 9.58675C21.8841 9.90713 22.9319 10.4984 23.75 10.75C25.147 11.1804 27.1875 11.025 28.3508 10.882C28.4638 10.8674 28.5724 10.8283 28.6688 10.7674C28.7652 10.7065 28.8472 10.6253 28.909 10.5294C28.9708 10.4336 29.0109 10.3254 29.0266 10.2125C29.0423 10.0996 29.0331 9.98454 28.9998 9.8755Z" stroke="#4A4A4A" stroke-width="2"/>
                    <path d="M18.2501 10.75C19.0311 10.5094 20.0211 9.96075 20.5738 9.6335C20.7024 9.55656 20.8068 9.44494 20.8749 9.31143C20.943 9.17791 20.9721 9.02791 20.9588 8.87862L20.3126 1.125H10.6876L10.0413 8.87862C10.0278 9.02814 10.0568 9.17843 10.1249 9.31221C10.193 9.44599 10.2975 9.55784 10.4263 9.63488C10.9791 9.96075 11.9691 10.5094 12.7501 10.75C14.8029 11.3825 16.1972 11.3825 18.2501 10.75Z" stroke="#4A4A4A" stroke-width="2"/>
                    <path d="M4.32951 1.72312L2.00026 9.87687C1.96738 9.98575 1.95859 10.1005 1.9745 10.2131C1.99041 10.3257 2.03064 10.4335 2.09239 10.529C2.15414 10.6245 2.23594 10.7054 2.3321 10.7661C2.42826 10.8269 2.53649 10.8659 2.64926 10.8806C3.81114 11.025 5.85301 11.179 7.25001 10.75C8.06814 10.4984 9.11726 9.90712 9.65214 9.58812C9.76052 9.52255 9.85173 9.4321 9.9182 9.32426C9.98468 9.21642 10.0245 9.0943 10.0344 8.968L10.6875 1.125H5.12289C4.94361 1.12496 4.76921 1.18332 4.62606 1.29124C4.48291 1.39915 4.37881 1.55077 4.32951 1.72312Z" stroke="#4A4A4A" stroke-width="2"/>
                    </svg>
                    `,
                      },
                      {
                        tagname: "div",
                        copyable: false,
                        removable: false,
                        droppable: false,
                        editable: false,
                        draggable: false,
                        components: [
                          {
                            type: "text",
                            attributes: { class: "cmp-css-address-title" },
                            copyable: false,
                            removable: false,
                            droppable: false,
                            editable: false,
                            draggable: false,
                            content: "Business Name here",
                          },
                          {
                            type: "text",
                            copyable: false,
                            removable: false,
                            droppable: false,
                            editable: false,
                            draggable: false,
                            content: "213 King Street, Newtown, NSW 2042",
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
                    attributes: { class: "cmp-css-delivery-opts" },
                    components: [
                      {
                        draggable: false,
                        copyable: false,
                        removable: false,
                        droppable: false,
                        editable: false,
                        content: "Delivery options",
                        attributes: { class: "cmp-css-delivery-text" },
                      },
                      {
                        tagname: "div",
                        draggable: false,
                        copyable: false,
                        removable: false,
                        droppable: false,
                        editable: false,
                        attributes: { class: "cmp-css-delivery-stand" },
                        components: [
                          {
                            copyable: false,
                            removable: false,
                            droppable: false,
                            editable: false,
                            draggable: false,
                            attributes: { class: "cmp-css-address-icon" },

                            content: `<svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.8542 0.734894C11.0961 0.750738 10.5512 0.89973 10.1903 1.16379L5.25649 3.81183L2.50892 7.54496C1.93138 8.43648 2.34261 10.1641 4.15011 9.05687L6.1255 6.44921C8.63796 4.28029 13.7673 5.27961 11.335 9.62766C10.1401 12.1455 10.7024 13.3748 12.2368 13.8907L12.9382 11.5355C14.1544 8.80215 16.4168 8.31034 16.3245 6.10669L21.7735 6.49897L21.7295 0.809187L11.8542 0.734894ZM9.10748 5.98253C8.22338 5.96729 7.35629 6.33282 6.72482 6.86485L4.74212 9.47145C5.28614 9.9034 5.8295 9.67249 6.37347 9.14833C7.01463 9.47303 7.50919 8.96948 7.91544 7.96528C8.08388 7.28029 8.33236 6.79543 9.10753 5.98253H9.10748ZM7.45115 10.4677C7.35928 10.4706 7.26892 10.4919 7.18546 10.5304L0.626353 13.5524C0.281853 13.7114 0.130576 14.1213 0.289521 14.4661L4.61964 23.8647C4.77869 24.2091 5.18864 24.3613 5.5337 24.2016L12.0921 21.1799C12.4372 21.0206 12.5886 20.6113 12.4296 20.2659L8.09876 10.8679C7.97978 10.6091 7.71927 10.4595 7.4511 10.4677H7.45115ZM5.93954 13.0098C6.33533 13.0156 6.69685 13.1141 7.01062 13.3068C7.55693 13.6421 7.95668 14.3696 8.00817 15.1224C8.04361 15.6395 7.92123 16.0282 7.37071 17.1472C7.17373 17.5476 7.08461 17.9226 7.11315 18.2316C7.13651 18.4842 7.15306 18.5289 7.29794 18.7315L7.45714 18.9539L7.36807 19.0037C7.31907 19.031 7.00768 19.1611 6.67608 19.2928C6.32477 19.4322 6.05065 19.5211 6.01927 19.5057C5.98967 19.4912 5.89983 19.3727 5.81965 19.2423C5.43752 18.6214 5.45276 17.8443 5.86424 16.9761C6.20219 16.2631 6.29435 15.9622 6.26805 15.6571C6.22666 15.1777 5.92563 14.8203 5.51476 14.7625C5.20901 14.7194 4.97302 14.7905 4.55438 15.0521C4.133 15.3153 3.84644 15.5958 3.58675 15.9994C3.49534 16.1415 3.41374 16.256 3.40546 16.2541C3.39713 16.252 3.24265 15.8856 3.06228 15.4397L2.73423 14.6288L2.89826 14.4427C3.19324 14.1076 3.49534 13.8757 4.02692 13.5761C4.70942 13.1915 5.3611 13.0015 5.93954 13.0098ZM7.63097 19.7662C7.95917 19.7725 8.24948 19.9294 8.42823 20.2213C8.64639 20.5776 8.64075 20.924 8.41127 21.2751C8.26451 21.4996 7.95663 21.6973 7.64752 21.7654C6.8791 21.9347 6.22372 21.2909 6.44268 20.5818C6.53495 20.283 6.7131 20.0772 7.01514 19.9207C7.22355 19.8127 7.43409 19.7624 7.63097 19.7662Z" fill="#4A4A4A"/>
                        </svg>
                        
                        `,
                          },
                          {
                            tagname: "div",
                            copyable: false,
                            removable: false,
                            droppable: false,
                            editable: false,
                            draggable: false,
                            components: [
                              {
                                type: "text",
                                attributes: { class: "cmp-css-address-title" },
                                copyable: false,
                                removable: false,
                                droppable: false,
                                editable: false,
                                draggable: false,
                                content: "Standard",
                              },
                              {
                                type: "text",
                                copyable: false,
                                removable: false,
                                droppable: false,
                                editable: false,
                                draggable: false,
                                content: "5 - 15 min",
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                tagname: "div",
                attributes: { class: "cmp-css-cartSum" },
                copyable: false,
                removable: false,
                droppable: false,
                editable: false,
                draggable: false,
                components: [
                  {
                    tagname: "div",
                    copyable: false,
                    removable: false,
                    droppable: false,
                    editable: false,
                    draggable: false,
                    attributes: { class: "cmp-css-cartsummary" },
                    components: [
                      {
                        type: "text",
                        copyable: false,
                        removable: false,
                        droppable: false,
                        editable: false,
                        draggable: false,
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
                                    attributes: {
                                      class: "cmp-css-productname",
                                    },
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
                                    attributes: {
                                      class: "cmp-css-productname",
                                    },
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
                    tagname: "div",
                    copyable: false,
                    removable: false,
                    droppable: false,
                    editable: false,
                    draggable: false,
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
              },
            ],
          },
          {
            tagname: "div",
            copyable: false,
            removable: false,
            droppable: false,
            editable: false,
            draggable: false,
            attributes: { class: "cmp-css-payment-container" },
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
          },
          {
            type: "button",
            draggable: false,
            copyable: false,
            removable: false,
            droppable: false,
            editable: false,
            attributes: { class: "cmp-css-button" },
            content: "Continue to payment",
          },
        ],
        styles: `

        .cmp-css-container{
          padding: 20px 40px;
        }
        .cmp-css-pickup-layout{
          display:grid;
          grid-template-columns: 2fr 1fr; 
          gap: 10px
        }
        
        /****pickup details css****/
        .cmp-css-pickupdetails{
          padding:10px;
          width: 800px;
          background-color: ${whiteColor};
          border: 2px solid ${borderColor};
          border-radius: 10px
        }
        .cmp-css-pickup{
          display:flex; 
          justify-content: space-between;
          margin-bottom: 15px
        }
        .cmp-css-title{
          font-weight: bold;
          font-size: 20px;
          margin: auto 0;
        }
        .cmp-css-toggle{
          border-radius: 30px;
          background-color: ${borderColor};
          padding: 7px 8px;
          display: flex;
          gap: 10px;
        }
        .cmp-css-pickuptoggle{
          padding: 5px 10px;
          background-color: ${whiteColor};
          border-radius: 30px;
        }
        .cmp-css-deliverytoggle{
          margin: auto 0;
        }
        .cmp-css-map-image{
          display: flex;
          align-items: center;
          justify-content: center;
          height: 135px;
          background-color: ${borderColor};
          margin-bottom: 15px
        }
        .cmp-css-address{
          display: flex;
          gap: 5px
        }
        .cmp-css-address-title{
          font-weight: 600;
          font-size:16px
        }
        .cmp-css-address-icon{
          margin: auto 0;
        }
        .cmp-css-delivery-opts{
          margin: 15px 0;
        }
        .cmp-css-delivery-text{
          font-weight: 600;
          font-size: 20px; 
          margin-bottom: 15px
        }
        .cmp-css-delivery-stand{
          display: flex ;
          gap: 5px;
          border: 1px solid black;
          border-radius: 10px;
          padding:10px
        }

        /****cart summary css****/
        .cmp-css-cartSum{
          width: 400px;
          background-color: ${whiteColor};
          padding: 15px;
          border-radius: 10px;
          padding: 15px 10px;
          border: 2px solid ${borderColor};
         }
         .cmp-css-cartsummary{
          margin-bottom: 40px;
         }
  
         .cmp-css-cartTitle, .cmp-css-orderTotal{
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

        /**** payment css ****/

        .cmp-css-payment-container{
          width: 800px;
          padding:10px;
          margin: 10px 0;
          border: 2px solid ${borderColor};
          border-radius: 10px
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
          border: 1px solid ${inputBorderColor};
        }
        ::placeholder{
          color: ${inputBorderColor}
        }
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        input[type=number] {
          -moz-appearance: textfield;
        }

        /**** button css ****/

        .cmp-css-button{
          width: 800px;
          background-color: black;
          padding: 10px 0;
          text-align: center;
          border-radius: 4px;
          color: ${whiteColor}
        }
        `,
      },
      view: {},
    },
  });
};
