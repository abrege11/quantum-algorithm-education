/*
new content template

const xDiv = {
    fetchName: "x",
    bodyContent: 
    String.raw`

    `+ `<br><br>`
};

*/

const modTwoDiv = {
    fetchName: "mod-two",
    bodyContent: 
    String.raw`
        Modulo is an operator that returns the remainder of a number. Mod 2 means that we divide the number by 2, and return the remainder <br><br>
        For example, 
        \[
        \mod 2 (1) = 1
        \]
        \[
        \mod 2 (2) = 0
        \]
        Anything divisible by 2 (even) equals 0, and anything that is not divisible by 2 (odd) equals 1.
    `+ `<br><br>`
};

const classicalAlgorithmDiv = {
    fetchName: "classical-algorithm",
    bodyContent: 
    String.raw`
        <h3>Classical Algorithms</h3>
        <p>
        Classical algorithms are commonly known as "algorithms". Since you're just now learning about quantum algorithms, any algorithm you currently know (except for deutsch's algorithm) is classical. <br><br> An algorithm is a set of instructions to solve a problem. Think bubble sort, quick sort, etc. 
        </p>
        <p>
        The important distinction to make between quantum and classical algorithms is their complexities. Classical algorithms are sequential, they can only perform one operation at a time, one by one.
        </p>
    `+ `<br><br>`
};

const quantumAlgorithmDiv = {
    fetchName: "quantum-algorithm",
    bodyContent: 
    String.raw`
        <h3>Quantum Algorithms</h3>
        We will cover quantum algorithms, and Deutsch's algorithm is indeed one. All classical algorithms are quantum algorithms by nature, quantum algorithms just use the concepts of quantum mechanics and the third state of a qubit, the superposition state, to perform these algorithms incredibly fast. Exponentially faster than classical computers using classical algorithms could.
    `+ `<br><br>`
};

const jozsaQuantumCircuitDiv = {
    fetchName: "jozsa-quantum-circuit",
    bodyContent: 
    String.raw`
        <h3>Quantum Circuits and Gates</h3>
        <img src="../../../assets/deutsch-jozsa.png"><br>
        <p>
            <table>
                <tr>
                <th>Name</th>
                <th>Item</th>
                <th>Description</th>
                </tr>
                <tr>
                <td>Hadamarad Gate</td>
                <td><img src="../../../assets/hadamarad-isolate.png"></td>
                <td>Puts a qubit into a superposition state</td>
                </tr>
                <tr>
                <td>Hadamarad Gate of \( N \) amounts</td>
                <td><img src="../../../assets/hadamarad-n-isolate.png"></td>
                <td>Puts n amounts of qubits into superposition states</td>
                </tr>
                <tr>
                <td>Line (Qubit)</td>
                <td><img src="../../../assets/line-qubit.png"></td>
                <td>The qubit that we perform an operation on</td>
                </tr>
                <tr>
                <td>Line of N amounts (Qubits)</td>
                <td><img src="../../../assets/line-n-qubit.png"></td>
                <td>The qubits that we perform operations on</td>
                </tr>
                <tr>
                <td>Measurement</td>
                <td><img src="../../../assets/measurement.png"></td>
                <td>Making our qubit converge to 0 or 1 to give our final output value</td>
                </tr>
                <tr>
                <td>Quantum Oracle</td>
                <td><img src="../../../assets/quantum-oracle-usubf.png"></td>
                <td>Find more information on this topic <a href="../other-qunatum/quantum-circuits/quantum-oracle.html"> here</a></td>
                </tr>
              </table>
            </p>
    `+ `<br><br>`
};

const jozsaSymbolsDiv = {
    fetchName: "jozsa-symbols",
    bodyContent: 
    String.raw`
        <h3>Symbols</h3>
        <p>
            <table>
                <tr>
                <th>Name</th>
                <th>Item</th>
                <th>Description</th>
                </tr>
                <tr>
                <td>Hadamarad Gate of \( N \) amounts</td>
                <td><img src="../../../assets/hadamarad-n-isolate.png"></td>
                <td>Puts n amounts of qubits into superposition states</td>
                </tr>
                <tr>
                <td>Line of N amounts (Qubits)</td>
                <td><img src="../../../assets/line-n-qubit.png"></td>
                <td>The qubits that we perform operations on</td>
                </tr>
                <tr>
                <td>N amounts of \( \ket{0} \)</td>
                <td><img src="../../../assets/ketzerocrossn.png"></td>
                <td>Sends n amounts of \( \ket{0} \)'s into the circuit</td>
                </tr>
              </table>
            </p>
    `+ `<br><br>`
};

const jozsaHadamardDiv = {
    fetchName: "jozsa-hadamarad",
    bodyContent: 
    String.raw`
        <h3>Hadamarad Gate</h3>
        <p>
        The Hadamarad gate takes in a qubit, and returns the qubit in it's superposition state.
        </p>
        <p>
        These are denoted by <br><img src="../../../assets/hadamarad-isolate.png">
        </p>
    `+ `<br><br>`
};

const jozsaSuperpositionDiv = {
    fetchName: "jozsa-superposition",
    bodyContent: 
    String.raw`
        <h3>Superposition</h3>
        Superposition is the backbone of every quantum algorithm. <br><br>
        This a term that describes how a system can be in a state of all of it's possible outcomes. <br><br>
        Looking at the superposition of a qubit, most likely you've seen
        \[
        \frac{1}{\sqrt{2}} \ket{0} +
        \frac{1}{\sqrt{2}} \ket{1} 
        \]
        This for example, states that our bit is in a superposition state where it is a 50/50 (\( \frac{1}{\sqrt{2}}\) is half) chance it will be measured as a \( \ket{0} \) or \( \ket{1} \). <br><br>
        It is important to note that whatever system is in a superposition state, that state is lost upon measurement. To which you obtain either 0 or 1 at the given probabilities of the kets.
    `+ `<br><br>`
};

const jozsaQuantumOracleDiv = {
    fetchName: "jozsa-quantum-oracle",
    bodyContent: 
    String.raw`
        <h3>Quantum Oracle</h3>
        Similarly to how all classical algorithms are made up of boolean functions, quantum algorithms are made with matrix multiplications. So "oracles" are just small circuits that give us more power in our algorithms. <br><br>
        These oracles are unitary and reversible, however, you don't really need to know the in's and out's of these oracles, they're black box, so just remember you put in bits, and they give you bits back.
        \[
        f \{0,1\}^n 
        \longrightarrow
        f \{0,1\}^m
        \]
        The oracle, which we will denote at \( U_f \) will act on \( \ket{x} \) and \( \ket{y} \) as follows
        \[
        U_f \ket{x} \ket{y} = \ket{x} \ket{y \oplus f(x)}
        \]
    `+ `<br><br>`
};

//TODO
const mathematicsDiv = {
    fetchName: "mathematics",
    bodyContent: 
    String.raw`

    `+ `<br><br>`
};

const quantumSupremacyDiv = {
    fetchName: "quantum-supremacy",
    bodyContent: 
    String.raw`
        <h3>Quantum Supremacy</h3>
        <p>
        The Deutsch-Jozsa algorithm was the first to prove quantum supremacy, the idea that quantum computers can solve problems faster than classical algorithms. <br><br>
        With quantum phenomena such as entanglement and superposition, quantum algorithms can solve a problem with just a singular operation. This same problem would take \( x \) queries on a classical computer. <br><br>
        This concept is what we consider quantum supremacy, we now know that quantum computers can indeed perform operations at a rate not possible by any classical computer.
        </p>
    `+ `<br><br>`
};

const dottedDiv = {
    fetchName: "dotted",
    bodyContent: 
    String.raw`
        <h3>Dot Product</h3>
        Dotting denotes multiplying and adding each term of vectors, let's look at an example
        \[
        v = 
        \begin{pmatrix}
        1 & 2 & 3
        \end{pmatrix} \quad  
        u = 
        \begin{pmatrix}
        4 & 5 & 6
        \end{pmatrix} 
        \] 
        \[
        v \cdot u =
        (1 \cdot 4) + (2 \cdot 5) + (3 \cdot 6) 
        \longrightarrow
        \]
        \[
        4 + 10 + 18
        \longrightarrow
        32
        \]
    `+ `<br><br>`
};

const summationDiv = {
    fetchName: "summation",
    bodyContent: 
    String.raw`
        <img src="../../../assets/summation-diagram.png"> <br><br>
        This overall is representing the superposition of all possible n-qubit states <br><br>
        To be clear, <b><i>x is all possible bit strings of length n</i></b> means we are considering all possible bit strings of length n, representing each bit string as x
        \[
        n = 2
        \]
        \[
        x = \{00, 01, 10, 11\}
        \]
        \[
        n = 3
        \]
        \[
        x = \{000, 001, 010, 011, 100, 101, 110, 111\}
        \]
    `+ `<br><br>`
};


const buttonObjList = [summationDiv, dottedDiv, modTwoDiv, classicalAlgorithmDiv, quantumAlgorithmDiv, jozsaQuantumCircuitDiv, jozsaSymbolsDiv, jozsaHadamardDiv, jozsaSuperpositionDiv, jozsaQuantumOracleDiv, quantumSupremacyDiv];

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
        transition: opacity 0.1s ease;
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
        width: 90vh;
        max-width: 100%;
        text-align: center;
    }
    `;
    document.head.appendChild(style);
}



function populateDivs (buttonObjList) {
    buttonObjList.forEach((buttonObj) => {
        console.log(buttonObj);
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
        innerDiv.innerHTML = buttonObj.bodyContent;

        var closeButton = document.createElement('button');
        closeButton.setAttribute("id", closeStr);
        closeButton.innerHTML = "Go back";

        document.body.appendChild(outerDiv);
        outerDiv.appendChild(innerDiv);
        innerDiv.appendChild(closeButton);

        var containerElement = document.getElementById(containerStr);
        
        openButton.addEventListener('click', () => {
            containerElement.classList.add('show');
            MathJax.typeset()
        });
        
        closeButton.addEventListener('click', () => {
            containerElement.classList.remove('show');
        });

        addStyles(buttonObj.fetchName);

    })
}
populateDivs(buttonObjList);