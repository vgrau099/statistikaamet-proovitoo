import t from "../i18n";

const PILDI_URL = "https://www.shutterstock.com/image-vector/vector-illustration-girl-student-taking-260nw-2486041381.jpg";

export default function Tervitus({ onStart, koguKüsimusi, lang }) {
  const tr = t[lang];

  return (
    <div className="tervitus-taust" data-testid="welcome-screen">
      <div className="tervitus-kaart">

        {/* vasak */}
        <div className="tervitus-sisu">
          <h1 className="tervitus-pealkiri">{tr.welcomeTitle}</h1>
          <p className="tervitus-kirjeldus">
            {tr.welcomeDesc(koguKüsimusi)}
          </p>
          <ul className="tervitus-reeglid">
            <li>{tr.welcomeRule1}</li>
            <li>{tr.welcomeRule2}</li>
            <li>{tr.welcomeRule3}</li>
          </ul>
          <button className="btn" onClick={onStart} data-testid="start-btn">
            {tr.welcomeBtn}
          </button>
        </div>

        {/* parem */}
        <div className="tervitus-pilt">
          {PILDI_URL ? (
            <img src={PILDI_URL} alt={tr.welcomeTitle} />
          ) : (
            <span className="tervitus-pilt-placeholder">
              Lisa pildi URL<br />Tervitus.jsx failis
            </span>
          )}
        </div>

      </div>
    </div>
  );
}