
const classicalAlgorithmDiv = {
    fetchName: "classical-algorithm",
    displayTitle: "Classical Algorithms",
    bodyContent: ""
};

const quantumAlgorithmDiv = {
    fetchName: "quantum-algorithm",
    displayTitle: "Quantum Algorithms",
    bodyContent: ""
};



const buttonObjList = [classicalAlgorithmDiv, quantumAlgorithmDiv];

function addStyles (stylePrefix) {
    var style = document.createElement('style');
    style.innerHTML = `
    .${stylePrefix}-style {
        background-color: rgba(0, 0, 0, 0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        z-index: 1;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.2s ease;
    }
    
    .${stylePrefix}-style.show {
        pointer-events: auto;
        opacity: 1;
    }
    
    .${stylePrefix}-modal {
        background-color: #fff;
        padding: 5vh;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        width: 50vh;
        max-width: 100%;
        text-align: center;
    }
    `;
    document.head.appendChild(style);
}

function populateDivs (buttonObjList) {
    buttonObjList.forEach((buttonObj) => {
        const openStr = buttonObj.fetchName + "-open";
        const closeStr = buttonObj.fetchName + "-close";
        const containerStr = buttonObj.fetchName + "-modal-container";
        const modalStr = buttonObj.fetchName + "-modal";
        const styleStr = buttonObj.fetchName + "-style";

        var openButton = document.getElementById(openStr);

        var outerDiv = document.createElement('div');
        outerDiv.setAttribute("class", styleStr);
        outerDiv.setAttribute("id", containerStr);

        var innerDiv = document.createElement('div');
        innerDiv.setAttribute("class", modalStr);
        innerDiv.innerHTML = buttonObj.displayTitle + '<br><br>';


        var closeButton = document.createElement('button');
        closeButton.setAttribute("id", closeStr);
        closeButton.innerHTML = "Go back";

        document.body.appendChild(outerDiv);
        outerDiv.appendChild(innerDiv);
        innerDiv.appendChild(closeButton);

        var containerElement = document.getElementById(containerStr);

        openButton.addEventListener('click', () => {
            containerElement.classList.add('show');
        });
        
        closeButton.addEventListener('click', () => {
            containerElement.classList.remove('show');
        });

        addStyles(buttonObj.fetchName);

    })
}

populateDivs(buttonObjList);




