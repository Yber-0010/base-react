
export const getDesignTokens = (mode) => ({
	palette: {
		mode:mode,
		background: {
			default: mode === 'light' ? '#f5f5f5' : '#1c1c1c',
			light: '#f1f1f1',
			dark: '#212121',
		},
		primaryButton: {
			main: mode === 'light' ? '#ffb74d' : '#f57c00',
			light: '#ffcc80',
			dark: '#ff9800',
		},
	},
});