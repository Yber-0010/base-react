import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router } from './router/router'
import { LangProvider } from './app/context/langContext'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<LangProvider>
			<Router />
		</LangProvider>
	</React.StrictMode>,
)
