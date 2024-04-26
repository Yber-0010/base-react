import { lazy } from 'react';
import { LandingMetaData } from './landingMetaData';
import { productLoader } from '../loaders/productLoader';

const { index, product, contact, about } = LandingMetaData();
const Index = lazy(async () => await import(/* webpackChunkName: "Index" */'../pages/index'));
const Product = lazy(async () => await import(/* webpackChunkName: "Product" */'../pages/product'));
const Contact = lazy(async () => await import(/* webpackChunkName: "Contact" */'../pages/contact'));
const About = lazy(async () => await import(/* webpackChunkName: "About" */'../pages/about'));


export const landingRoutes = [
	{
		path: '/index',
		element: Index,
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
