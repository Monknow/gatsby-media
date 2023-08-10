import {useState, useEffect} from "react";

export const useHasWindow = () => {
	const [isWindow, setIsWindow] = useState(false);

	useEffect(() => {
		setIsWindow(true);

		return () => setIsWindow(false);
	}, []);

	return isWindow;
};
