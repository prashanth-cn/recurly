import { Stack, Tabs } from "expo-router";

const TabLayout = () => {
    return (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen name="index" options={{ title: "Home" }}></Tabs.Screen>
            <Tabs.Screen
                name="subscriptions"
                options={{ title: "Subscriptions" }}
            ></Tabs.Screen>
            <Tabs.Screen
                name="insights"
                options={{ title: "Insights" }}
            ></Tabs.Screen>
            <Tabs.Screen
                name="settings"
                options={{ title: "Settings" }}
            ></Tabs.Screen>
        </Tabs>
    );
};

export default TabLayout;
