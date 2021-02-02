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
    ImageField,
} from 'react-admin';
import { useMediaQuery } from '@material-ui/core';


export const PhotoList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return(
    <List filters={<PhotoFilter />} {...props}>
        {isSmall ? (
            <SimpleList
            primaryText={record => record.id}
            secondaryText={record => `${record.title}`}
            tertiaryText={record => `Album: ${record.albumId}`}
            />
        ):(
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="albumId" />
            <TextField source="title" />
            <ImageField source="url" title="title" />
            <ImageField source="thumbnailUrl" title="title" />
            <EditButton/>
        </Datagrid>
        )}
    </List>
);
}
const PhotoFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <TextInput label="Id" source="id" />
        <TextInput label="Album Id" source="albumId" />
        <TextInput label="Title" source="title" />
        <TextInput label="Url" source="url" />
        <TextInput label="Thumbnail Url" source="thumbnailUrl" />
    </Filter>
);

export const PhotoEdit = props => (
    <Edit title={<PhotoTitle />} {...props}>
        <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="albumId" label="Album Id"/>
        <TextInput source="title" />
        <TextInput source="url" label="Image Url" />
        <TextInput source="thumbnailUrl" />
        </SimpleForm>
    </Edit>
);

export const PhotoCreate = props => (
    <Create {...props}>
        <SimpleForm>
        <TextInput source="albumId" label="Album Id" />
        <TextInput source="title" />
        <TextInput source="url" label="Image Url" />
        <TextInput source="thumbnailUrl" />
        </SimpleForm>
    </Create>
);

const PhotoTitle = ({ record }) => {
        return <span>Photo {record ? `"${record.title}"` : ''}</span>;
};