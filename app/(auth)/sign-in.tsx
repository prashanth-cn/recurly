import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const SignIn = () => {
    return (
        <View>
            <Text>SignIn</Text>
            <Link
                href={"/sign-up"}
                className="mt-4 rounded bg-primary border  p-4"
            >
                Sign Up
            </Link>
        </View>
    );
};

export default SignIn;
