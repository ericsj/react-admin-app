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
    ReferenceInput,
    SelectInput
} from 'react-admin';

export const CommentList = props => (
    <List filters={<CommentFilter />} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="postId" />
            <TextField source="name" />
            <TextField source="email" />
            <TextField source="body"/>
            <EditButton/>
        </Datagrid>
    </List>
);

const CommentFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <TextInput label="Photo Id" source="postId" />
        <TextInput label="Name" source="name" />
        <TextInput label="Email" source="email"  />
        <TextInput multiline label="Body" source="body" />
    </Filter>
);

export const CommentEdit = props => (
    <Edit title={<CommentTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
             <TextInput source='postId' label='Photo ID'/>      
            <TextInput source="name" />
            <TextInput source="email" />
            <TextInput multiline source="body" label='Comment'/>
        </SimpleForm>
    </Edit>
);

export const CommentCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source='PhotoId' label='Photo Id'/>
            <TextInput source="name" />
            <TextInput source="email" />
            <TextInput multiline source="body" label='Comment'/>
        </SimpleForm>
    </Create>
);

const CommentTitle = ({ record }) => {
        return <span>Comment {record ? `"${record.name}"` : ''}</span>;
};