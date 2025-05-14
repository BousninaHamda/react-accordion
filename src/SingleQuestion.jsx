import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const SingleQuestion = ({ id, title, info, activeId, toggleQuestion }) => {
  const isActiveId = id === activeId;
  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button
          type="button"
          className="question-btn"
          onClick={() => toggleQuestion(id)}
        >
          {isActiveId ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isActiveId && <p>{info}</p>}
    </article>
  );
};
export default SingleQuestion;
