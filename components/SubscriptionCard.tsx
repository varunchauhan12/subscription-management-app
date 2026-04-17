import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { formatCurrency } from "@/lib/utils";
import clsx from "clsx";
import { formatSubscriptionDateTime } from "@/lib/utils";
const SubscriptionCard = ({
  name,
  price,
  currency,
  billing,
  icon,
  color,
  category,
  plan,
  renewalDate,
  onPress,
  expanded,
  paymentMethod,
  status,
  onCancelPress,
  isCancelling,
}: SubscriptionCardProps) => {
  return (
    <Pressable
      onPress={onPress}
      className={clsx("sub-card", expanded ? "sub-card-expanded" : "bg-card")}
      style={!expanded && color ? { backgroundColor: color } : undefined}
    >
      <View className={"sub-head"}>
        <View className={"sub-main"}>
          <Image source={icon} className={"sub-icon"} />
          <View className={"sub-copy"}>
            <Text className={"sub-title"} numberOfLines={1}>
              {name}
            </Text>
            <Text
              className={"sub-meta"}
              ellipsizeMode={"tail"}
              numberOfLines={1}
            >
              {category?.trim() ||
                plan?.trim() ||
                (renewalDate ? formatSubscriptionDateTime(renewalDate) : "")}
            </Text>
          </View>
        </View>
        <View className={"sub-price-box"}>
          <Text className={"sub-price"}>{formatCurrency(price, currency)}</Text>
          <Text className={"sub-billing"}>{billing}</Text>
        </View>
      </View>

      {expanded && (
        <View className={"sub-body"}>
          <View className={"sub-details"}>
            <View className={"sub-row-copy"}>
              <Text className={"sub-label"}>Status:</Text>
              <Text
                className={"sub-value"}
                numberOfLines={1}
                ellipsizeMode={"tail"}
              >
                {status?.trim() || "Active"}
              </Text>
            </View>
            <View className={"sub-row-copy"}>
              <Text className={"sub-label"}>Category:</Text>
              <Text
                className={"sub-value"}
                numberOfLines={1}
                ellipsizeMode={"tail"}
              >
                {category?.trim() || plan?.trim() || "N/A"}
              </Text>
            </View>
            <View className={"sub-row-copy"}>
              <Text className={"sub-label"}>Renewal:</Text>
              <Text
                className={"sub-value"}
                numberOfLines={1}
                ellipsizeMode={"tail"}
              >
                {renewalDate ? formatSubscriptionDateTime(renewalDate) : "N/A"}
              </Text>
            </View>
            <View className={"sub-row-copy"}>
              <Text className={"sub-label"}>Payment:</Text>
              <Text
                className={"sub-value"}
                numberOfLines={1}
                ellipsizeMode={"tail"}
              >
                {paymentMethod?.trim() || "N/A"}
              </Text>
            </View>
          </View>

          {onCancelPress && (
            <Pressable
              onPress={onCancelPress}
              disabled={isCancelling}
              className={clsx(
                "mt-4 p-3 rounded-xl items-center justify-center",
                isCancelling ? "bg-gray-500" : "bg-red-500/10",
              )}
            >
              <Text
                className={clsx(
                  "font-semibold text-sm",
                  isCancelling ? "text-gray-300" : "text-red-500",
                )}
              >
                {isCancelling ? "Cancelling..." : "Cancel Subscription"}
              </Text>
            </Pressable>
          )}
        </View>
      )}
    </Pressable>
  );
};
export default SubscriptionCard;
