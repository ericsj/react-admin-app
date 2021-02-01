import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    EmailField, 
    Filter,
    TextInput,
    Edit,
    SimpleForm,
    Create,
    EditButton,
    ImageField,
    ImageInput
} from 'react-admin';

export const PhotoList = props => (
    <List filters={<PhotoFilter />} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="albumId" />
            <TextField source="title" />
            <ImageField source="url" title="title" />
            <ImageField source="thumbnailUrl" title="title" />
            <EditButton/>
        </Datagrid>
    </List>
);

const PhotoFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const PhotoEdit = props => (
    <Edit title={<PhotoTitle />} {...props}>
        <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="albumId" />
        <TextInput source="title" />
        <TextInput source="url"/>
        <TextInput source="thumbnailUrl" />
        </SimpleForm>
    </Edit>
);

export const PhotoCreate = props => (
    <Create {...props}>
        <SimpleForm>
        <TextInput source="albumId" />
        <TextInput source="title" />
        <TextInput source="url"/>
        <TextInput source="thumbnailUrl" />
        </SimpleForm>
    </Create>
);

const PhotoTitle = ({ record }) => {
        return <span>Photo {record ? `"${record.title}"` : ''}</span>;
};