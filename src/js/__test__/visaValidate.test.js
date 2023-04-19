import visaValidate from "../modules/visaValidate";

test.each([
    ['visa', '4929167303942723', true],
    ['visa', '4556334907029550', true],
    ['visa', '4916157611898520240', true],
    ['visa Electron', '4026058573710696', true],
    ['visa Electron', '4917425619099149', true],
    ['visa Electron', '4175005075360594', true],
    ['MasterCard', '5215482771003969', false],
    ['MasterCard', '5208195655263553', false],
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
    ('Тест принадлежности карты к Visa, %s: %s'),
    (_, numberCard, expected) => {
      const received = visaValidate(numberCard);
  
      expect(expected).toEqual(received);
    },
  );