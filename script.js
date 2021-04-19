var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password")
generateBtn.addEventListener("click", writePassword);

var passwordLength = 0

function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.innerText = '';
  var userSelections = userDefinedParams();
  generatePassword(userSelections);
}

function userDefinedParams() {

  var retry = true;
  while (retry) {
    passwordLength = window.prompt(`Welcome to the Password Generator\nEnter the desired length of the password (8 - 128 characters)`)
    while (passwordLength < 8 || passwordLength > 128) {
      window.alert(`Number of characters entered  (${passwordLength}) is invalid.  Please enter again`)
      passwordLength = window.prompt(`Welcome to the Password Generator\nEnter the desired length of the password (8 - 128 characters)`)
    }
    
    var charSelectLc = window.prompt(`Include lowercase alphabetic characters?\nEnter "y" (for "Yes, include")\nEnter "n" (for "No, do not include")`).toUpperCase() || 'N'
      console.log(`Lowercase characters were specified?  ${charSelectLc}`)
      while (charSelectLc !== 'Y' && charSelectLc !== 'N') {
        window.alert(`User entered ${charSelectLc} which is not a valid selection\nPlease enter selection again`)
        charSelectLc = window.prompt(`Include lowercase alphabetic characters?\nEnter "y" (for "Yes, include")\nEnter "n" (for "No, do not include")`).toUpperCase() || 'N'
      }

    charSelectUc = window.prompt(`Include uppercase alphabetic characters?\nEnter "y" (for "Yes, include")\nEnter "n" (for "No, do not include")`).toUpperCase() || 'N'
      console.log(`Uppercase characters were specified?  ${charSelectUc}`)
      while (charSelectUc !== 'Y' && charSelectUc !== 'N') {
        window.alert(`User entered ${charSelectUc} which is not a valid selection\nPlease enter selection again`)
        charSelectUc = window.prompt(`Include uppercase alphabetic characters?\nEnter "y" (for "Yes, include")\nEnter "n" (for "No, do not include")`).toUpperCase() || 'N'
      }

    charSelectNum = window.prompt(`Include numeric characters?\nEnter "y" (for "Yes, include")\nEnter "n" (for "No, do not include")`).toUpperCase() || 'N'
      console.log(`Numeric characters were specified?  ${charSelectNum}`)
      while (charSelectNum !== 'Y' && charSelectNum !== 'N') {
        window.alert(`User entered ${charSelectNum} which is not a valid selection\nPlease enter selection again`)
        charSelectnum = window.prompt(`Include numeric characters?\nEnter "y" (for "Yes, include")\nEnter "n" (for "No, do not include")`).toUpperCase() || 'N'
      }

    charSelectSpec = window.prompt(`Include special characters? (!"#$%&'()*+,-./:;<=>?@[^_ etc.)\nEnter "y" (for "Yes, include")\nEnter "n" (for "No, do not include")`).toUpperCase() || 'N'
      console.log(`Special characters were specified?  ${charSelectSpec}`)
      while (charSelectSpec !== 'Y' && charSelectSpec !== 'N') {
        window.alert(`User entered ${charSelectSpec} which is not a valid selection\nPlease enter selection again`)
        charSelectSpec = window.prompt(`Include special characters? (!"#$%&'()*+,-./:;<=>?@[^_ etc.)\nEnter "y" (for "Yes, include")\nEnter "n" (for "No, do not include")`).toUpperCase() || 'N'
      }

    var userDefinedParamsAll = [charSelectLc, charSelectUc, charSelectNum, charSelectSpec]
    retry = false
    return userDefinedParamsAll
  }
}

function generatePassword(userSelections) {

  // LIBRARY
  var charLowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  var charUpperCase = charLowerCase.map(function (i) {
    return i.toUpperCase()
  });
  var charNumeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  var charSpecial = ['\"', '!', '#', '$', '%', '&', '\'', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~']

  var randParamList = []
  var randChar = ''
  var finalPw = ''

  for (var i = 0; i < userSelections.length; i++) {
    if (userSelections[i] === 'Y') {
      randParamList.push([i])
    }
  }

  for (var i = 0; i < passwordLength; i++) {
    var randParam = randParamList[Math.floor(Math.random() * randParamList.length)]

    if (randParam == 0) {
      randChar = charLowerCase[Math.floor(Math.random() * charLowerCase.length)]
    } else if (randParam == 1) {
      randChar = charUpperCase[Math.floor(Math.random() * charUpperCase.length)]
    } else if (randParam == 2) {
      randChar = charNumeric[Math.floor(Math.random() * charNumeric.length)]
    } else if (randParam == 3) {
      randChar = charSpecial[Math.floor(Math.random() * charSpecial.length)]
    } else {
      window.alert(`Something went wrong in \"passwordGeneration\".  Please refresh and try again`)
      console.log(`Something went wrong in \"passwordGeneration\".  Please refresh and try again`)
      break;
    }
    finalPw += randChar
  }
  passwordText.innerText = finalPw
}