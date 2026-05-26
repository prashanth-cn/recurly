import { Link } from "expo-router";
import { Text, View } from "react-native";
import "@/global.css";

export default function App() {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-xl font-bold text-blue-500">
                Welcome to Nativewind!
            </Text>
            <Link
                href={"/onboarding"}
                className="mt-4 rounded bg-primary border  p-4"
            >
                Go to Onboarding
            </Link>
            <Link
                href={"/(auth)/sign-up"}
                className="mt-4 rounded bg-primary border  p-4"
            >
                Go to SignUp
            </Link>
            <Link
                href={"/(auth)/sign-in"}
                className="mt-4 rounded bg-primary border  p-4"
            >
                Go to SignIn
            </Link>
            <Link
                href={{
                    pathname: "/subscriptions/[id]",
                    params: {
                        id: "claude",
                    },
                }}
                className="mt-4 rounded bg-primary border  p-4"
            >
                Cluade
            </Link>
        </View>
    );
}
