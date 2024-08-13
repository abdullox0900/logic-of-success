import App from './App.jsx'

import { createRoot } from 'react-dom/client'
import { TelegramProvider } from './context/TelegramUserContext.jsx'
import { TelegramColorSchemeProvider } from './context/TelegramColorSchemeContext.jsx'
import { TelegramThemeProvider } from './context/TelegramThemeContext.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<QueryClientProvider client={queryClient}>
			<TelegramProvider>
				<TelegramColorSchemeProvider>
					<TelegramThemeProvider>
						<App />
					</TelegramThemeProvider>
				</TelegramColorSchemeProvider>
			</TelegramProvider>
		</QueryClientProvider>
	</BrowserRouter>
)
