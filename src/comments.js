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
    NumberInput
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
    </Filter>
);

export const CommentEdit = props => (
    <Edit title={<CommentTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
             <NumberInput source='postId' min='0' label='Photo ID'/>      
            <TextInput source="name" />
            <TextInput source="email" />
            <TextInput multiline source="body" label='Comment'/>
        </SimpleForm>
    </Edit>
);

export const CommentCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <NumberInput source='PhotoId' min='0' label='Photo Id'/>
            <TextInput source="name" />
            <TextInput source="email" />
            <TextInput multiline source="body" label='Comment'/>
        </SimpleForm>
    </Create>
);

const CommentTitle = ({ record }) => {
        return <span>Comment {record ? `"${record.name}"` : ''}</span>;
};