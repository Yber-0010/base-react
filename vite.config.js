import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
	const env = loadEnv(mode, process.cwd(), '');
	return {
		plugins: [react()],
		define: {
			"process.env.REACT_APP_SECURE_LOCAL_STORAGE_HASH_KEY": JSON.stringify(env.REACT_APP_SECURE_LOCAL_STORAGE_HASH_KEY),
		},
	}
});
