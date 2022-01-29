import React from "react";

const copy = [
    'Privacy', 
    'Terms',
    'Advertising',
    'Ad Choices',
    'Cookies',
    'More',
    'Facebook &#169; 2021'
]

const CopyRights = () => {
    return (
        <div>
            <ul> {copy.map(item => (
                <li>
                    <a href="">{item}</a>
                </li>))}
                
            </ul>
        </div>
    )
}

export default CopyRights