import t from "../i18n";

export default function Tulemused({ vastused, küsimused, onRestart, lang }) {
  const tr = t[lang];

  const skoor = vastused.filter((v) => v.onÕige).length;
  const kokku = küsimused.length;
  const protsent = Math.round((skoor / kokku) * 100);

  function personalMessage() {
    if (protsent === 100) return tr.msg100;
    if (protsent >= 80)  return tr.msg80;
    if (protsent >= 60)  return tr.msg60;
    if (protsent >= 40)  return tr.msg40;
    return tr.msg0;
  }

  return (
    <div className="card results-card" data-testid="results-screen">
      <h2 className="results-title">{tr.resultsTitle}</h2>

      <div className="score-circle" data-testid="final-score">
        <span className="score-number">{skoor}</span>
        <span className="score-total">/ {kokku}</span>
      </div>

      <p className="results-message" data-testid="results-message">
        {personalMessage()}
      </p>

      <table className="results-table" data-testid="results-table">
        <thead>
          <tr>
            <th>{tr.tableQuestion}</th>
            <th>{tr.tableAnswer}</th>
            <th>{tr.tableResult}</th>
          </tr>
        </thead>
        <tbody>
          {vastused.map((vastus, i) => (
            <tr key={i} className={vastus.onÕige ? "row-correct" : "row-wrong"}>
              <td>{vastus.küsimus}</td>
              <td>{vastus.valitud}</td>
              <td>{vastus.onÕige ? tr.correct : tr.wrong}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="btn btn-peamine" onClick={onRestart} data-testid="restart-btn">
        {tr.restartBtn}
      </button>
    </div>
  );
}