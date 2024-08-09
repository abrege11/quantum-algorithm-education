/*
new content template

const xDiv = {
    fetchName: "x",
    bodyContent: 
    String.raw`

    `+ `<br><br>`
};

*/
const constantDiv = {
    fetchName: "constant",
    bodyContent: 
    String.raw`
        <h3>Constant Function</h3>
        <p>A constant function is a function that returns the same output no matter the input</p>
        <p>\( f(0) = 0 \quad \quad f(x) = x \)</p>
        <p>\( f(1) = 0 \quad \quad f(y) = x \)</p>
        or
        <p>\( f(0) = 1 \quad \quad f(x) = y \)</p>
        <p>\( f(1) = 1 \quad \quad f(y) = y \)</p>
        so
        <p>\( f(0) = f(1) \)</p>
    `+ `<br><br>`
};

const balancedDiv = {
    fetchName: "balanced",
    bodyContent: 
    String.raw`
        <h3>Balanced Function</h3>
        <p>A balanced function is a function that returns different outputs given different inputs</p>
        <p>\( f(0) = 0 \quad \quad f(x) = x \)</p>
        <p>\( f(1) = 1 \quad \quad f(y) = y \)</p>
        or
        <p>\( f(0) = 1 \quad \quad f(x) = y \)</p>
        <p>\( f(1) = 0 \quad \quad f(y) = x \)</p>
        so
        <p>\( f(0) \ne f(1) \)</p>
    ` + `<br><br>`
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
        We will cover quantum algorithms, but Deutsch's algorithm is indeed a quantum one. All classical algorithms are quantum algorithms by nature, quantum algorithms just use the concepts of quantum mechanics and the third state of a qubit, the superposition state, to perform these algorithms incredibly fast. Exponentially faster than classical computers using classical algorithms could.
    `+ `<br><br>`
};

const quantumCircuitDiv = {
    fetchName: "quantum-circuit",
    bodyContent: 
    String.raw`
        <h3>Quantum Circuits and Gates</h3>
        <img src="../../../assets/deutsch.png"><br>
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
                <td>Line (Qubit)</td>
                <td><img src="../../../assets/line-qubit.png"></td>
                <td>The qubit that we perform an operation on</td>
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

const ketsDiv = {
    fetchName: "kets",
    bodyContent: 
    String.raw`
        <h3>Kets \( \ket{0} \) and \( \ket{1} \)</h3>
        \( 
        \ket{0} =          
        \begin{pmatrix}
        1 \\
        0
        \end{pmatrix} 
        \) <br><br>
        \( 
        \ket{1} =  
        \begin{pmatrix}
        0 \\
        1
        \end{pmatrix} 
        \) <br><br>
        This will be the most common example you see. <br><br>
        Working with \( \ket{0} \) and \( \ket{1} \), you can remember which vectors these represent as thinking of the number inside of the ket as the position where the 1 is located in the vector.<br><br>
        That's a mouthful, but notice the 1 is in the "0" spot in \( \ket{0} \) and the "1" spot in \( \ket{1} \). <b>(remember this is zero-indexed, intuitive for computer scientists, but for others, counting starts with 0. So the "0" spot is the first spot in the vector)</b>
    `+ `<br><br>`
};

const multiKetDiv = {
    fetchName: "multi-ket",
    bodyContent: 
    String.raw`
        <h3>\( \ket{01} \)</h3>
        Let's say we wanted to represent a state where the first qubit is 0, the next qubit is 1, and 1 again, and finally, another 0. We can represent this by
        \[
        \quad
        \quad
        \quad
        \quad
        \quad
         \ket{0110}
        \]
        Notice this is different than
        \[
        \quad
        \quad
        \quad
        \quad
        \quad
        \ket{0} \ket{1} \ket{1} \ket{0}
        \]
        In the second example, we are representing these bits arbitrarily. <br><br>
        \( \ket{0110} \) is representing that we pass these bits sequentially.
    `+ `<br><br>`
};

const hadamaradDiv = {
    fetchName: "hadamarad",
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

const superpositionDiv = {
    fetchName: "superposition",
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

const plusMinusKetDiv = {
    fetchName: "plus-minus-ket",
    bodyContent: 
    String.raw`
        <h3>\( \ket{+} \) and \( \ket{-} \)</h3>
        \(
        \ket{+} =
        \frac{|\ket{0} + \ket{1}|}{\sqrt{2}}
        \)
        <br>
        \(
        \ket{-} =
        \frac{|\ket{0} - \ket{1}|}{\sqrt{2}}
        \)
        <br><br>
        These represent our superposition states of \( \ket{0} \) and \( \ket{1} \).<br><br>
    `+ `<br><br>`
};

//TODO 
const quantumOracleDiv = {
    fetchName: "quantum-oracle",
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

const phaseOracleDiv = {
    fetchName: "phase-oracle",
    bodyContent: 
    String.raw`
        <h3>Phase Oracle</h3>
        The phase oracle is the same concept as a quantum oracle, except we conditionally apply it whether \( x=1 \) or \( x=0 \) <br><br>
        Formally, we represent this as 
        \[
        U_f \ket{+} = (-1)^{f(x)}\ket{+}
        \]
        We apply this state if x is 1, and vise versa.
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

const classicalComputationDiv = {
    fetchName: "classical-computation",
    bodyContent: 
    String.raw`
        <h3>Classical Computation</h3>
        <p>
        Classical computers use bits <br>
        Bits are binary values <br>
        Binary values are either 0 or 1 <br> <br>
        These bits are run through logic gates to perform operations on them. These few elementary operations are the building blocks of all technology today. <br><br>
        </p>
    `+ `<br><br>`
};

const quantumComputationDiv = {
    fetchName: "quantum-computation",
    bodyContent: 
    String.raw`
        <h3>Quantum Computation</h3>
        Quantum computing uses qubits, qubits have the states 0, 1, and a superposition of 0 and 1. These qubits make up quantum gates, which make up quantum algorithms. <br><br>
        This superposition state is what allows quantum computers to perform operations so much quicker than classical computers. 
    `+ `<br><br>`
};

//TODO
// const mathematicsDiv = {
//     fetchName: "mathematics",
//     bodyContent: 
//     String.raw`

//     `+ `<br><br>`
// };

const buttonObjList = [constantDiv, balancedDiv, classicalAlgorithmDiv, quantumAlgorithmDiv, quantumCircuitDiv, ketsDiv, multiKetDiv, hadamaradDiv, superpositionDiv, plusMinusKetDiv, quantumOracleDiv, phaseOracleDiv, quantumSupremacyDiv, classicalComputationDiv, quantumComputationDiv];

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





