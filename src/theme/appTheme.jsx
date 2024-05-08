import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { orangeTheme } from "./index"

export const AppTheme = ({ children }) => {
	return (
		<ThemeProvider theme={orangeTheme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	)
}
