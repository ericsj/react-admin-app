import * as React from "react";
import {
    List,
    SimpleList,
    Datagrid,
    TextField,
    Filter,
    TextInput,
    Edit,
    SimpleForm,
    Create,
    EditButton,
    ReferenceInput,
    SelectInput
} from 'react-admin';
import { useMediaQuery } from '@material-ui/core';


export const AlbumList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return(
    <List filters={<AlbumFilter />} {...props}>
        {isSmall ? (
            <SimpleList
            primaryText={record => `${record.title}`}
            secondaryText={record => `Owner Id: ${record.userId}`}
            tertiaryText={record => `Album Id: ${record.id}`}            />
        ):(
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="userId" />
            <TextField source="title" />
            <EditButton/>
        </Datagrid>
        )}
    </List>
);
}

const AlbumFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <TextInput label="Album Id" source="id" />
        <ReferenceInput label="User Id" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="id" />
        </ReferenceInput>
        <TextInput label="Album Title" source="title" />
    </Filter>
);

export const AlbumEdit = props => (
    <Edit title={<AlbumTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="title" />
        </SimpleForm>
    </Edit>
);

export const AlbumCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="userId" />
            <TextInput source="title" />
        </SimpleForm>
    </Create>
);

const AlbumTitle = ({ record }) => {
        return <span>Album {record ? `"${record.title}"` : ''}</span>;
};