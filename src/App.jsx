import placeholderLogo from './assets/placeholder-logo.svg'
import './App.css'

function App() {
  return (
    <div className="page">
      <main className="main">
        <img
          src={placeholderLogo}
          alt="Logo"
          className="logo"
        />
      </main>

      <footer className="footer">
        <h2>Contact</h2>
        <ul className="contact-list">
          <li>
            <a href="https://linkedin.com/in/YOUR_PROFILE" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:YOUR_EMAIL@example.com">
              YOUR_EMAIL@example.com
            </a>
          </li>
        </ul>
      </footer>
    </div>
  )
}

export default App
