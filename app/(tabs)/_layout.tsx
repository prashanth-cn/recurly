import { tabs } from "@/constants/data";
import { colors, components } from "@/constants/theme";
import cls from "clsx";
import * as Haptics from "expo-haptics";
import { Tabs } from "expo-router";
import { Image, Pressable, View } from "react-native";
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
					padding: 0,
				},
				tabBarItemStyle: {
					// paddingVertical: 6,
				},
				tabBarIconStyle: {
					height: tabBar.iconFrame,
					width: "100%",
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
						tabBarButton: (props) => {
							return (
								<Pressable
									{...(props as any)}
									onPress={async (e) => {
										props.onPress?.(e);
										await Haptics.selectionAsync();
									}}
									className={cls(props.className, "p-0!")}
								/>
							);
						},
						headerPressOpacity: 0.5,
					}}
				/>
			))}
		</Tabs>
	);
};

export default TabLayout;
