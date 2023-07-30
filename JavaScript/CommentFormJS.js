const textarea = document.querySelector("textarea");
        textarea.addEventListener("input", () => {
            textarea.style.height = "auto";
            let scHeight = textarea.scrollHeight;
            textarea.style.height = `${scHeight}px`;
        });


        const validValues = ["Poor", "Fair", "Better", "Good", "Excellent"];
        const rangeInput = document.getElementById('restrictedRangeInput');
        const rangeValueDisplay = document.getElementById('rangeValue');

        rangeInput.addEventListener('input', () => {
            const currentValue = parseInt(rangeInput.value);

            rangeValueDisplay.textContent = validValues[currentValue - 1];
        });