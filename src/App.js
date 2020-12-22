import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [pessoas, setPessoas] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{pessoas.length} aniversariantes hoje</h3>
        <List pessoas={pessoas} />
        <button onClick={() => setPessoas([])}>limpar tudo</button>
      </section>
    </main>
  );
}

export default App;
