import * as React from "react";
import { Card, CardContent, CardHeader } from '@material-ui/core';

export default () => (
    <Card>
        <CardHeader title="Welcome to administration!" />
        <CardContent>
            <h1>Guide</h1>
            <h2>About</h2>
            <p>This is an administration platform for photo uploading websites, 
                like Piterest and Pixabay. Using the menu buttons on the left, you can
                select some entity (like users, comments...) to
                perform the following operations:</p>
                <ul>
                    <li>Insertion</li>
                    <li>Search</li>
                    <li>Edition</li>
                    <li>Deletion</li>
                </ul>
                <p>Below you can check more details about each menu tab:</p>
            <h3>Users</h3>
            <p>Users registered in this platform</p>
            <h3>Photos</h3>
            <p>Photos posted by users</p>
            <h3>Albums</h3>
            <p>Albums of photos uploaded by users</p>
            <h3>Comments</h3>
            <p>Comments posted on photos</p>
        </CardContent>
    </Card>
);