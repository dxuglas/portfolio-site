import Logo from './assets/dxuglas-wordmark.svg'
import './App.css'

function App() {
  return (
    <div className="page">
      <main className="main">
        <img
          src={Logo}
          alt="Logo"
          className="logo"
        />
      </main>

      <footer className="footer">
        <ul className="contact-list">
          <li>
            <a href="https://linkedin.com/in/noahdxgulas" target="_blank" rel="noreferrer">
              Noah Douglas
            </a>
          </li>
          <li>
            <a href="mailto:noah@dxuglas.com">
              noah@dxuglas.com
            </a>
          </li>
        </ul>
      </footer>
    </div>
  )
}

export default App
