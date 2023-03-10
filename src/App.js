import "./styles.css";
import React, { useState } from "react";

const emojiDictionary = {
  "ð": "See-No-Evil Monkey",
  "ð": "Hear-No-Evil Monkey",
  "ð": "Speak-No-Evil Monkey",
  "ðĨ": "Collision",
  "ðŦ": "Dizzy",
  "ðĶ": "Sweat Droplets",
  "ðĻ": "Dashing Away",
  "ðĩ": "Monkey Face",
  "ð": "Monkey",
  "ðĶ": "Gorilla",
  "ðĶ§": "Orangutan",
  "ðķ": "Dog Face",
  "ð": "Dog",
  "ðĶŪ": "Guide Dog",
  "ðĐ": "Poodle",
  "ðš": "Wolf",
  "ðĶ": "Fox",
  "ðĶ": "Raccoon",
  "ðą": "Cat Face",
  "ð": "Cat",
  "ðĶ": "Lion",
  "ðŊ": "Tiger Face",
  "ð": "Tiger",
  "ð": "Leopard",
  "ðī": "Horse Face",
  "ð": "Horse",
  "ðĶ": "Unicorn",
  "ðĶ": "Zebra",
  "ðĶ": "Deer",
  "ðŪ": "Cow Face",
  "ð": "Ox",
  "ð": "Water Buffalo",
  "ð": "Cow",
  "ð·": "Pig Face",
  "ð": "Pig",
  "ð": "Boar",
  "ð―": "Pig Nose",
  "ð": "Ram",
  "ð": "Ewe",
  "ð": "Goat",
  "ðŠ": "Camel",
  "ðŦ": "Two-Hump Camel",
  "ðĶ": "Llama",
  "ðĶ": "Giraffe",
  "ð": "Elephant",
  "ðĶ": "Rhinoceros",
  "ðĶ": "Hippopotamus",
  "ð­": "Mouse Face",
  "ð": "Mouse",
  "ð": "Rat",
  "ðđ": "Hamster",
  "ð°": "Rabbit Face",
  "ð": "Rabbit",
  "ðĶ": "Hedgehog",
  "ðĶ": "Bat",
  "ðŧ": "Bear",
  "ðĻ": "Koala",
  "ðž": "Panda",
  "ðĶĨ": "Sloth",
  "ðĶĶ": "Otter",
  "ðĶĻ": "Skunk",
  "ðĶ": "Kangaroo",
  "ðĶĄ": "Badger",
  "ðū": "Paw Prints",
  "ðĶ": "Turkey",
  "ð": "Chicken",
  "ð": "Rooster",
  "ðĢ": "Hatching Chick",
  "ðĪ": "Baby Chick",
  "ðĨ": "Front-Facing Baby Chick",
  "ðĶ": "Bird",
  "ð§": "Penguin",
  "ðĶ": "Eagle",
  "ðĶ": "Duck",
  "ðĶĒ": "Swan",
  "ðĶ": "Owl",
  "ðĶĐ": "Flamingo",
  "ðĶ": "Peacock",
  "ðĶ": "Parrot"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning("Emoji meaning: " + meaning);
  }

  return (
    <div className="App">
      <h1>Get to know about the animal emojis</h1>
      <input onChange={emojiInputHandler} />
      <div>{meaning}</div>

      <div style={{ fontSize: "1.5rem", marginTop: "2rem" }}>
        {" "}
        Below are emojis we know
      </div>
      <div>
        <ul>
          {emojisWeKnow.map(function (emoji) {
            return (
              <li key={emoji} onClick={() => emojiClickHandler(emoji)}>
                {emoji}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
