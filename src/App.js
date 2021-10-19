import React, { useState } from "react";
import "./styles.css";

const fruitDictionary = {
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Tangerine",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🥭": "Mango",
  "🍎": "Red Apple"
};
var emojisWeKnow = Object.keys(fruitDictionary);

export default function App() {
  const [meaning, setEmojiMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = fruitDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Oops! Sorry we don't have this in our database";
    }

    setEmojiMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = fruitDictionary[emoji];
    setEmojiMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ backgroundColor: "blue" }}>Let's find the fruits name!</h1>
      <input onChange={emojiInputHandler}></input>
      <h2>{meaning}</h2>

      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
