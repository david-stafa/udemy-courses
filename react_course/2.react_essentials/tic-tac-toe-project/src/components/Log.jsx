export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn, index) => (
        <li className={index === 0 ? "highlighted" : undefined} key={index}>
          Player: {turn.player} - Row: {turn.square.row + 1}, Col:{" "}
          {turn.square.col + 1}
        </li>
      ))}
    </ol>
  );
}
