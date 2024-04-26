import { lazy } from 'react';
import { BackofficeMetaData } from "./backofficeMetaData";
import { Navigate } from 'react-router-dom';

const { users, tickets } = BackofficeMetaData()
const Users = lazy(async () => await import('../pages/users'));
const Tickets = lazy(async () => await import('../pages/tickets'));

export const backofficeRoutes = [
	{
		path: '/dashboard',
		element: Navigate,
		toyes: true,
		to: '/dashboard/user'
	},
	{
		path: 'user',
		metadata: users,
		element: Users,
		toyes: false
	},
	{
		path: 'tickets',
		metadata: tickets,
		element: Tickets,
		toyes: false
	},
	{
		path: '*',
		element: Navigate,
		toyes: true,
		to: '/dashboard/user'
	}
]