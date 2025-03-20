import { use, useActionState } from "react";
import { OpinionsContext } from "../store/opinions-context";
import { useOptimistic } from "react";

export function Opinion({ opinion: { id, title, body, userName, votes } }) {
  const { upvoteOpinion, downvoteOpinion } = use(OpinionsContext);

  // creates a temporary value for the time when form is submitted
  // after we got value from BE the value is replaces by actual value
  const [optimisticVotes, setVotesOptimistically] = useOptimistic(votes, (prevVotes, mode) =>
    mode === "up" ? prevVotes + 1 : prevVotes - 1
  );

  async function upvoteAction() {
    setVotesOptimistically("up")
    await upvoteOpinion(id);
  }

  async function downvoteAction() {
    setVotesOptimistically("down")
    await downvoteOpinion(id);
  }

  const [upState, upAction, upPending] = useActionState(upvoteAction);
  const [downState, downAction, downPending] = useActionState(downvoteAction);

  return (
    <article>
      <header>
        <h3>{title}</h3>
        <p>Shared by {userName}</p>
      </header>
      <p>{body}</p>
      <form className="votes">
        <button formAction={upAction} disabled={downPending || upPending}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="m16 12-4-4-4 4" />
            <path d="M12 16V8" />
          </svg>
        </button>

        <span>{optimisticVotes}</span>

        <button formAction={downAction} disabled={downPending || upPending}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M12 8v8" />
            <path d="m8 12 4 4 4-4" />
          </svg>
        </button>
      </form>
    </article>
  );
}
