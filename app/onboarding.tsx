import { FC } from "react";
import { Text, View } from "react-native";

interface OnBoardingProps {
    propName: string;
}

const OnBoarding: FC<OnBoardingProps> = ({ propName }) => {
    return (
        <View>
            <Text>Welcome to onboarding!!</Text>
        </View>
    );
};

export default OnBoarding;
