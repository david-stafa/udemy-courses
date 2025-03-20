import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

export default function ResultModal({
  onReset,
  targetTime,
  ref,
  remainingTime,
}) {
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const formattedReaminingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog className="result-modal" ref={dialog} onClose={onReset}>
      {/* <h2>You {result}</h2> */}
      {userLost && <h2>You LOST</h2>}
      {!userLost && <h2>Your Scrore: {score}</h2>}
      <p>
        The target time was <strong>{targetTime}</strong> seconds.
      </p>
      <p>
        You stopped the timer with
        <strong> {formattedReaminingTime} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
}
