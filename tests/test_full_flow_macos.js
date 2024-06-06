module.exports = {
  "Complete End-to-End Flow": function (browser) {
    
    browser
      .resizeWindow(1280, 1024)
      .url('https://sampleapp.tricentis.com/101')
      .waitForElementVisible('body', 1000)
      .click('#nav_automobile')
      .waitForElementVisible('#entervehicledata', 1000)
      .pause(500);

    
    browser
      .click('#make')
      .setValue('#make', 'Mercedes Benz')
      .execute(function() {
        document.querySelector('#make').dispatchEvent(new Event('change', { bubbles: true }));
      })
      .click('#engineperformance')
      .setValue('#engineperformance', '50')
      .execute(function() {
        document.querySelector('#engineperformance').dispatchEvent(new Event('input', { bubbles: true }));
      })
      .click('#dateofmanufacture')
      .setValue('#dateofmanufacture', '05/21/2020')
      .execute(function() {
        document.querySelector('#dateofmanufacture').dispatchEvent(new Event('input', { bubbles: true }));
      })
      .click('#numberofseats')
      .setValue('#numberofseats', '4')
      .execute(function() {
        document.querySelector('#numberofseats').dispatchEvent(new Event('change', { bubbles: true }));
      })
      .click('#fuel')
      .setValue('#fuel', 'Petrol')
      .execute(function() {
        document.querySelector('#fuel').dispatchEvent(new Event('change', { bubbles: true }));
      })
      .click('#listprice')
      .setValue('#listprice', '30000')
      .execute(function() {
        document.querySelector('#listprice').dispatchEvent(new Event('input', { bubbles: true }));
      })
      .click('#licenseplatenumber')
      .setValue('#licenseplatenumber', 'AB123CD')
      .execute(function() {
        document.querySelector('#licenseplatenumber').dispatchEvent(new Event('input', { bubbles: true }));
      })
      .click('#annualmileage')
      .setValue('#annualmileage', '15000')
      .execute(function() {
        document.querySelector('#annualmileage').dispatchEvent(new Event('input', { bubbles: true }));
      })
      .pause(2000)
      .click('#nextenterinsurantdata')
      .waitForElementVisible('#firstname', 3000);

    browser
      .click('#firstname')
      .setValue('#firstname', 'Cici')
      .click('#lastname')
      .setValue('#lastname', 'Cny')
      .click('#birthdate')
      .setValue('#birthdate', '01/01/1991')
      .execute(function() {
        const genderOption = document.querySelector('input#genderfemale');
        genderOption.click();
        genderOption.dispatchEvent(new Event('change', { bubbles: true }));
      })
      .click('#streetaddress')
      .setValue('#streetaddress', 'Campus 1')
      .click('#country')
      .setValue('#country', 'Austria')
      .execute(function() {
        document.querySelector('#country').dispatchEvent(new Event('change', { bubbles: true }));
      })
      .click('#zipcode')
      .setValue('#zipcode', '1020')
      .click('#city')
      .setValue('#city', 'Vienna')
      .click('#occupation')
      .setValue('#occupation', 'Employee')
      .execute(function() {
        document.querySelector('#occupation').dispatchEvent(new Event('change', { bubbles: true }));
      })
      .execute(function() {
        document.querySelector('input[type="checkbox"][value="Speeding"]').click();
      })
      .click('#website')
      .setValue('#website', 'www.google.com')
      .pause(1000)
      .click('#nextenterproductdata')
      .waitForElementVisible('#startdate', 1000);

    browser
      .click('#startdate')
      .setValue('#startdate', '07/30/2024')
      .click('#insurancesum')
      .setValue('#insurancesum', '3000000')
      .execute(function() {
        document.querySelector('#insurancesum').dispatchEvent(new Event('change', { bubbles: true }));
      })
      .click('#meritrating')
      .setValue('#meritrating', 'Bonus 2')
      .execute(function() {
        document.querySelector('#meritrating').dispatchEvent(new Event('change', { bubbles: true }));
      })
      .click('#damageinsurance')
      .setValue('#damageinsurance', 'Full Coverage')
      .execute(function() {
        document.querySelector('#damageinsurance').dispatchEvent(new Event('change', { bubbles: true }));
      })
      .execute(function() {
        document.getElementById('EuroProtection').click();
        document.getElementById('EuroProtection').dispatchEvent(new Event('change', { bubbles: true }));
      })
      .execute(function() {
        const courtesyCarSelect = document.querySelector('#courtesycar');
        const option = document.createElement('option');
        option.value = 'No';
        option.text = 'No';
        courtesyCarSelect.appendChild(option);
        courtesyCarSelect.value = 'No';
        const event = new Event('change', { bubbles: true });
        courtesyCarSelect.dispatchEvent(event);
      })
      .pause(2000)
      .click('#nextselectpriceoption')
      .waitForElementVisible('#selectultimate', 1000);

    browser
      .waitForElementVisible('input[name="Select Option"]', 1000)
      .pause(1000)
      .execute(function() {
        const goldOption = document.querySelector('input#selectgold');
        goldOption.click();
        goldOption.dispatchEvent(new Event('change', { bubbles: true }));
      })
      .pause(2000)
      .assert.elementPresent('input#selectgold:checked', 'Gold option should be selected')
      .click('#nextsendquote')
      .waitForElementVisible('#email', 1000);

    browser
      .click('#email')
      .setValue('#email', '2310781023@fh-burgenland.at')
      .click('#phone')
      .setValue('#phone', '1234567890')
      .click('#username')
      .setValue('#username', 'johndoe')
      .click('#password')
      .setValue('#password', 'DevOps2024')
      .click('#confirmpassword')
      .setValue('#confirmpassword', 'DevOps2024')
      .click('#Comments')
      .setValue('#Comments', 'DevOps2024-Gruppe E :)')
      .pause(1000)
      .click('#sendemail')
      .pause(10000)
      .end();
  },
};
