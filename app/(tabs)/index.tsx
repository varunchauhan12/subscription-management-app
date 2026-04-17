import "@/globals.css";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind";
import { View, Text, Image, FlatList } from "react-native";
import images from "@/app-example/constants/images";
import {
  HOME_BALANCE,
  HOME_SUBSCRIPTIONS,
  HOME_USER,
  UPCOMING_SUBSCRIPTIONS,
} from "@/constants/data";
import { icons } from "@/constants/icons";
import { formatCurrency } from "@/lib/utils";
import dayjs from "dayjs";
import ListHeading from "@/components/ListHeading";
import UpcomingSubscription from "@/components/UpcomingSubscription";
import SubscriptionCard from "@/components/SubscriptionCard";
import { useState } from "react";

const SafeAreaView = styled(RNSafeAreaView);

type UpcomingSubscriptionItem = (typeof UPCOMING_SUBSCRIPTIONS)[number];
type SubscriptionItem = (typeof HOME_SUBSCRIPTIONS)[number];

export default function App() {
  const [expandedStateId, setExpandedStateId] = useState<string | null>(null);

  return (
    <SafeAreaView className="flex-1 bg-background">
      <FlatList<SubscriptionItem>
        className="flex-1 px-5"
        data={HOME_SUBSCRIPTIONS}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24 }}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        ListHeaderComponent={
          <>
            <View className="home-header">
              <View className="home-user">
                <Image source={images.avatar} className="home-avatar" />
                <Text className="home-user-name">{HOME_USER.name}</Text>
              </View>
              <Image source={icons.add} className="home-add-icon" />
            </View>

            <View className="home-balance-card">
              <Text className="home-balance-label">Balance</Text>
              <View className="home-balance-row">
                <Text className="home-balance-amount">
                  {formatCurrency(HOME_BALANCE.amount)}
                </Text>
                <Text className="home-balance-date">
                  {dayjs(HOME_BALANCE.nextRenewalDate).format("MM/DD/YYYY")}
                </Text>
              </View>
            </View>

            <View>
              <ListHeading title="Upcoming" />
              <FlatList<UpcomingSubscriptionItem>
                data={UPCOMING_SUBSCRIPTIONS}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                ListEmptyComponent={
                  <Text className="home-empty-state">
                    No upcoming subscriptions
                  </Text>
                }
                renderItem={({ item }) => (
                  <UpcomingSubscription
                    icon={item.icon}
                    price={item.price}
                    currency={item.currency}
                    daysLeft={item.daysLeft}
                    name={item.name}
                  />
                )}
              />
            </View>

            <View className="mt-4 mb-4">
              <ListHeading title="All Subscription" />
            </View>
          </>
        }
        ListFooterComponent={<View style={{ height: 8 }} />}
        ListEmptyComponent={
          <Text className="home-empty-state">No subscriptions found</Text>
        }
        renderItem={({ item }) => (
          <SubscriptionCard
            {...item}
            expanded={expandedStateId === item.id}
            onPress={() =>
              setExpandedStateId((currentId) =>
                currentId === item.id ? null : item.id,
              )
            }
          />
        )}
      />
    </SafeAreaView>
  );
}
