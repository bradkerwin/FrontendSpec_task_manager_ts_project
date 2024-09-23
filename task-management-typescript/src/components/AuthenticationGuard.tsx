import { withAuthenticationRequired } from '@auth0/auth0-react';
import React, { ComponentType } from 'react'

interface AuthenticationProps {
    component: ComponentType<object>;
}

const AuthenticationGuard = ({component}: AuthenticationProps) => {
    const ProtectedComponent = withAuthenticationRequired(component, {
        onRedirecting: () => <>Redirecting!</>
    })
  return (
    <ProtectedComponent />
  )
}

export default AuthenticationGuard