import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { HomeComp } from "../screens/competidores/home";
import { CompetidorView } from "../screens/competidores/cadastro";
import { myRouterTheme } from "./myRouterTheme";

export type RootTabParamList = {
  HomeComp: undefined;
  Competidor: { id: string };
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export const Routes = () => {
  return (
    <NavigationContainer theme={myRouterTheme}>
      <Tab.Navigator>
        <Tab.Screen
          name="HomeComp"
          component={HomeComp}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
            title: "Competidores",
          }}
        />
        <Tab.Screen
          listeners={({ navigation }) => ({
            focus: () => {
              navigation.setParams({ id: undefined });
            },
          })}
          name="Competidor"
          component={CompetidorView}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="account-multiple-plus"
                color={color}
                size={26}
              />
            ),
            title: "Competidor",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
