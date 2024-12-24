    let mainContainer = document.getElementById("main-container");
    let eligibilityForm = document.getElementById("eligibility-form");
    let eligibilitySection = document.getElementById("eligibility-section");
    let eligibilityButton = document.getElementById("eligiblity-btn");
    let registrationButton = document.getElementById("registration-btn");
    let registrationSection = document.getElementById("registration-section");
    registrationSection.hidden = true;
    let EligibilityDecision = document.createElement("h3");
    eligibilitySection.appendChild(EligibilityDecision);
    
    eligibilityButton.addEventListener("click", (event) => {
      let nameInput = document.getElementById("full-name").value;
      let ageInput = document.getElementById("age").value;
      //if else condition to check validitity of form - required fields are filled or not
      if (eligibilityForm.checkValidity()) {
        event.preventDefault();
        // form is valid
        // if, elseif, else conditions required to check if age is valid or not
        if (ageInput >= 18) {
          EligibilityDecision.innerText = `Hi! 🙋‍♀️ ${nameInput}, you are eligible to vote ✅🎉`;
          EligibilityDecision.style.color = "blue";
          EligibilityDecision.style.textAlign = "center";
          registrationSection.hidden = false;
        } else if (ageInput <= 0) {
          EligibilityDecision.innerText = `⚠ You entered invalid age`;
          EligibilityDecision.style.color = "#ef4444";
          EligibilityDecision.style.textAlign = "center";
          registrationSection.hidden = true;
        } else {
          EligibilityDecision.innerText = `Hi! ${nameInput}, you're minor. Wait ${
            18 - ageInput
          } years more!`;
          EligibilityDecision.style.color = "#ef4444";
          EligibilityDecision.style.textAlign = "center";
          registrationSection.hidden = true;
        }

      } else {
        EligibilityDecision.innerText = "Fill the required fields*";
        EligibilityDecision.style.textAlign = "center";
        EligibilityDecision.style.color = "#ef4444";
      }
    });

    registrationButton.addEventListener("click", (event) => {
      event.preventDefault();
      let firstName = document.getElementById("first-name").value;
      eligibilitySection.hidden = true;
      registrationSection.hidden = true;
      let formSubmissionText = document.createElement("h2");
      formSubmissionText.innerText = `🎉🎉Congratulations! ${firstName}, your registration form has been submitted.`;
      mainContainer.appendChild(formSubmissionText);
    });