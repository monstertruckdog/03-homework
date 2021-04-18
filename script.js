// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = 0
var passwordText = document.querySelector("#password")

// var passwordDisplay = document.getElementById("password")
// passwordText.setAttribute()
// Write password to the #password input

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// passwordText.innerText = ''
function writePassword() {
  console.log(`TEST | writePassword HAS BEEN EXECUTED!`)
  var passwordText = document.querySelector("#password")
  passwordText.innerText = ''
  var userSelections = userDefinedParams();
  console.log(`TEST | FROM writePassword | ALL PARAMETERS:  ${userSelections}`)
  console.log(`TEST | userDefinedParams HAS BEEN EXECUTED`)
  var passwordText = document.querySelector("#password");
  var password = generatePassword(userSelections);
  


}



function userDefinedParams() {
  console.log(`TEST | generatePassword HAS BEEN INITIATED`)

  var retry = true;
  while (retry) {
    console.log(`TEST | while LOOP HAS BEEN INITIATED`)
    passwordLength = window.prompt(`Welcome to the Password Generator\nEnter the desired length of the password (8 - 128 characters)`)
    console.log(`TEST | passwordLength ENTERED - ${passwordLength}`)
    while (passwordLength < 8 || passwordLength > 128) {
      console.log(`TEST | throw error for invalid number of characters`)
      window.alert(`Number of characters entered  (${passwordLength}) is invalid.  Please enter again`)
      passwordLength = window.prompt(`Welcome to the Password Generator\nEnter the desired length of the password (8 - 128 characters)`)
    }
    console.log(`TEST | NUMBER OF CHAR while LOOP SUCCESS!`)
    
    // Lowercase parameter validation
    var charSelectLc = window.prompt(`Include lowercase alphabetic characters?\nEnter "y" (for "Yes, include")\nEnter "n" (for "No, do not include")`).toUpperCase() || 'N'
    console.log(`TEST | LENGTH OF charSelectLc:  ${charSelectLc.length}`)
    while (charSelectLc !== 'Y' && charSelectLc !== 'N') {
      console.log(`TEST | throw error for invalid character entry`)
      window.alert(`User entered ${charSelectLc} which is not a valid selection\nPlease enter selection again`)
      charSelectLc = window.prompt(`Include lowercase alphabetic characters?\nEnter "y" (for "Yes, include")\nEnter "n" (for "No, do not include")`).toUpperCase() || 'N'
    }
    console.log(`TEST | CURRENT VALUE OF charSelectLc:  ${charSelectLc}`)
    console.log(`TEST | LOWERCASE ALPHABETIC CHAR while LOOP SUCCESS`)

    // Uppercase parameter validation
    charSelectUc = window.prompt(`Include uppercase alphabetic characters?\nEnter "y" (for "Yes, include")\nEnter "n" (for "No, do not include")`).toUpperCase() || 'N'
    if (charSelectUc === "" || charSelectUc === null) {
      charSelectUc === 'N'
    } else {
      console.log(`TEST | uppercase - ${charSelectUc}`)
      while (charSelectUc !== 'Y' && charSelectUc !== 'N') {
        console.log(`TEST | throw error for invalid character entry`)
        window.alert(`User entered ${charSelectUc} which is not a valid selection\nPlease enter selection again`)
        charSelectUc = window.prompt(`Include uppercase alphabetic characters?\nEnter "y" (for "Yes, include")\nEnter "n" (for "No, do not include")`).toUpperCase() || 'N'
      }
    }
    console.log(`TEST | CURRENT VALUE OF charSelectLc:  ${charSelectLc}`)
    console.log(`TEST | UPPERCASE ALPHABETIC CHAR while LOOP SUCCESS`)

    // Numeric parameter validation
    charSelectNum = window.prompt(`Include numeric characters?\nEnter "y" (for "Yes, include")\nEnter "n" (for "No, do not include")`).toUpperCase() || 'N'
    if (charSelectNum === "" || charSelectNum === null) {
      charSelectNum === 'N'
    } else {
      console.log(`TEST | numeric - ${charSelectNum}`)
      while (charSelectNum !== 'Y' && charSelectNum !== 'N') {
        console.log(`TEST | throw error for invalid character entry`)
        window.alert(`User entered ${charSelectNum} which is not a valid selection\nPlease enter selection again`)
        charSelectnum = window.prompt(`Include numeric characters?\nEnter "y" (for "Yes, include")\nEnter "n" (for "No, do not include")`).toUpperCase() || 'N'
      }
    }
    console.log(`TEST | NUMERIC CHAR while LOOP SUCCESS`)

    // Special character parameter validation
    charSelectSpec = window.prompt(`Include special characters? (!"#$%&'()*+,-./:;<=>?@[^_ etc.)\nEnter "y" (for "Yes, include")\nEnter "n" (for "No, do not include")`).toUpperCase() || 'N'
    if (charSelectSpec === "" || charSelectSpec === null) {
      charSelectSpec === 'N'
    } else {
      console.log(`TEST | special - ${charSelectSpec}`)
      while (charSelectSpec !== 'Y' && charSelectSpec !== 'N') {
        console.log(`TEST | throw error for invalid character entry`)
        window.alert(`User entered ${charSelectSpec} which is not a valid selection\nPlease enter selection again`)
        charSelectSpec = window.prompt(`Include special characters? (!"#$%&'()*+,-./:;<=>?@[^_ etc.)\nEnter "y" (for "Yes, include")\nEnter "n" (for "No, do not include")`).toUpperCase() || 'N'
      }
    }
    console.log(`TEST | SPECIAL CHAR while LOOP SUCCESS`)

    // FINAL RESULTS
    console.log(`TEST | LOWERCASE:  ${charSelectLc}`)
    console.log(`TEST | UPPERCASE:  ${charSelectUc}`)
    console.log(`TEST | NUMERIC:    ${charSelectNum}`)
    console.log(`TEST | SPECIAL:    ${charSelectSpec}`)

    var userDefinedParamsAll = [charSelectLc, charSelectUc, charSelectNum, charSelectSpec]
    retry = false
    return userDefinedParamsAll
  }
}

function generatePassword(userSelections) {
  console.log(`TEST | FROM generatePassword | ALL PARAMETERS:  ${userSelections}`)
  console.log(`TEST | FROM generatePassword | passwordLength:  ${passwordLength}`)
  // LIBRARY
  var parameters = ['LC', 'UC', 'NUM', 'SPC']
  var charLowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  var charUpperCase = charLowerCase.map(function (i) {
    return i.toUpperCase()
  });
  var charNumeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  var charSpecial = ['\"', '!', '#', '$', '%', '&', '\'', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~']
  console.log(`TEST | FROM generatePassword | DISPLAY charLowerCase AND charUpperCase TO VERIFY toUpperCase METHOD WORKS:`)

  console.log(`TEST | FROM generatePassword | charLowerCase:  ${charLowerCase}`)
  console.log(`TEST | FROM generatePassword | charUpperCase:  ${charUpperCase}`)
  console.log(`TEST | FROM generatePassword | charNumeric:  ${charNumeric}`)
  console.log(`TEST | FROM generatePassword | charSpecial:  ${charSpecial}`)

  // var stagingPwA
  // var randLc = ''
  // var randUc = ''
  // var randNum = ''
  //var randSpecial = ''
  var randParamList = []
  var randChar = ''
  var finalPw = ''
  /* var stagingPwA = Math.floor(Math.random() * charLowerCase.length)
  var stagingPwB = charLowerCase[stagingPwA]
  passwordText.innerText = stagingPwB;
  */
  
  console.log(`TEST | FROM generatePassword | passwordLength:  ${passwordLength}`)

  for (var i = 0; i < userSelections.length; i++) {
    if (userSelections[i] === 'Y') {
      randParamList.push([i])
    }
  }
  console.log(`TEST | FROM generatePassword | userSelections:  ${randParamList}`)
  console.log(`TEST | FROM generatePassword | userSelections:  ${typeof(randParamList)}`)
  /*
  if (userSelections[0] === 'Y') {
    randParamList.push
  } else if (userSelections[1] === 'Y') {
    randParamList.push[1]
  } else if (userSelections[2] === 'Y') {
    randParamList.push[2]
  */

  for (var i = 0; i < passwordLength; i++) {
    /* console.log(`TEST | FROM generatePassword > FIRST LOOP | I VALUE:  ${i}`)
    for (var i = 0; i < userSelections; i++) {
      if (userSelections[i] === 'Y') {
        randParamList.push[i]
        console.log(`TEST | FROM generatePassword | randParamList:  ${randParamList}`)
      }
    }
    if (userSelections[i] === 'Y' && i === 0) {
      randLc = charLowerCase[Math.floor(Math.random() * charLowerCase.length)]
      console.log(`TEST | FROM generatePassword | randLc:  ${randLc}`)
    } else if (userSelections[i] === 'Y' && i === 1) {
      randUc = charUpperCase[Math.floor(Math.random() * charUpperCase.length)]
      console.log(`TEST | FROM generatePassword | randUc:  ${randUc}`)
    } else if (userSelections[i] === 'Y' && i === 2) {
      randNum = charNumeric[Math.floor(Math.random() * charNumeric.length)]
      console.log(`TEST | FROM generatePassword | randNum:  ${randNum}`)
    } else if (userSelections[i] === 'Y' && i === 3) {
      randSpecial = charSpecial[Math.floor(Math.random() * charSpecial.length)]
      console.log(`TEST | FROM generatePassword | randSpecial:  ${randSpecial}`)
    }
    var randParam = randParamList[Math.floor(Math.random() * randParamList.length)]

    finalPw += userSelections[randParam]
    }
    // var index = Math.floor(Math.random() * charLowerCase.length)
    // var stagingPwA = charLowerCase[index];
    // console.log(`TEST | FROM for LOOP | stagingPwA:  ${randLc}`)
    // stagingPwB += stagingPwA
    // console.log(`TEST | FROM for LOOP | stagingPwB:  ${randLc}`)
    console.log(`TEST | FROM for LOOP | finalPw:  ${finalPw}`)
    */
    var randParam = randParamList[Math.floor(Math.random() * randParamList.length)]
    console.log(`TEST | FROM generatePassword | RANDOMLY SELECTED PARAMETER CATEGORY INDEX VALUE (193):  ${randParam}`)
    console.log(`TEST | FROM generatePassword | userSelections:  ${userSelections}`)
    console.log(`TEST | FROM generatePassword | userSelections @ INDEX randParam:  ${userSelections[randParam]}`)
    console.log(`TEST | FROM generatePassword | randChar:  ${randChar}`)
    console.log(`TEST | FROM generatePassword | randParam (197):  ${randParam}`)
    if (randParam == 0) {
      console.log(`TEST | FROM generatePassword | CATCH | randParam IS 0`)
      randChar = charLowerCase[Math.floor(Math.random() * charLowerCase.length)]
      console.log(`TEST | FROM generatePassword | randLc:  ${randChar}`)
    } else if (randParam == 1) {
      console.log(`TEST | FROM generatePassword | CATCH | randParam IS 1`)
      randChar = charUpperCase[Math.floor(Math.random() * charUpperCase.length)]
      console.log(`TEST | FROM generatePassword | randUc:  ${randChar}`)
    } else if (randParam == 2) {
      console.log(`TEST | FROM generatePassword | CATCH | randParam IS 2`)
      randChar = charNumeric[Math.floor(Math.random() * charNumeric.length)]
      console.log(`TEST | FROM generatePassword | randNum:  ${randChar}`)
    } else if (randParam == 3) {
      console.log(`TEST | FROM generatePassword | CATCH | randParam IS 3`)
      randChar = charSpecial[Math.floor(Math.random() * charSpecial.length)]
      console.log(`TEST | FROM generatePassword | randSpecial:  ${randChar}`)
    } else {
      console.log(`TEST | FROM generatePassword | THIS DID NOT WORK`)
      console.log(`TEST | FROM generatePassword | THIS DID NOT WORK | randParam (216):  ${randParam}`)
    }
    console.log(`TEST | FROM generatePassword | randChar  ${randChar}`)
    finalPw += randChar
    // randChar += finalPw
  // passwordText.innerText = finalPw
  }
  passwordText.innerText = finalPw
}