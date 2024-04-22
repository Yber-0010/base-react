
export const storage = () => {
	
	const setStorage = (key:string,value:object):boolean => {
		try {
			localStorage.setItem(key, JSON.stringify(value));
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	}
	const getStorage = (key:string):object => {
		try {
			return JSON.parse(localStorage.getItem(key) || '{}');
		} catch (error) {
			console.log(error);
			return JSON.parse('{}');
		}
	}
	const removeStorage = (key:string):boolean => {
		try {
			localStorage.removeItem(key);
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	}
	const existStorage = (key:string):boolean => {
		try {
			return localStorage.getItem(key) !== null;
		} catch (error) {
			console.log(error);
			return false;
		}
	}
	const removeAllStorage = () => {
		try {
			localStorage.clear();
			return true
		} catch (error) {
			console.log(error);
			return false;
		}
	}

	return {
		setStorage,
		getStorage,
		removeStorage,
		existStorage,
		removeAllStorage,
	}
}
