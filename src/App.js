import * as React from "react";
import { Admin, Resource } from 'react-admin';
import UserIcon from '@material-ui/icons/Group';
import { UserList } from './users';
import jsonServerProvider from 'ra-data-json-server';
import Dashboard from './Dashboard';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (<Admin dashboard={Dashboard} dataProvider={dataProvider}>
    <Resource name="users" list={UserList} icon={UserIcon} />
</Admin>
);
export default App;