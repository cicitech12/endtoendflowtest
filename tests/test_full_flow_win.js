//const path = require('path');

module.exports = {
  "Complete End-to-End Flow": function (browser) {
    const courtesyCarValue = process.env.COURTESYCAR || 'No';  // Default to 'No' if not set
    
    /*******************************************************************************************************************************************************************************************
    ***************************************************** START BROWSER ************************************************************************************************************************
    *******************************************************************************************************************************************************************************************/
      browser
      .resizeWindow(1024, 1080)                           // Größe des Browserfensters festlegen
      .url('https://sampleapp.tricentis.com/101')         // Navigiert zur Startseite
      .waitForElementVisible('body', 1000)                // Wartet darauf, dass das Body-Element sichtbar wird, um sicherzustellen, dass die Seite geladen ist
      .click('#nav_automobile')                           // Klickt auf den Link "Automobile Insurance", um die entsprechende Seite zu öffnen
      .waitForElementVisible('#entervehicledata', 1000)   // Wartet darauf, dass das Element für Fahrzeugdaten sichtbar wird
      .pause(500);                                        // Kurze Pause, um sicherzustellen, dass die Seite geladen ist
      
      /*******************************************************************************************************************************************************************************************
      *********************************************** ENTER VEHICLE DATA *************************************************************************************************************************
      *******************************************************************************************************************************************************************************************/
      browser
      .setValue('#make', 'Mercedes Benz')                  // Auswahl: Audi, BMW, Ford, Honda, Mercedes Benz, Nissan, Opel, Porsche, Renault, Suzuki, Toyota, Volkswagen, Volvo                 
      .setValue('#engineperformance', 50)                 // Der Wert muss zwischen 1 und 2000 liegen
      .setValue('#dateofmanufacture', '05/21/2020')       // Setzt das Herstellungsdatum: MM/DD/YYYY
      .setValue('#numberofseats', '4')                    // Auswahl: 1-9
     
      .setValue('#fuel', 'Petrol')                        // Auswahl: Petrol, Diesel, Electric Power, Gas, Other
      .setValue('#listprice', '30000')                    // Der Wert muss zwischen 500 und 100000 liegen                    
      .setValue('#licenseplatenumber', 'AB123CD')         // Der Wert muss unter 10 Zeichen liegen 
      .setValue('#annualmileage', '15000')                // Der Wert muss zwischen 100 und 100000 liegen  
      .pause(2000)                                        // Eine kurze Pause, um sicherzustellen, dass die Eingaben verarbeitet werden                                               
      .click('#nextenterinsurantdata')                    // Klickt auf "Weiter" um zur Insurant Data-Seite zu gelangen 
      .waitForElementVisible('#firstname', 3000);         // Wartet darauf, dass das Vorname-Feld sichtbar wird  
      
      /*******************************************************************************************************************************************************************************************
      *********************************************** ENTER INSURANT DATA ************************************************************************************************************************
      *******************************************************************************************************************************************************************************************/
      browser
      .setValue('#firstname', 'Cici')                     
      .setValue('#lastname', 'Cny')                       
      .setValue('#birthdate', '01/01/1991')              // Sie müssen zwischen 18 und 70 Jahre alt sein 
      .execute(function() {                              // Auswahl: gendermale, genderfemale                           
        const genderOption = document.querySelector('input#genderfemale');    
        genderOption.click();
      })
      .setValue('#streetaddress', 'Campus 1')             
      .setValue('#country', 'Austria')                  // Auswahl alle Länder auf Englischen Sprache 
      .setValue('#zipcode', '1020')                     // Der Wert muss zwischen 4 und 8 liegen           
      .setValue('#city', 'Vienna')                        
      .setValue('#occupation', 'Employee')              // Kann folgende Werte annehmen: Employee, Public Official, Farmer, Unemployed, Selfemployed      
      .execute(function() {                            
        document.querySelector('input[type="checkbox"][value="Speeding"]').click();   // Auswahl: Speeding, Bungee Jumping, Cliff Diving, Skydiving, Other 
      })
      .setValue('#website', 'www.google.com')          // Setzt die Website auf www.google.com
      
      .pause(1000)                                     // Wartet, um sicherzustellen, dass der Upload verarbeitet wird
      .click('#nextenterproductdata')                  // Klickt auf "Weiter" um zur Product Data-Seite zu gelangen
      .waitForElementVisible('#startdate', 1000);      // Warten bis Product Data sichtbar ist

      /*******************************************************************************************************************************************************************************************
      *********************************************** ENTER PRODUCT DATA *************************************************************************************************************************
      *******************************************************************************************************************************************************************************************/
      browser
      .setValue('#startdate', '07/30/2024')                             // Setzt das Startdatum: MM/DD/YYYY => muss 30 Tage in der Zukunft liegen
      .setValue('#insurancesum', '3000000')                             // Auswahl: 3000000, 5000000, 7000000, 10000000, 15000000, 20000000, 25000000, 30000000
      .setValue('#meritrating', 'Bonus 2')                              // Auswahl: Bonus 1-17
      .setValue('#damageinsurance', 'Full Coverage')                    // Auswahl: No Coverage, Partial Coverage, Full Coverage
      .execute(function() {                                             // Auswahl: Euro Protection, Legal Defense Insurance              
          document.getElementById('EuroProtection').click();            
      })
      .setValue('#courtesycar', courtesyCarValue)                      
      //.setValue('#courtesycar', 'No')                                   // Checkbox für Euro Protection aktivieren mit Yes oder No    VALIDIERUNG
      .pause(2000)                                                      // Kurze Pause, um sicherzustellen, dass die Seite geladen ist
      .click('#nextselectpriceoption')
      .waitForElementVisible('#selectultimate', 1000);                  // Warten bis Price Option sichtbar ist

      /*******************************************************************************************************************************************************************************************
      *********************************************** SELECT PRICE OPTION ************************************************************************************************************************
      *******************************************************************************************************************************************************************************************/
      browser
      .waitForElementVisible('input[name="Select Option"]', 1000)
      .pause(1000);                                                   // Kurze Pause, um sicherzustellen, dass das Element vollständig geladen ist
      /*
      // Auswahl der Silver-Option
      browser
        .execute(function() {
          const silverOption = document.querySelector('input#selectsilver');        // Wählt die Silver-Option aus
          silverOption.click();
        })
        .pause(2000)                                                // Kurze Pause, um sicherzustellen, dass der Klick registriert wird
        .assert.elementPresent('input#selectsilver:checked', 'Silver option should be selected');
      */
      
      // Auswahl der Gold-Option
      browser
        .execute(function() {                                      
          const goldOption = document.querySelector('input#selectgold');         // Wählt die Gold-Option aus
          goldOption.click();
        })
        .pause(2000) // Kurze Pause, um sicherzustellen, dass der Klick registriert wird
        .assert.elementPresent('input#selectgold:checked', 'Gold option should be selected');
      
      /*
      // Auswahl der Platinum-Option
      browser
      .execute(function() {
        const platinumOption = document.querySelector('input#selectplatinum');  // Wählt die Platinum-Option aus
        goldOption.click();
      })
      .pause(2000) // Kurze Pause, um sicherzustellen, dass der Klick registriert wird
      .assert.elementPresent('input#selectplatinum:checked', 'Platinum option should be selected');

      // Auswahl der Ultimate-Option
      browser
      .execute(function() {
        const ultimateOption = document.querySelector('input#selectultimate'); // Wählt die Ultimate-Option aus
        goldOption.click();
      })
      .pause(2000) // Kurze Pause, um sicherzustellen, dass der Klick registriert wird
      .assert.elementPresent('input#selectultimate:checked', 'Ultimate option should be selected');
      */
      browser
        .click('#nextsendquote')                                      // Klickt auf "Weiter" um zur Send Quote-Seite zu gelangen               
        .waitForElementVisible('#email', 1000);                       // Warten bis das Send Quote sichtbar ist

     /*******************************************************************************************************************************************************************************************
     *********************************************** SEND QUOTE ************************************************************************************************************************
     *******************************************************************************************************************************************************************************************/
      browser
      .setValue('#email', '2310781023@fh-burgenland.at')
      .setValue('#phone', '1234567890')
      .setValue('#username', 'johndoe')
      .setValue('#password', 'DevOps2024')
      .setValue('#confirmpassword', 'DevOps2024')
      .click('#sendemail')
      .setValue('#Comments', 'DevOps2024-Gruppe E :)')
      .pause(10000)                                                 // Zusätzliche Wartezeit hinzufügen
      
      /*
      .execute(function() {
      return document.documentElement.outerHTML;  // Geben Sie den gesamten DOM-Inhalt zurück
      }, [], function(result) {
      console.log('DOM Content after sending email: ', result.value);
      }) */

      .end();
},
};