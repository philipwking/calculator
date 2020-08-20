import React, { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState("")
  const [answer, setAnswer] = useState("")

  const buttonClick = (x) => {
    let newDisplay = display + x
    setDisplay(newDisplay)
  }


  function equalsClick () {

    let expr = display

    var chars = expr.split("");
    var n = [], op = [], index = 0, oplast = true;

    n[index] = "";

    for (var i = 0; i < chars.length; i++) {

        if (isNaN(parseInt(chars[i])) && chars[i] !== "." && !oplast) {
            op[index] = chars[i];
            index++;
            n[index] = "";
            oplast = true;
        } else {
            n[index] += chars[i];
            oplast = false;
        }
    }

    expr = parseFloat(n[0]);
    for (var o = 0; o < op.length; o++) {
        var num = parseFloat(n[o + 1]);
        switch (op[o]) {
            case "+":
                expr = expr + num;
                break;
            case "-":
                expr = expr - num;
                break;
            case "*":
                expr = expr * num;
                break;
            case "/":
                expr = expr / num;
                break;
            case "^":
                expr = expr ** num;
                break;
        }
    }

    setAnswer(expr);
}

  const clear = () =>{
    setDisplay('')
    setAnswer('')
  }


  return (
    <div className='container'>
      <div className='level'>

      </div>
      <div className='level' >
      <div className="box" type="text">
          {display}
        </div>
      </div>
      <div className='level' >
      <div className="box" type="text">
          = {answer}
        </div>
      </div>
      <div className='level'>
        <div className='level-left'>
          <div className='container'>
            <div className='level'>
              <button className="button is-large" onClick={()=>buttonClick('1')}>
                1
              </button>
              <button className="button is-large" onClick={()=>buttonClick('2')}>
                2
              </button>
              <button className="button is-large" onClick={()=>buttonClick('3')}>
                3
              </button>
              <button className="button is-large" onClick={()=>buttonClick('/')}>
                /
             </button>
            </div>
            <div className='level'>
              <button className="button is-large" onClick={()=>buttonClick('4')}>
                4
              </button>
              <button className="button is-large" onClick={()=>buttonClick('5')}>
                5
              </button>
              <button className="button is-large" onClick={()=>buttonClick('6')}>
                6
              </button>
              <button className="button is-large" margin-left='22px' onClick={()=>buttonClick('*')}>
                *
              </button>
            </div>
            <div className='level'>
              <button className="button is-large" onClick={()=>buttonClick('7')}>
                7
              </button>
              <button className="button is-large" onClick={()=>buttonClick('8')}>
                8
              </button>
              <button className="button is-large" onClick={()=>buttonClick('9')}>
                9
              </button>
              <button className="button is-large" onClick={()=>buttonClick('^')}>
                ^
              </button>
            </div>
            <div className='level'>
              <button className="button is-large" onClick={()=>buttonClick('0')}>
                0
              </button>
              <button className="button is-large" onClick={()=>buttonClick('.')}>
                .
              </button>
              <button className="button is-large" onClick={()=>buttonClick('+')}>
                +
              </button>
              <button className="button is-large" onClick={()=>buttonClick('-')}>
                -
             </button>
            </div>
            <div className='level'>
                <button className="button is-large"  onClick={()=>equalsClick(1)}>
                  =
              </button>
              <button className="button is-large"  onClick={()=>clear()}>
                  Clear 
              </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
