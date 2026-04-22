import './App.css';

function App() {
  return (
    <>
      <header>
        <p className="header-eyebrow">bhenning.com / dashboard</p>
        <h1>site<em>7</em></h1>
        <p className="header-sub">tools &amp; utilities — select a destination</p>
        <div className="header-rule"></div>
      </header>

      <section>
        <div className="section-label"><h2>Sites</h2></div>
        <div className="grid">

          <a href="https://site1.bhenning.com" className="card">
            <span className="card-name">site1</span>
            <span className="card-path">site1.bhenning.com</span>
            <span className="arrow">↗</span>
          </a>

          <a href="https://site2.bhenning.com" className="card">
            <span className="card-name">site2</span>
            <span className="card-path">site2.bhenning.com</span>
            <span className="arrow">↗</span>
          </a>

          <a href="https://site3.bhenning.com" className="card">
            <span className="card-name">site3</span>
            <span className="card-path">site3.bhenning.com</span>
            <span className="arrow">↗</span>
          </a>

          <a href="https://site4.bhenning.com" className="card">
            <span className="card-name">site4</span>
            <span className="card-path">site4.bhenning.com</span>
            <span className="arrow">↗</span>
          </a>

          <a href="https://site5.bhenning.com" className="card">
            <span className="card-name">site5</span>
            <span className="card-path">site5.bhenning.com</span>
            <span className="arrow">↗</span>
          </a>

          <a href="https://site6.bhenning.com" className="card">
            <span className="card-name">site6</span>
            <span className="card-path">site6.bhenning.com</span>
            <span className="arrow">↗</span>
          </a>

          <a href="https://site7.bhenning.com" className="card">
            <span className="card-name">site7</span>
            <span className="card-path">site7.bhenning.com</span>
            <span className="arrow">↗</span>
          </a>

          <a href="https://site8.bhenning.com" className="card">
            <span className="card-name">site8</span>
            <span className="card-path">site8.bhenning.com</span>
            <span className="arrow">↗</span>
          </a>

          <a href="https://site9.bhenning.com" className="card">
            <span className="card-name">site9</span>
            <span className="card-path">site9.bhenning.com</span>
            <span className="arrow">↗</span>
          </a>

        </div>
      </section>

      <footer>bhenning.com &mdash; site7</footer>
    </>
  );
}

export default App;
