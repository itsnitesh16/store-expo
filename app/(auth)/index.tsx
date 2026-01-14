import AppleImage from "@/assets/images/apple.png"
import AuthImage from "@/assets/images/auth-image.png"
import GoogleImage from "@/assets/images/google.png"
import { useSocialAuth } from "@/hooks/useSocialAuth"
import React from 'react'
import { ActivityIndicator, Image, Text, TouchableOpacity, View } from 'react-native'

export default function AuthScreen() {
  const { loadingStrategy, handleSocialAuth } = useSocialAuth()

  return (
    <View className="flex-1 px-8 justify-center items-center bg-white">
      {/* Demo Image */}
      <Image
        source={AuthImage}
        className="size-96"
        resizeMode="contain"
      />

      <View className="gap-2 mt-3">
        {/* Google Signin button */}
        <TouchableOpacity
          className="flex-row items-center justify-center bg-white border border-gray-300 rounded-full px-6 py-3"
          onPress={() => handleSocialAuth("oauth_google")}
          disabled={loadingStrategy !== null}
          style={{
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.1,
            elevation: 2,
          }}
        >
          {loadingStrategy === "oauth_google" ? (
            <ActivityIndicator size={"small"} color={"#4285f4"} />
          ) : (
            <View className="flex-row items-center justify-center">
              <Image
                source={GoogleImage}
                className="size-10 mr-3"
                resizeMode="contain"
              />
              <Text className="text-black font-medium text-base">
                Continue with Google
              </Text>
            </View>
          )}
        </TouchableOpacity>

        {/* Apple Signin Button */}
        <TouchableOpacity
          className="flex-row items-center justify-center bg-white border border-gray-300 rounded-full px-6 py-4"
          onPress={() => handleSocialAuth("oauth_apple")}
          disabled={loadingStrategy !== null}
          style={{
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.1,
            elevation: 2,
          }}
        >
          {loadingStrategy === "oauth_apple" ? (
            <ActivityIndicator size={"small"} color={"#4285f4"} />
          ) : (
            <View className="flex-row items-center justify-center">
              <Image
                source={AppleImage}
                className="size-8 mr-3"
                resizeMode="contain"
              />
              <Text className="text-black font-medium text-base">
                Continue with Apple
              </Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      <Text className="text-center text-gray-500 text-sm leading-4 mt-6 px-2">
        By signing up, you agree to
        our <Text className="text-blue-500">Terms</Text>
        , <Text className="text-blue-500">Privacy Policy</Text>
        , and <Text className="text-blue-500">Cookie</Text> Use.
      </Text>
    </View>
  )
}