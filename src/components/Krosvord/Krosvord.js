import React, { useEffect, useMemo, useState } from "react";
import "./style.css";
import { arr_RU, words, question } from "./_mock_";

export const  Krosvord=()=> {
  const [selectButton, setSelectButton] = useState([]);
  const [letter, setLetter] = useState("");
  const [searchWord, setSearchWord] = useState("");
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
    for (let i = 0; i < 7; i++) {
      arr.push([]);
      for (let j = 0; j < 7; j++) {
        const elem = () => {
          if (words.some(({ x, y }) => y === i && x === j)) {
            const findLetter = selectButton
              .find(({ coord }) => coord === `${j}-${i}`)
              ?.letter.toLowerCase();

            const letterWord = words.find(({ x, y }) => y === i && x === j);

            return (
              <button
                onClick={() => setLetter(`${j}-${i}`)}
                className={`input-field ${
                  letter === `${j}-${i}` && "select"
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

      // res[
      //   res.findIndex(({ coord }) => {
      //     return coord === letter;
      //   })
      // ].letter = e;
      return res;
    });
  };

  const renderButton = arr_RU.map((item) => {
    return (
      <button
        tabIndex={"-1"}
        className="btn"
        onClick={() => clickLetter(item)}
        // style={{
        //   backgroundColor:
        //     letters[item] === 2
        //       ? "rgba(135, 51, 138, 1)"
        //       : letters[item] === 1
        //       ? "rgba(0, 212, 255, 1)"
        //       : letters[item] === 0
        //       ? "rgba(112,96,112,1)"
        //       : ""
        // }}
        key={item}
      >
        {item}
      </button>
    );
  });

  useEffect(() => {
    if (selectButton.length === words.length) {
    }
  }, [selectButton]);

  return (
    <div className="App">
      <div className="flex-box">
        <div>{renderFields}</div>
        <div>
          {question.map((item) => {
            return <div>{item}</div>;
          })}
        </div>
      </div>

      {renderButton}
      <button onClick={() => clickLetter("")}>удалить</button>
    </div>
  );
}
