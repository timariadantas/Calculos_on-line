import React from "react";
import { GlobalStyles } from "./Components/GlobalStyles";
import Button from "./Components/Button";
import * as B from "./Components/ButtonStyled";
import * as C from "./Components/Calculadora";

function App() {
  const [primeiroNumero, setPrimeiroNumero] = React.useState("");
  const [segundoNumero, setSegundoNumero] = React.useState("");
  const [operacao, setOperacao] = React.useState("");
  const [resultado, setResultado] = React.useState("");

  function handleNumberClick(numero) {
    if (!operacao) {
      setPrimeiroNumero(primeiroNumero + numero);
      calcularResultado();
    } else {
      setSegundoNumero(segundoNumero + numero);
    }
  }

  function handleClickOperator(operacao) {
    if (primeiroNumero && segundoNumero) {
      calcularResultado();
    }

    if (primeiroNumero) {
      setOperacao(operacao);
    }
  }

  function handleClickIgual() {
    if (primeiroNumero && segundoNumero) {
      calcularResultado();
    }
  }

  function calcularResultado() {
    const primeiro = Number(primeiroNumero);
    const segundo = Number(segundoNumero);

    let resultadoCalculado;

    if (operacao === "+") {
      resultadoCalculado = primeiro + segundo;
    } else if (operacao === "-") {
      resultadoCalculado = primeiro - segundo;
    } else if (operacao === "*") {
      resultadoCalculado = primeiro * segundo;
    } else if (operacao === "/") {
      resultadoCalculado = primeiro / segundo;
    } else if (operacao === "%") {
      resultadoCalculado = (primeiro * segundo) / 100;
    }

    setResultado(resultadoCalculado);
    setPrimeiroNumero(resultadoCalculado.toString());
    setSegundoNumero("");
    setOperacao("");
  }

  function handleClickLimparCE() {
    if (segundoNumero && operacao && primeiroNumero) {
      return setSegundoNumero(segundoNumero.slice(0, -1));
    }

    if (operacao) {
      return setOperacao("");
    }

    if (primeiroNumero) {
      return setPrimeiroNumero("");
    }

    if (primeiroNumero && !operacao && !segundoNumero) {
      return setPrimeiroNumero(primeiroNumero.slice(0, -1));
    }
  }

  function handleClickLimparC() {
    setPrimeiroNumero("");
    setSegundoNumero("");
    setOperacao("");
    setResultado("");
  }

  return (
    <>
      <GlobalStyles />

      <C.ContainerCalculadora>
        <C.H1>Calculadora</C.H1>
        <C.Main>
          {/* DISPLAY */}

          <C.Calculadora>
            <C.DivDisplay>
              {/* operação */}
              <h1>
                {primeiroNumero !== ""
                  ? `${primeiroNumero}  ${operacao}  ${segundoNumero}`
                  : "0"}
              </h1>

              {/* display resultado */}
              <h1>{resultado ? resultado : "0"}</h1>
            </C.DivDisplay>
          </C.Calculadora>

          {/* botoes */}
          <B.DivBotao>
            <B.Button>
              <Button event={() => handleClickLimparCE()}>CE</Button>
              <Button event={() => handleClickLimparC()}>C</Button>
              <Button event={() => handleClickOperator("%")}>%</Button>
              <Button event={() => handleClickOperator("/")}>/</Button>
            </B.Button>

            <B.Button>
              <Button event={() => handleNumberClick("1")}>1</Button>
              <Button event={() => handleNumberClick("2")}>2</Button>
              <Button event={() => handleNumberClick("3")}>3</Button>
              <Button event={() => handleClickOperator("*")}>*</Button>
            </B.Button>

            <B.Button>
              <Button event={() => handleNumberClick("4")}>4</Button>
              <Button event={() => handleNumberClick("5")}>5</Button>
              <Button event={() => handleNumberClick("6")}>6</Button>
              <Button event={() => handleClickOperator("+")}>+</Button>
            </B.Button>

            <B.Button>
              <Button event={() => handleNumberClick("7")}>7</Button>
              <Button event={() => handleNumberClick("8")}>8</Button>
              <Button event={() => handleNumberClick("9")}>9</Button>
              <Button event={() => handleClickOperator("-")}>-</Button>
            </B.Button>

            <B.Button>
              <Button event={() => handleNumberClick("0")}>0</Button>
              <Button event={() => handleNumberClick}>.</Button>
              <Button event={() => handleClickIgual()}>=</Button>
            </B.Button>
          </B.DivBotao>
        </C.Main>
      </C.ContainerCalculadora>
    </>
  );
}

export default App;
