// import { useRef, useState } from "react";

// function Ref() {
//   let ref = useRef(0);
//   function handleClick() {
//     ref.current = ref.current + 1;
//     alert("You clicked " + ref.current + " times!");
//   }

//   return (
//     <>
//       <button onClick={handleClick}>Click Me</button>
//     </>
//   );
// }

// export default Ref;

// export function MyButton() {
//   const [count, setCount] = useState(0);
//   function changeCount() {
//     let counter = setCount(count + 1);
//     return counter;
//   }

//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={changeCount}>Click Me</button>
//     </>
//   );
// }

import { useState } from 'react';

export default function Chat() {
  const [text, setText] = useState('');
  const [isSending, setIsSending] = useState(false);
  let timeoutID = null;

  function handleSend() {
    setIsSending(true);
    timeoutID = setTimeout(() => {
      alert('Sent!');
      setIsSending(false);
    }, 3000);
  }

  function handleUndo() {
    setIsSending(false);
    clearTimeout(timeoutID);
  }

  return (
    <>
      <input
        disabled={isSending}
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button
        disabled={isSending}
        onClick={handleSend}>
        {isSending ? 'Sending...' : 'Send'}
      </button>
      {isSending &&
        <button onClick={handleUndo}>
          Undo
        </button>
      }
    </>
  );
}
