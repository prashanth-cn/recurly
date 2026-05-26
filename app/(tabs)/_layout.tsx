import { tabs } from "@/constants/data";
import { colors, components } from "@/constants/theme";
import cls from "clsx";
import { Tabs } from "expo-router";
import { Image, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const tabBar = components.tabBar;

const TabIcon = ({ focused, icon }: TabIconProps) => {
	return (
		<View className="tabs-icon">
			<View className={cls("tabs-pill", focused && "tabs-active")}>
				<Image
					source={icon}
					// resizeMode="contain"
					className="tabs-glyph"
				/>
			</View>
		</View>
	);
};

const TabLayout = () => {
	const insets = useSafeAreaInsets();
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarLabelVisibilityMode: "unlabeled",
				tabBarStyle: {
					position: "absolute",
					bottom: Math.max(insets.bottom, tabBar.horizontalInset),
					height: tabBar.height,
					marginHorizontal: tabBar.horizontalInset,
					borderRadius: tabBar.radius,
					backgroundColor: colors.primary,
					borderTopWidth: 0,
					elevation: 0,
				},
				tabBarItemStyle: {
					paddingVertical: tabBar.height / 2 - tabBar.iconFrame / 1.6,
				},
				tabBarIconStyle: {
					width: tabBar.iconFrame,
					height: tabBar.iconFrame,
				},
			}}
		>
			{tabs.map(({ icon, name, title }) => (
				<Tabs.Screen
					key={name}
					name={name}
					options={{
						title,
						tabBarIcon: ({ focused, size }) => (
							<TabIcon focused={focused} icon={icon} />
						),
					}}
				></Tabs.Screen>
			))}
		</Tabs>
	);
};

export default TabLayout;
