import { RouterProvider as ReactRouterProvider } from 'react-router';
import { router } from './router.tsx';

export const RouterProvider: React.FC = () => <ReactRouterProvider router={ router }/>;
