import React from "react";

const menu = [
    {
        img: 'https://img.icons8.com/stickers/100/000000/avengers.png',
        title: 'Not-So-Secret Family Recipes'
    },
    {
        img: 'https://img.icons8.com/stickers/100/000000/batman-old.png',
        title: 'Red Table Talk Group'
    },
    {
        img: 'https://img.icons8.com/stickers/50/000000/fantastic-four.png',
        title: 'Events'
    },
    {
        img: 'https://img.icons8.com/stickers/50/000000/green-lantern.png',
        title: 'Saved'
    },
    {
        img: 'https://img.icons8.com/stickers/50/000000/superman.png',
        title: 'Gaming'
    },
    {
        img: 'https://img.icons8.com/stickers/50/000000/the-flash-sign.png',
        title: 'Fundraisers'
    },
    {
        img: 'https://img.icons8.com/stickers/50/000000/x-men.png',
        title: 'Memories'
    },
    {
        img: 'https://img.icons8.com/stickers/50/000000/sonic-the-hedgehog-1.png',
        title: 'Help & Support'
    },
    {
        img: 'https://img.icons8.com/stickers/50/000000/super-mario.png',
        title: 'Settings & Privacy'
    },
    {
        img: 'https://img.icons8.com/stickers/50/000000/futurama-bender.png',
        title: 'See more'
    },
]

const LeftButtons = () => {
    return (
        <div>
            <div className="flex justify-between">
              <h2>Home</h2>  
              <a href="">Create</a>
            </div>
    <ul>
        {menu.map(item => (
            <li>
                <a href="" className="flex items-center py-2">
                    <img src={item.img} alt="" className="w-9 h-9 mr-2"/>
                    <span>{item.title}</span>
                </a>
            </li>
        ))}
    </ul>
        </div>
    )
}

export default LeftButtons