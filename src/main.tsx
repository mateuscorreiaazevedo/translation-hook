import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './shared/styles/globals.css'
import App from "./shared/components/app";
import {TranslationProvider} from "./shared/contexts/translation-context.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TranslationProvider>
      <App/>
    </TranslationProvider>
  </StrictMode>,
)
