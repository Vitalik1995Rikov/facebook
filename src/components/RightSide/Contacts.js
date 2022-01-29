import React from "react";

const contacts = [
    {
        img: 'https://img.icons8.com/external-color-for-better-life-royyan-wijaya/50/000000/external-avatar-avatar-i-color-for-better-life-royyan-wijaya-24.png',
        name: 'Eric Black'
    },
    {
        img: 'https://img.icons8.com/external-color-for-better-life-royyan-wijaya/50/000000/external-avatar-avatar-i-color-for-better-life-royyan-wijaya-8.png',
        name: 'Joe Smith'
    },
    {
        img: 'https://img.icons8.com/external-color-for-better-life-royyan-wijaya/50/000000/external-avatar-avatar-i-color-for-better-life-royyan-wijaya-21.png',
        name: 'Alex Makin'
    },
    {
        img: 'https://img.icons8.com/external-color-for-better-life-royyan-wijaya/50/000000/external-avatar-avatar-i-color-for-better-life-royyan-wijaya-3.png',
        name: 'Sue White'
    },
    {
        img: 'https://img.icons8.com/external-color-for-better-life-royyan-wijaya/50/000000/external-avatar-avatar-i-color-for-better-life-royyan-wijaya-6.png',
        name: 'Eshli Green'
    },
    {
        img: 'https://img.icons8.com/external-color-for-better-life-royyan-wijaya/50/000000/external-avatar-avatar-i-color-for-better-life-royyan-wijaya-5.png',
        name: 'Tom Hank'
    },
    {
        img: 'https://img.icons8.com/external-color-for-better-life-royyan-wijaya/50/000000/external-avatar-avatar-i-color-for-better-life-royyan-wijaya-22.png',
        name: 'Tim Kuk'
    },
    {
        img: 'https://img.icons8.com/external-color-for-better-life-royyan-wijaya/50/000000/external-avatar-avatar-ii-color-for-better-life-royyan-wijaya-11.png',
        name: 'Roy Jons'
    },
    {
        img: 'https://img.icons8.com/external-color-for-better-life-royyan-wijaya/50/000000/external-avatar-avatar-ii-color-for-better-life-royyan-wijaya-15.png',
        name: 'Bill Gates'
    },
    {
        img: 'https://img.icons8.com/external-color-for-better-life-royyan-wijaya/50/000000/external-avatar-avatar-i-color-for-better-life-royyan-wijaya-4.png',
        name: 'Ann Small'
    },
]

const Contacts = () => {
    return (
        <div>
            <span>Contacts</span>
            <ul>
                {contacts.map(item => (
                    <li className="flex">
                        <img src={item.img} alt="img"/>
                        <span>{item.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Contacts