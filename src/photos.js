import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    Filter,
    TextInput,
    Edit,
    SimpleForm,
    Create,
    EditButton,
    ImageField,
    ReferenceInput,
    SelectInput
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
        <ReferenceInput label="Album" source="albumId" reference="albums" allowEmpty>
            <SelectInput optionText="id" />
        </ReferenceInput>
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