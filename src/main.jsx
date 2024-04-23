import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRouter } from './router/AppRouter'
import { LangProvider } from './app/context/langContext'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<LangProvider>
			<AppRouter />
		</LangProvider>
	</React.StrictMode>,
)
