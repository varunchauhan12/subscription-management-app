import {View, Text} from 'react-native'
import React from 'react'
import {useLocalSearchParams} from "expo-router";

const IndividualSubscription  = () => {
    const { id } = useLocalSearchParams<{ id : string}>()
    return (
        <View>
            <Text> This is the individual subscription page with id : { id }</Text>
        </View>
    )
}
    export default IndividualSubscription
