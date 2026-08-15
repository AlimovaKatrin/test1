import User from './components/User'

function App() {
  return (
    <main>
      <p className="eyebrow">60-minute frontend mock interview</p>
      <h1>Current User and Transactions</h1>
      <section className="card stack">
        <h2>Starter application</h2>
        <User/>
      </section>
    </main>
  );
}

export default App;
