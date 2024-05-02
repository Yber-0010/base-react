import { lazy } from 'react';
import { LandingMetaData } from './landingMetaData';
import { productLoader } from '../loaders/productLoader';

const { index, product, contact, about } = LandingMetaData();
const Home = lazy(async () => await import('../pages/home'));
const Product = lazy(async () => await import('../pages/product'));
const Contact = lazy(async () => await import('../pages/contact'));
const About = lazy(async () => await import('../pages/about'));


export const landingRoutes = [
	{
		path: '/home',
		element: Home,
		metaData: index,
	},
	{
		path: '/product/:id',
		element: Product,
		loader: productLoader,
		metaData: product,
	},
	{
		path: '/contact',
		element: Contact,
		// loader: preloadContact,
		metaData: contact,
	},
	{
		path: '/about',
		element: About,
		metaData: about,
	},
]
