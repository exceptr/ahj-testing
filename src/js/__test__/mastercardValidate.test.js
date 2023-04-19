/* eslint-disable */

import mastercardValidate from "../modules/mastercardValidate";

test.each([
    ['visa', '4929167303942723', false],
    ['visa', '4556334907029550', false],
    ['visa', '4916157611898520240', false],
    ['visa Electron', '4026058573710696', false],
    ['visa Electron', '4917425619099149', false],
    ['visa Electron', '4175005075360594', false],
    ['MasterCard', '5215482771003969', true],
    ['MasterCard', '5208195655263553', true],
    ['MIR', '2200770212727079', false],
    ['MIR', '2204471447988851', false],
    ['MIR', '2200343193828207', false],
    ['Maestro', '6304036190376032', false],
    ['Maestro', '5893482477262280', false],
    ['Maestro', '5018515576427427', false],
    ['JCB', '3545435911852410', false],
    ['JCB', '3530300421993970', false],
    ['JCB', '3589076095506636420', false],
  ])(
    ('Тест принадлежности карты к MasterCard, %s: %s'),
    (_, numberCard, expected) => {
      const received = mastercardValidate(numberCard);
  
      expect(expected).toEqual(received);
    },
  );