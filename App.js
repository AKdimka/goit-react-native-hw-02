import { useState, useEffect } from 'react';
import { } from 'react-native';

import * as Font from "expo-font";
import AppLoading from 'expo-app-loading';
import LoginScreen from './Screens/auth/LoginScreen';
import RegistrationScreen from './Screens/auth/RegistrationScreen';

const loadApplication = async () => {
	await Font.loadAsync({
		"Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
		"Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
	})
}

export default function App() {
	const [isReady, setIsReady] = useState(false);

	if (!isReady) {
		return (<AppLoading
			startAsync={loadApplication}
			onFinish={() => setIsReady(true)}
			onError={console.warn} />)
	}

	return (
		<>
			{/* <LoginScreen /> */}
			<RegistrationScreen />
		</>
	);
}
