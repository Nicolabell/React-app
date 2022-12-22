import "./style.css";

function App() {
  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="logo">
          <img src="logo.png" alt="Today I Learned Logo" />
          <h1>Today I Learned</h1>
        </div>
        <button className="btn btn-large btn-open">Share a fact</button>
      </header>
      <NewFactForm />

      <main class="main">
        <CategoryFilter />
        <FactList />
      </main>
    </>
  );
}

function NewFactForm() {
  return <form className="fact-form">Fact form</form>;
}

// Category filters

function CategoryFilter() {
  return <aside>Category filter</aside>;
}

function FactList() {
  return <section>factlist</section>;
}

export default App;
