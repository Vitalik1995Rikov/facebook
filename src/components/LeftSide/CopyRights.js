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
            <ul className="flex"> {copy.map(item => (
                <li className="mr-1">
                    <a className="text-gray-500 text-xs" href="">{item}</a>
                </li>))}
                
            </ul>
        </div>
    )
}

export default CopyRights