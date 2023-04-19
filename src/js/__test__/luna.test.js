/* eslint-disable */

import luna from "../modules/luna";

test.each([
    ['visa', '4929167303942723', true],
    ['visa', '4556334907029550', true],
    ['visa', '4916157611898520240', true],
    ['visa', '4916157611898520241', false],
    ['visa Electron', '4026058573710696', true],
    ['visa Electron', '4917425619099149', true],
    ['visa Electron', '4175005075360594', true],
    ['visa Electron', '4175005075360591', false],
    ['MasterCard', '5215482771003969', true],
    ['MasterCard', '5208195655263553', true],
    ['MasterCard', '2720992987239038', true],
    ['MasterCard', '2720992987239031', false],
    ['MIR', '2200770212727079', true],
    ['MIR', '2204471447988851', true],
    ['MIR', '2200343193828207', true],
    ['MIR', '2200343193828201', false],
    ['Maestro', '6304036190376032', true],
    ['Maestro', '5893482477262280', true],
    ['Maestro', '5018515576427427', true],
    ['Maestro', '5018515576427421', false],
    ['JCB', '3545435911852410', true],
    ['JCB', '3530300421993970', true],
    ['JCB', '3589076095506636420', true],
    ['JCB', '3589076095506636421', false],
  ])(
    // eslint-disable-next-line
    ('Тест Луна, %s: %s'),
    (_, numberCard, expected) => {
      const received = luna(numberCard);
  
      expect(expected).toEqual(received);
    },
  );