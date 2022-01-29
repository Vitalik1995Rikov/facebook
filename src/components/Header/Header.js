import React from "react";


const icons = [
    {
        img: 'https://img.icons8.com/fluency-systems-regular/50/000000/adobe-lightroom.png',
        name: 'Adobe'
    },
    {
        img: 'https://img.icons8.com/fluency-systems-regular/50/000000/chrome.png',
        name: 'Google'
    },
    {
        img: 'https://img.icons8.com/fluency-systems-regular/50/000000/opera.png',
        name: 'Opera'
    },
    {
        img: 'https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/50/000000/external-woman-back-to-school-vitaliy-gorbachev-lineal-color-vitaly-gorbachev-2.png',
        name: 'Avatar'
    },
    {
        img: 'https://img.icons8.com/fluency-systems-regular/50/000000/apple-app-store.png',
        name: 'Store'
    },
    {
        img: 'https://img.icons8.com/fluency-systems-regular/50/000000/adobe-photoshop.png',
        name: 'Photoshop'
    },
    {
        img: 'https://img.icons8.com/fluency-systems-regular/50/000000/adobe-illustrator.png',
        name: 'Illustrator'
    },
]

const Header = () => {
    return (
        <div className="m-2 shadow-lg flex">
            <div className="flex w-1/4">
                <img className="w-10" src="https://img.icons8.com/fluency/50/000000/facebook-new.png" alt="img"/>
                <input type="text" placeholder="search" />
            </div>
            <div className="flex">
                <div className="">
                    <ul className="flex">
                        {icons.map(item => (
                            <li className="w-8">
                                <img src={item.img} alt="img" />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="">
                    <img className="w-8" src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-settings-business-and-management-kiranshastry-lineal-kiranshastry-3.png" alt='img'/>
                </div>
            </div>
        </div>
    )
}

export default Header