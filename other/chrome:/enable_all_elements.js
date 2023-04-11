//enables all inputs like buttons when you can't press them (including chrome://extensions and myaccount.google.com
const buttons = document.querySelectorAll('button');
const crbuttons = document.querySelectorAll('cr-button');
const keygens = document.querySelectorAll('keygen');
const inputs = document.querySelectorAll('input');
const allElems = document.querySelectorAll('body *');
const shadowRoots = [];
const textareas = document.querySelectorAll('textarea');
const groups = document.querySelectorAll('optgroup');
const fields = document.querySelectorAll('fieldset');
const submit = document.querySelectorAll('submit');
const options = document.querySelectorAll('option');
const select = document.querySelectorAll('select');
const crtoggles = document.querySelectorAll('cr-toggle');
const i = [crtoggles, select, options, submit, fields, groups, textareas, allElems, inputs, keygens, crbuttons, buttons];

i.forEach((value, index, arr) => {
  if (value.length) {}

  value.forEach((item, index, arr) => {
    if (item) { item.removeAttribute('disabled'); item.setAttribute('aria-disabled', false); }
  });

  allElems.forEach((value, index, arr) => {
    const root = value.shadowRoot;
    if (root) {
      shadowRoots.push(root);
      const buttons2 = root.querySelectorAll('button');
      const crbuttons2 = root.querySelectorAll('cr-button');
      const keygens2 = root.querySelectorAll('keygen');
      const inputs2 = root.querySelectorAll('input');
      const allElems2 = root.querySelectorAll('*');
      const textareas2 = root.querySelectorAll('textarea');
      const groups2 = root.querySelectorAll('optgroup');
      const fields2 = root.querySelectorAll('fieldset');
      const submit2 = root.querySelectorAll('submit');
      const options2 = root.querySelectorAll('option');
      const select2 = root.querySelectorAll('select');
      const crtoggles2 = root.querySelectorAll('cr-toggle');
      const i2 = [crtoggles2, select2, options2, submit2, fields2, groups2, textareas2, allElems2, inputs2, keygens2, crbuttons2, buttons2];
      allElems2.forEach((item, index, arr) => {
        if (item) { item.removeAttribute('disabled'); item.setAttribute('aria-disabled', false); }
        if (item.shadowRoot) {
          const allElems3 = item.shadowRoot.querySelectorAll('*');
          allElems3.forEach((val, ind, ar) => {
            if (val) {
              val.removeAttribute('disabled'); val.setAttribute('aria-disabled', false);
              if (val.shadowRoot) {
                const allElems4 = val.shadowRoot.querySelectorAll('*');
                allElems4.forEach((iten, inde, arr2) => {
                  if (iten) {
                    if (iten) { iten.removeAttribute('disabled'); iten.setAttribute('aria-disabled', false); }
                  }
                },
                // 11 (11)

                i2.forEach((value, index, arr) => {
                  if (value.length) {}

                  value.forEach((item, index, arr) => {
                    if (item) { item.removeAttribute('disabled'); item.setAttribute('aria-disabled', false); }
                  });
                }),
                  // }
                  // }
                  // }
                  // }
                  // }
                  // }
                  // }
                  // }
                  // }
                  // }
                  // }
                  // }
                  // }
                  // )

                  // )
                  // )
                  // )
                  // )
                  // )
                  // )
                );
              }
            }
          });
        }
      });
    }
  });
});// }
// )


