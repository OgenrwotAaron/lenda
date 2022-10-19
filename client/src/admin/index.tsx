import React from "react";
import { Admin, Resource, ListGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import Dashboard from "./dashboard";
import { defaultTheme } from "./theme";
import Layout from "./layout";
import { authProvider } from "./providers/auth";

interface AppAdminProps {}

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const AppAdmin: React.FC<AppAdminProps> = () => {
  return (
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
      basename="/admin"
      dashboard={Dashboard}
      theme={defaultTheme}
      layout={Layout}
    >
      <Resource name="users" list={ListGuesser} />
    </Admin>
  );
};

export default AppAdmin;
