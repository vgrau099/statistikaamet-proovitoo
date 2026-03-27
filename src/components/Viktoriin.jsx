import { useState } from "react";
import t from "../i18n";

export default function Viktoriin({ küsimused, onFinish, lang }) {
  const tr = t[lang];

  const [praeguneIndeks, setPraeguneIndeks] = useState(0);
  const [valitudIndeks, setValitudIndeks] = useState(null);
  const [tagasiside, setTagasiside] = useState(null);
  const [vastused, setVastused] = useState([]);

  const praeguneKüsimus = küsimused[praeguneIndeks];
  const langData = praeguneKüsimus[lang]; // { küsimus, valikud }
  const onViimane = praeguneIndeks === küsimused.length - 1;
  const skoor = vastused.filter((v) => v.onÕige).length;

  function valiVariant(indeks) {
    if (tagasiside !== null) return;

    const onÕige = indeks === praeguneKüsimus.õigeIndeks;
    setValitudIndeks(indeks);
    setTagasiside(onÕige ? "õige" : "vale");

    setVastused((eelmised) => [
      ...eelmised,
      {
        küsimus: langData.küsimus,
        valitud: langData.valikud[indeks],
        õige: langData.valikud[praeguneKüsimus.õigeIndeks],
        onÕige,
      },
    ]);
  }

  function järgmineKüsimus() {
    if (onViimane) {
      onFinish(vastused);
    } else {
      setPraeguneIndeks((i) => i + 1);
      setValitudIndeks(null);
      setTagasiside(null);
    }
  }

  function variandiKlass(indeks) {
    if (tagasiside === null) return "option-btn";
    if (indeks === praeguneKüsimus.õigeIndeks) return "option-btn option-correct";
    if (indeks === valitudIndeks) return "option-btn option-wrong";
    return "option-btn option-disabled";
  }

  return (
    <div className="card quiz-card" data-testid="quiz-screen">
      <div className="progress-bar-wrap">
        <div
          className="progress-bar-fill"
          style={{ width: `${(praeguneIndeks / küsimused.length) * 100}%` }}
        />
      </div>

      <div className="quiz-meta">
        <span data-testid="question-counter">
          {tr.question} {praeguneIndeks + 1} / {küsimused.length}
        </span>
        <span data-testid="score-display">{tr.score}: {skoor}</span>
      </div>

      <h2 className="quiz-question" data-testid="question-text">
        {langData.küsimus}
      </h2>

      <div className="options-list">
        {langData.valikud.map((variant, indeks) => (
          <button
            key={indeks}
            className={variandiKlass(indeks)}
            onClick={() => valiVariant(indeks)}
            data-testid={`option-${indeks}`}
            disabled={tagasiside !== null}
          >
            {variant}
          </button>
        ))}
      </div>

      {tagasiside && (
        <div
          className={`feedback-box ${tagasiside === "õige" ? "feedback-correct" : "feedback-wrong"}`}
          data-testid="feedback-box"
        >
          {tagasiside === "õige"
            ? tr.feedbackCorrect
            : tr.feedbackWrong(langData.valikud[praeguneKüsimus.õigeIndeks])}
        </div>
      )}

      {tagasiside && (
        <button
          className="btn btn-peamine next-btn"
          onClick={järgmineKüsimus}
          data-testid="next-btn"
        >
          {onViimane ? tr.finishBtn : tr.nextBtn}
        </button>
      )}
    </div>
  );
}