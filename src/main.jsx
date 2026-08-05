import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Dynamically set CSS `--nav-offset` to the actual navbar height so
// `scroll-margin-top` always matches the fixed header. Runs on load and resize.
function updateNavOffset() {
  const nav = document.querySelector('nav');
  if (nav) {
    const h = nav.getBoundingClientRect().height;
    document.documentElement.style.setProperty('--nav-offset', `${Math.ceil(h)}px`);
  }
}

window.addEventListener('load', updateNavOffset);
window.addEventListener('resize', updateNavOffset);
// run immediately in case load already fired
updateNavOffset();
