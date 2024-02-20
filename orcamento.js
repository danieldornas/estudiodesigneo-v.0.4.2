document.addEventListener("DOMContentLoaded", function () {
    const progressBar = document.getElementById("progress-bar");
    const formContent = document.getElementById("form-content");

    const steps = document.querySelectorAll(".step");
    steps.forEach((step, index) => {
        step.addEventListener("click", () => showStep(index + 1));
    });

    function showStep(stepNumber) {
        steps.forEach((step, index) => {
            step.classList.remove("active");
            if (index + 1 === stepNumber) {
                step.classList.add("active");
            }
        });

        // Carregue o conteúdo do formulário com base no número da etapa
        loadFormContent(stepNumber);
    }

    function loadFormContent(stepNumber) {
        // Lógica para carregar o conteúdo do formulário com base no número da etapa
        // Isso pode ser feito usando AJAX, ou inserindo diretamente o HTML no DOM
        // Dependendo da complexidade do seu formulário
        // Aqui está um exemplo simples:
        formContent.innerHTML = `<h2>Conteúdo do passo ${stepNumber}</h2>`;
        formContent.innerHTML += "<button onclick='prevStep()'>Voltar</button>";
        formContent.innerHTML += "<button onclick='nextStep()'>Avançar</button>";
    }

    window.prevStep = function () {
        const currentStep = Array.from(steps).findIndex((step) => step.classList.contains("active")) + 1;
        showStep(currentStep - 1);
    };

    window.nextStep = function () {
        const currentStep = Array.from(steps).findIndex((step) => step.classList.contains("active")) + 1;
        showStep(currentStep + 1);
    };

    // Inicialmente, mostra a primeira etapa
    showStep(1);
});

window.onload = function () {
    var windowWidth = window.innerWidth;
    var elementWidth = 220;
    var parentElSelector = '.image-ticker ul';
    var elSelector = 'li';
    var parentEl = document.querySelector(parentElSelector);
    var itemEls = parentEl.querySelectorAll(elSelector);

    // Loop infinito
    while (true) {
        var numElToAppend = Math.ceil(windowWidth / elementWidth) * 1;

        if (numElToAppend > itemEls.length) {
            var numElToAppendFraction = numElToAppend / itemEls.length;
            var fullRepeat = Math.floor(numElToAppendFraction);
            var partialRepeat = Math.ceil((numElToAppendFraction - fullRepeat) * 100000);
        }

        for (var i = 0; i < fullRepeat; i++) {
            for (var j = 0; j < itemEls.length; j++) {
                parentEl.appendChild(itemEls[j].cloneNode(true));
            }
        }

        var itemsToAppend = Array.prototype.slice.call(itemEls, 0, partialRepeat);
        for (var i = 0; i < itemsToAppend.length; i++) {
            console.log(itemsToAppend[i]);
            parentEl.appendChild(itemsToAppend[i].cloneNode(true));
        }
    }
};

