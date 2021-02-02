import * as React from "react";
import { Admin, Resource } from 'react-admin';
import UserIcon from '@material-ui/icons/Group';
import PhotoIcon from '@material-ui/icons/Photo';
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import { UserList, UserEdit, UserCreate } from './users';
import { PhotoCreate, PhotoEdit, PhotoList } from './photos';
import { AlbumList, AlbumEdit, AlbumCreate } from './albums';
import { CommentList, CommentEdit, CommentCreate } from './comments'
import jsonServerProvider from 'ra-data-json-server';
import Dashboard from './Dashboard';
import authProvider from "./authProvider";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (<Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon} />
    <Resource name="photos" list={PhotoList} edit={PhotoEdit} create={PhotoCreate} icon={PhotoIcon} />
    <Resource name="albums" list={AlbumList} edit={AlbumEdit} create={AlbumCreate} icon={PhotoAlbumIcon} />
    <Resource name="comments" list={CommentList} edit={CommentEdit} create={CommentCreate} icon={ChatBubbleIcon} />
</Admin>
);
export default App;