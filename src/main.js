import App from './components/App.svelte';
import { initialize } from './store';

// Initialize store
initialize();

// Initialize UI
const app = new App({
	target: document.body
});

export default app;