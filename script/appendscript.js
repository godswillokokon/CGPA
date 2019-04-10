let numOfCourse = 0;

let main = document.querySelector(".main")

function send()
{
    let range = document.getElementById('range');
    let courseGp = document.getElementById('courseGp');
    let unit = document.getElementById('courseUnit');

    // let noOfCourse = document.getElementById('noOfCourse');
    // courseGp.innerHTML = "";
    unit.innerHTML = "";
    noOfCourse.innerHTML = "";
    numOfCourse = range.options[range.selectedIndex].text;
    // numOfCourse = range;
    // numOfCourse = parseInt(range.options[range.selectedIndex].number);

    for (let i = 1; i <= numOfCourse; i++)
    {

        let createPara = document.createElement('P');
        createPara.innerHTML = "Course "+ i ;
        let createSelect = document.createElement('SELECT');
        createSelect.setAttribute("id", "course" + i);


        let option1 = document.createElement("OPTION");
        option1.innerHTML = "select your course grade.";
        option1.setAttribute("disabled", "true");
        let option2 = document.createElement("OPTION");
        option2.innerHTML = "A";
        let option3 = document.createElement("OPTION");
        option3.innerHTML = "B";
        let option4 = document.createElement("OPTION");
        option4.innerHTML = "C";
        let option5 = document.createElement("OPTION");
        option5.innerHTML = "D";
        let option6 = document.createElement("OPTION");
        option6.innerHTML = "F";

        createSelect.appendChild(option1);
        createSelect.appendChild(option2);
        createSelect.appendChild(option3);
        createSelect.appendChild(option4);
        createSelect.appendChild(option5);
        createSelect.appendChild(option6);

        courseGp.appendChild(createPara);
        courseGp.appendChild(createSelect);

        let unitPara = document.createElement('P');
        unitPara.innerHTML = "Unit "+i;
        let unitSelect = document.createElement('SELECT');
        unitSelect.setAttribute('id', 'unit'+ i);

        let optionUnit1 = document.createElement('OPTION');
        optionUnit1.innerHTML = "1";
        let optionUnit2 = document.createElement('OPTION');
        optionUnit2.innerHTML = "2";
        let optionUnit3 = document.createElement('OPTION');
        optionUnit3.innerHTML = "3";
        let optionUnit4 = document.createElement('OPTION');
        optionUnit4.innerHTML = "4";
        let optionUnit5 = document.createElement('OPTION');
        optionUnit5.innerHTML = "6";

        unitSelect.appendChild(optionUnit1);
        unitSelect.appendChild(optionUnit2);
        unitSelect.appendChild(optionUnit3);
        unitSelect.appendChild(optionUnit4);
        unitSelect.appendChild(optionUnit5);
        // unitSelect.appendChild(optionUnit6);

        unit.appendChild(unitPara);
        unit.appendChild(unitSelect);

   }
   let button = document.createElement('button');
   button.setAttribute("onclick", "calculate()");
   button.innerHTML = "Calculate";
   main.appendChild(button);


}

function calculate()
{

    let gp = 0;
    let totalCredit = 0;
    let totalGp = 0;
    for (let i = 1; i <= numOfCourse; i++)
    {
      let courseGrade = document.getElementById("course"+ i);
      let gradeValue = courseGrade.options[courseGrade.selectedIndex].text;

      let courseUnit = document.getElementById("unit"+ i);
      let unitValue = parseInt(courseUnit.options[courseUnit.selectedIndex].text);
      switch (gradeValue)
      {
        case "A":
          gp += 5*unitValue;
          break;
        case "B":
          gp += 4*unitValue;
          break;
        case "C":
          gp += 3*unitValue;
          break;
        case "D":
          gp += 2*unitValue;
          break;
        case "F":
          gp += 0;
          break;
      }
      totalCredit +=unitValue;
    }
    totalGp = gp/totalCredit;
    // approximate to 2
    let fixedgp = totalGp.toFixed(2);
    // document.write("Your GP is"+fixedgp);
    // let output = document.getElementById('output');
    // output.innerHTML = 'Your GP is '+ fixedgp;
    alert('Your GP is '+ fixedgp);

}

