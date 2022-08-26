import "./App.css";
import mobile from "./images/image-header-mobile.jpg";
import desktop from "./images/image-header-desktop.jpg";

function App() {
  return (
    <div className="App">
      <div className="container">
        <section className="section__text">
          <h1>
            Get <span>insights</span> that help your business grow.
          </h1>
          <p>
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
          <ul className="list--items">
            <article>
              <li>10k+</li>
              <span>companies</span>
            </article>
            <article>
              <li>314</li>
              <span>templates</span>
            </article>
            <article>
              <li>12m+</li>
              <span>queries</span>
            </article>
          </ul>
        </section>
        <section className="section__img">
          <div className="img__people">
            <picture>
              <source media="(min-width: 768px)" srcSet={desktop} />
              <img src={mobile} alt="" />
            </picture>
            <div className="color"></div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
