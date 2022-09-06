import Header from "./components/Header"
import Footer from "./components/Footer"

// Page
import HomePage from "./pages/HomePage"

function App() {
  return (
    <>
    {/* HEADER */}
    <Header />
    {/* MAIN */}
    <main>
      <HomePage />
    </main>
    <Footer />
  </>
  );
}

export default App;
