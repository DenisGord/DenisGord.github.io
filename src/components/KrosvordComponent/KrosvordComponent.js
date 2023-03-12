import React, { useEffect, useMemo, useState } from "react";
import "./style.css";
import { arr_RU } from "./_mock_";

export const KrosvordComponent = ({ words, question, maxX, maxY, right, counter, setCounter }) => {
  const [selectButton, setSelectButton] = useState([]);
  const [letter, setLetter] = useState("");
  const [showText, setShowText] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const backgound = (first, second) => {
    if (first && first === second.word.toLowerCase()) {
      if (second.gold) {
        return "gold";
      }
      return "color";
    }
    return "";
  };


  const renderFields = useMemo(() => {
    const arr = [];
    for (let i = 0; i < maxY; i++) {
      arr.push([]);
      for (let j = 0; j < maxX; j++) {
        const elem = () => {
          if (words.some(({ x, y }) => y === i && x === j)) {
            const findLetter = selectButton
              .find(({ coord }) => coord === `${j}-${i}`)
              ?.letter.toLowerCase();

            const letterWord = words.find(({ x, y }) => y === i && x === j);

            return (
              <button
                onClick={() => setLetter(`${j}-${i}`)}
                id={`field-button-${right ? 'right' : 'left'}`}
                className={`input-field ${letter === `${j}-${i}` && "select"
                  } ${backgound(findLetter, letterWord)} `}
              >
                <div className="startButton">{letterWord.start || ""}</div>
                {findLetter || ""}
              </button>
            );
          }
          return <div className="block" />;
        };
        arr[i].push(elem());
      }
    }
    return arr.map((item) => {
      return (
        <div style={{ display: "flex" }}>
          {item.map((items) => {
            return items;
          })}
        </div>
      );
    });
  }, [selectButton, letter]);

  const clickLetter = (e) => {
    setSelectButton((prev) => {
      const res = [...prev];

      const ind = res.findIndex(({ coord }) => {
        return coord === letter;
      });
      if (ind === -1) {
        res.push({ coord: letter, letter: e });
      } else {
        res[ind].letter = e;
      }


      return res;
    });
  };

  const renderButton = arr_RU.map((item) => {
    return (
      <button
        tabIndex={"-1"}
        className="next-button-words"
        onClick={() => clickLetter(item)}
        key={item}
      >
        {item}
      </button>
    );
  });

  useEffect(() => {
    if (selectButton.length === words.length) {
      const sel = document.querySelectorAll(`#field-button-${right ? 'right' : 'left'}`)
      let i = 0
      sel.forEach((item) => {
        if (item.classList.value.includes('color') || item.classList.value.includes('gold')) {
          i++
        }
      })

      if (i === sel.length) {
        setShowButton(true)

      }
    }
  }, [selectButton]);

  return (
    <div className={`wrapper wrapper-words ${right ? 'right-wrapper' : ''}`} >
      {counter > 1 ? <h1>Вы разгадали все слова, готовы двигаться дальше?</h1> :
        !showText ?
          <div className="flex-container flex-container-column">
            <div className="flex-container flex-container-column">
              <ul>
                {question.map((item) => {
                  return <li className="list-item">{item}</li>;
                })}
              </ul>
              <div>{renderFields}</div>
            </div>

            {showButton ? <button onClick={() => {
              setShowText(true)
              setCounter(counter + 1)
            }} className="next-button-words">Мы готовы</button> :
              <div className="padding-wrapper">

                <div className="letterContainer">
                  {renderButton}
                </div>

                <button className="next-button-words" onClick={() => clickLetter(" ")}>удалить</button>



              </div>
            }


          </div> : <h1>Вы разгадали все слова, дождитесь вторую команду</h1>}
    </div>
  );
}
