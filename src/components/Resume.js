import React from "react";
import { Download } from 'react-bootstrap-icons';


function Resume() {
    return (
        <div>
            <div>
                <hr />
                    <p>Click to download</p>
                <a href="https://docs.google.com/document/d/1D6la5sEzEguK8VqIMsnK2Xkt4Nr7A0N_7HzG8_uzTu8/edit?usp=sharing">
                    <Download />
                </a>
            </div>
            <div>
                <hr />
                <p>Skills</p>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>ReactJS</li>
                    <li>SQL</li>
                    <li>Database Algorithms</li>
                </ul>
            </div>
        </div>
    );
}

export default Resume;