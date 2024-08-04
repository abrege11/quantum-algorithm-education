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
        On this site, you will hear the term "constant" and "balanced" function.
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

// REDO
const classicalAlgorithmDiv = {
    fetchName: "classical-algorithm",
    bodyContent: 
    String.raw`
        <h3>Classical Computation</h3>
        <p>
        Classical computers use bits <br>
        Bits are binary values <br>
        Binary values are either 0 or 1 <br> <br>
        These bits are run through logic gates to perform operations on them. These few elementary operations are the building blocks of all technology today. <br><br>
        In all, this is a gross over-generalization of the practice. However, this is really all you need to know for our application.
        </p>
    `+ `<br><br>`
};

//REDO 
const quantumAlgorithmDiv = {
    fetchName: "quantum-algorithm",
    bodyContent: 
    String.raw`
        <h3>Quantum Computation</h3>
        Quantum computing spans much further than Computer Science. It largely based in physics and mathematics, which both utilize quantum mechanics. <br><br>
        We are going to focus on quantum algorithms, we won't touch much on the physics side of quantum computation. But it is important to cover some fundamental components<br><br>
        Below we can see some key concepts that are used in quantum computation that we will cover throughout our algorithms.
    `+ `<br><br>`
};

const quantumCircuitDiv = {
    fetchName: "quantum-circuit",
    bodyContent: 
    String.raw`
            <h3>Quantum Circuits and Gates</h3>
        To understand quantum circuits and gates, we can look at the <a href="../fourier/deutschs.html#deutsch-jozsa">Deutsch-Jozsa</a> circuit diagram and dissect it. <br>
        <img src="../../../assets/deutsch-jozsa.png"><br>
        Let's look at each component of this diagram.
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
        This for example, states that our bit is in a superposition state where it is a 50/50 chance it will be measured as a 0 or 1. <br><br>
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
        These represent our superposition states of \( \ket{0} \) and \( \ket{1} \), we'll get to superposition later.<br><br>
    `+ `<br><br>`
};

//TODO 
const quantumOracleDiv = {
    fetchName: "quantum-oracle",
    bodyContent: 
    String.raw`

    `+ `<br><br>`
};

//TODO
const phaseOracleDiv = {
    fetchName: "phase-oracle",
    bodyContent: 
    String.raw`

    `+ `<br><br>`
};

//TODO 
const quantumSupremacyDiv = {
    fetchName: "quantum-supremacy",
    bodyContent: 
    String.raw`

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
        In all, this is a gross over-generalization of the practice. However, this is really all you need to know for our application.
        </p>
    `+ `<br><br>`
};

const quantumComputationDiv = {
    fetchName: "quantum-computation",
    bodyContent: 
    String.raw`
        <h3>Quantum Computation</h3>
        Quantum computing spans much further than Computer Science. It largely based in physics and mathematics, which both utilize quantum mechanics. <br><br>
        We are going to focus on quantum algorithms, we won't touch much on the physics side of quantum computation. But it is important to cover some fundamental components<br><br>
        Below we can see some key concepts that are used in quantum computation that we will cover throughout our algorithms.
    `+ `<br><br>`
};

const qubitDiv = {
    fetchName: "qubits",
    bodyContent: 
    String.raw`
        <h3>Bits and Qubits</h3>
        Qubits are one in the same regrading binary. They too have the states 0 and 1, however, they also have a third state named the superposition state.
    `+ `<br><br>`
};

//TODO
const mathematicsDiv = {
    fetchName: "mathematics",
    bodyContent: 
    String.raw`

    `+ `<br><br>`
};

const amplitudeDiv = {
    fetchName: "amplitude",
    bodyContent: 
    String.raw`
        <h3>Amplitude</h3>
        A probability amplitude is a complex number, in this case lets use \( x \). To get the probability of this, we perform 
        \[
        p = |x|^2
        \]
        We now can look at a system with two steps, \( s_1 \) and \( s_2 \). To get \( x \) we take the product<br>
        <img src="../../../assets/probability-steps.png">
        \[
        x = s_1 s_2
        \]
        Similarly, a system with two options, \( o_1 \) and \( o_2 \). To get \( x \) we add these amplitudes <br><br>
        <img src="../../../assets/probability-options.png">
        \[
        x = o_1 + o_2
        \]
    `+ `<br><br>`
};

const buttonObjList = [constantDiv, balancedDiv, classicalAlgorithmDiv, quantumAlgorithmDiv, quantumCircuitDiv, ketsDiv, multiKetDiv, hadamaradDiv, superpositionDiv, plusMinusKetDiv, quantumOracleDiv, phaseOracleDiv, quantumSupremacyDiv, classicalComputationDiv, quantumComputationDiv, qubitDiv, mathematicsDiv, amplitudeDiv];

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





