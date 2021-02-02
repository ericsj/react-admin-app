import * as React from "react";
import {
    List,
    SimpleList,
    Datagrid,
    TextField,
    EmailField, 
    Filter,
    TextInput,
    Edit,
    SimpleForm,
    Create,
    EditButton
} from 'react-admin';
import { useMediaQuery } from '@material-ui/core';


export const UserList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return(
    <List filters={<UserFilter />} {...props}>
        {isSmall ?(
            <SimpleList
            primaryText={record => record.id}
            secondaryText={record => `${record.name}`}
            tertiaryText={record => record.username}
            />
        ):(
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="username" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="phone" />
            <EditButton/>
        </Datagrid>
        )}
    </List>
);
}

const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <TextInput label="Id" source="id" />
        <TextInput label="Username" source="username" />
        <TextInput label="Name" source="name" />
        <TextInput label="Phone" source="phone" />
    </Filter>
);

export const UserEdit = props => (
    <Edit title={<UserUsername />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <TextInput source="username" />
            <TextInput source="email" />
            <TextInput source="phone" />
        </SimpleForm>
    </Edit>
);

export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="username" />
            <TextInput source="name" />
            <TextInput source="email" />
            <TextInput source="phone" />
        </SimpleForm>
    </Create>
);

const UserUsername = ({ record }) => {
        return <span>User {record ? `"${record.username}"` : ''}</span>;
};