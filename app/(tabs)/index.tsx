import "@/globals.css"
import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
import {styled} from "nativewind";


const SafeAreaView = styled(RNSafeAreaView);

export default function App() {

    return (
        <SafeAreaView className="flex-1 bg-background p-5">

        </SafeAreaView>
    );
}