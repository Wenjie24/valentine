import { useState } from "react";
import lovesvg from "./assets/All You Need Is Love SVG Cut File.svg";
import lovesvg2 from "./assets/Love In The Air SVG Cut File.svg";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "u sure :(",
      "reallyyyy suree :'(",
      "i give u one kiss :<",
      "twooooo kiss",
      "dont liddat mah",
      "three kiss last chance",
      "PLEASEEEEEE",
      "MY WIFEY PLWEASEEEEEEEEE",
      "U SO HEARTLESS",
      "I HATE U",
      "I GOING TO EAT GUCCI",
      "AND NINI",
      "U BULLY ME",
      "U ALWAYS BULLY ME",
      "DUN LIDDAT MAHHHH",
      "pls :( ......."
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="text-4xl md:text-6xl font-bold my-4">
            YAYYYY MUAH MUAH MUAHHHHHHHH LOVE YOUUU!!
          </div>
        </>
      ) : (
        <>
         
          <img
            className="h-[230px] rounded-lg shadow-lg"
            src="https://gifdb.com/images/high/cute-Love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="text-4xl md:text-6xl my-4 text-center">
            HIII baby!! Will you be my Valentine?
          </h1>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            <button
              className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

const Footer = () => {
  return (
    <a
      
    >
     
    </a>
  );
};