import React from 'react'
import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
import {styled} from "nativewind";
import {Text} from "react-native";
const SafeAreaView = styled(RNSafeAreaView);
const Subscriptions = () => {
    return (
        <SafeAreaView className={"flex-1 bg-background p-5"}>
            <Text className={'font-rubik-bold text-6xl'}>Subscription</Text>
        </SafeAreaView>

    )
}
export default Subscriptions
