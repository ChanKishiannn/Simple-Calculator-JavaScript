const display = document.getElementById("display");
const buttons = document.querySelectorAll(".arithemeticButtons button");
const clearBtn = document.querySelector(".clearButton");


  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const value = button.textContent;

      if(value === "="){
        try{
          const expression = display.textContent.replace(/x/g, "*").replace(/÷/g, "/");

          display.textContent = eval(expression);
        }catch{
          display.textContent ="Error";
        }
        return;
      }
      display.textContent += value;
    });
  });

  clearBtn.addEventListener("click", () => {
    display.textContent = "";
  });
