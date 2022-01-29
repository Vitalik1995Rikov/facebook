import React from "react";

const people = [
    {
        img: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        name: 'Bob'
    },
    {
        img: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        name: 'Ann'
    },
    {
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
        name: 'James'
    },
    {
        img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        name: 'Rob'
    },
    {
        img: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        name: 'Juli'
    },
]

const Stories = () => {
    return (
        <div>
            <div className="flex justify-between">
                <span className="font-bold">Stories</span>
                <span className="text-blue-500">See all</span>
            </div>
            <ul className="flex space-x-4">
                {people.map(item => (
                    <li className="grayscale hover:grayscale-0">
                        <img className="rounded-xl" src={item.img} alt='img'/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Stories