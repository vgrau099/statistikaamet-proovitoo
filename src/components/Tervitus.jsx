import t from "../i18n";

const PILDI_URL = "https://imgs.search.brave.com/KEn3_2dnE8D0wG7kiOgVjFXgvR_rexOktu3FtCVpgyI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQw/OTg3ODg4Ni9waG90/by9jbG9zZS11cC1w/aG90by1vZi1tYW4t/aGFuZHMtd3JpdGlu/Zy1ub3Rlcy1pbi1h/LW5vdGVib29rLWR1/cmluZy1sZWN0dXJl/LWF0LWNvbGxlZ2Uu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PS13cURjcmJqQ0FP/VE5NNkE0LXlUTFV0/S3Nvb09CRlhaZ0dF/ZEx1bWtSckE9";

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
              URL<br />
            </span>
          )}
        </div>

      </div>
    </div>
  );
}