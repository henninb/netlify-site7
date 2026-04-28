import './App.css';

const domain = window.location.hostname.endsWith('brianhenning.com') ? 'brianhenning.com' : 'bhenning.com';
const siteLabels = ['site1', 'site2', 'site3', 'site4', 'site5', 'site6', 'site7', 'site8', 'site9'];

function App() {
  const sites = siteLabels.map(label => ({
    label,
    url: `https://${label}.${domain}`,
    path: `${label}.${domain}`,
  }));

  return (
    <>
      <header>
        <p className="header-eyebrow">{domain} / dashboard</p>
        <h1>site<em>7</em></h1>
        <p className="header-sub">tools &amp; utilities — select a destination (react)</p>
        <div className="header-rule"></div>
      </header>

      <section>
        <div className="section-label"><h2>Sites</h2></div>
        <div className="grid">
          {sites.map(({ label, url, path }) => (
            <a key={url} href={url} className="card">
              <span className="card-name">{label}</span>
              <span className="card-path">{path}</span>
              <span className="arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      <footer>{domain} &mdash; site7</footer>
    </>
  );
}

export default App;
