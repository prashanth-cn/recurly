import "@/global.css";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
	const [isFontsLoaded] = useFonts({
		"sans-regular": require("../assets/fonts/PlusJakartaSans-Regular.ttf"),
		"sans-light": require("../assets/fonts/PlusJakartaSans-Light.ttf"),
		"sans-medium": require("../assets/fonts/PlusJakartaSans-Medium.ttf"),
		"sans-Bold": require("../assets/fonts/PlusJakartaSans-Bold.ttf"),
		"sans-semibold": require("../assets/fonts/PlusJakartaSans-SemiBold.ttf"),
		"sans-extrabold": require("../assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
	});

	useEffect(() => {
		if (isFontsLoaded) {
			SplashScreen.hideAsync();
		}
	}, [isFontsLoaded]);

	if (!isFontsLoaded) return null;

	return (
		<SafeAreaProvider>
			<Stack screenOptions={{ headerShown: false }} />
		</SafeAreaProvider>
	);
}
