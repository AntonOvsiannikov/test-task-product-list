import ReactDOM from 'react-dom/client';
import 'normalize.css';
import '@/styles/global.scss';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { router } from '@/routes';
import { store } from '@/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<RouterProvider router={router}></RouterProvider>
	</Provider>
);
