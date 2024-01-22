import React from 'react';
import DeveloperProfile from '../Reusable/DeveloperProfile';
import WriteSomeCode from '../Reusable/WriteSomeCode';

export default function TeamPhotoSection() {
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            backgroundColor: "transperant",
            width:"80vw",
            marginTop: 100,
            marginBottom: 50
        }}>
            <DeveloperProfile developerName={"Sujay Pagam"} developerDescription={"Backend & Frontend Developer"} mailId="mailto:sujay@gmail.com" />
            <DeveloperProfile developerName={"Mihir Patil"} developerDescription={"Frontend Developer"} mailId="" />
            <DeveloperProfile developerName={"Prashant Nawale"} developerDescription={"UI Designer"} mailId="" />
            <DeveloperProfile developerName={"Tushar Gawade"} developerDescription={"Gatsby Developer"} mailId="" />
        </div>
    );
}
