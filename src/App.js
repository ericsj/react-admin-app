import * as React from "react";
import { Admin, Resource } from 'react-admin';
import UserIcon from '@material-ui/icons/Group';
import PhotoIcon from '@material-ui/icons/Photo';
import { UserList, UserEdit, UserCreate } from './users';
import { PhotoCreate, PhotoEdit, PhotoList } from './photos';
import jsonServerProvider from 'ra-data-json-server';
import Dashboard from './Dashboard';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (<Admin dashboard={Dashboard} dataProvider={dataProvider}>
    <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon} />
    <Resource name="photos" list={PhotoList} edit={PhotoEdit} create={PhotoCreate} icon={PhotoIcon} />
</Admin>
);
export default App;