let inputfield1 = document.getElementById("inputfield1");
        let inputfield2 = document.getElementById("inputfield2");

        function add() {
            let num1 = parseInt(inputfield1.value);
            let num2 = parseInt(inputfield2.value);
            let result = num1 + num2;

            var output = document.getElementById("output");

            output.innerText = "Result: " + result;

        }

        function minus() {
            let num1 = parseInt(inputfield1.value);
            let num2 = parseInt(inputfield2.value);
            let result = num1 - num2;

            var output = document.getElementById("output");

            output.innerText = "Result: " + result;

        }

        function multiply() {
            let num1 = parseInt(inputfield1.value);
            let num2 = parseInt(inputfield2.value);
            let result = num1 * num2;

            var output = document.getElementById("output");

            output.innerText = "Result: " + result;

        }

        function divide() {
            let num1 = parseInt(inputfield1.value);
            let num2 = parseInt(inputfield2.value);
            let result = num1 / num2;

            var output = document.getElementById("output");

            output.innerText = "Result: " + result;

        }