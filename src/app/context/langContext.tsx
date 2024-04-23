import React, {useState, createContext} from 'react';
import en from '../../lang/en-US.json';
import es from '../../lang/es-ES.json';
import {IntlProvider} from 'react-intl';


type LangContextType = {
	establecerLenguaje: (lenguaje: string) => void;
};

const langContext = createContext<LangContextType | undefined>(undefined);

const LangProvider = ({children}) => {
	let localePorDefecto:string='en-US';
	let mensajesPorDefecto:{}= en;
	const lang = localStorage.getItem('lang');

	if(lang){
		localePorDefecto = lang

		if(lang === 'es-ES'){
			mensajesPorDefecto = es;
		} else if(lang === 'en-US'){
			mensajesPorDefecto = en
		} else {
			localePorDefecto = 'en-US'
			mensajesPorDefecto = en
		}
	}

	const [mensajes, establecerMensajes] = useState(mensajesPorDefecto);
	const [locale, establecerLocale] = useState(localePorDefecto);

	const establecerLenguaje = (lenguaje:string) => {
		switch (lenguaje){
			case 'es-ES':
				establecerMensajes(es);
				establecerLocale('es-ES');
				localStorage.setItem('lang', 'es-ES');
				break;
			case 'en-US':
				establecerMensajes(en);
				establecerLocale('en-US');
				localStorage.setItem('lang', 'en-US');
				break;
			default:
				establecerMensajes(en);
				establecerLocale('en-US');
				localStorage.setItem('lang', 'en-US');
		}
	}

	return (
		<langContext.Provider value={{establecerLenguaje: establecerLenguaje}}>
			<IntlProvider locale={locale} messages={mensajes}>
				{children}
			</IntlProvider>
		</langContext.Provider>
	);
}
 
export {LangProvider, langContext};