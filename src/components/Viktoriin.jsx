import { useState } from "react";
import t from "../i18n";

export default function Viktoriiin({ küsimused, onFinish, lang }) {
  const tr = t[lang];

  const [praeguneIndeks, setPraeguneIndeks] = useState(0);
  const [valitudVariant, setValitudVariant] = useState(null);
  const [tagasiside, setTagasiside] = useState(null);
  const [vastused, setVastused] = useState([]);

  const praeguneKüsimus = küsimused[praeguneIndeks];
  const onViimane = praeguneIndeks === küsimused.length - 1;
  const skoor = vastused.filter((v) => v.onÕige).length;

  function valiVariant(variant) {
    if (tagasiside !== null) return;

    const onÕige = variant === praeguneKüsimus.õigeVastus;
    setValitudVariant(variant);
    setTagasiside(onÕige ? "õige" : "vale");

    setVastused((eelmised) => [
      ...eelmised,
      {
        küsimus: praeguneKüsimus.küsimus,
        valitud: variant,
        õige: praeguneKüsimus.õigeVastus,
        onÕige,
      },
    ]);
  }

  function järgmineKüsimus() {
    if (onViimane) {
      onFinish(vastused);
    } else {
      setPraeguneIndeks((i) => i + 1);
      setValitudVariant(null);
      setTagasiside(null);
    }
  }

  function variandiKlass(variant) {
    if (tagasiside === null) return "option-btn";
    if (variant === praeguneKüsimus.õigeVastus) return "option-btn option-correct";
    if (variant === valitudVariant) return "option-btn option-wrong";
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
        {praeguneKüsimus.küsimus}
      </h2>

      <div className="options-list">
        {praeguneKüsimus.valikud.map((variant) => (
          <button
            key={variant}
            className={variandiKlass(variant)}
            onClick={() => valiVariant(variant)}
            data-testid={`option-${variant}`}
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
            : tr.feedbackWrong(praeguneKüsimus.õigeVastus)}
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