import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
<Auth0Provider
    domain="dev-26cuk2j3dsu2g8vo.us.auth0.com"
    clientId="cZwBJYAl2iWl5tTHeyFkuCWcaFnXnWAA"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);
