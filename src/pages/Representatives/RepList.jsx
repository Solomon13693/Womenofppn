import React, { useState } from 'react'
import RepCards from './RepCards'

function RepList() {

    const [representatives,] = useState([
        {
            id: Math.random(),
            country: "USA",
            name: "Koray Kamara",
            email: "Lovekorayson@yahoo.com",
            image: "/images/respresentatives/13.png",
            img: "https://media.istockphoto.com/photos/flag-of-the-united-states-picture-id524055319?b=1&k=20&m=524055319&s=170667a&w=0&h=BA4elkjlqvCXyXaB5Tg7jcqpqcj9vukKGQ-DaYgrpm0="
        },
        {
            id: Math.random(),
            country: "USA",
            name: "Minella ",
            email: "Lewis-Minnan2002@yahoo.com",
            image: "/images/respresentatives/3.png",
            img: "https://media.istockphoto.com/photos/flag-of-the-united-states-picture-id524055319?b=1&k=20&m=524055319&s=170667a&w=0&h=BA4elkjlqvCXyXaB5Tg7jcqpqcj9vukKGQ-DaYgrpm0="
        },
        {
            id: Math.random(),
            country: "UK",
            name: "Suzanne Ben-Jalloh",
            email: "suzzyf04@yahoo.com",
            image: "/images/respresentatives/12.png",
            img: "https://media.istockphoto.com/photos/flag-of-united-kingdom-blowing-in-the-wind-picture-id1217765834?b=1&k=20&m=1217765834&s=170667a&w=0&h=DSa81mGBW_djSXOxlqVIQ8aYgQ6gEMWEa1p9NdCyqEE="
        },
        {
            id: Math.random(),
            country: "UK",
            name: "Ellen Heaven",
            email: "ellenmulbahheavens@outlook.com",
            image: "/images/respresentatives/15.png",
            img: "https://media.istockphoto.com/photos/flag-of-united-kingdom-blowing-in-the-wind-picture-id1217765834?b=1&k=20&m=1217765834&s=170667a&w=0&h=DSa81mGBW_djSXOxlqVIQ8aYgQ6gEMWEa1p9NdCyqEE="
        },
        {
            id: Math.random(),
            country: "Canada",
            name: "Josephine Kamara",
            email: "",
            image: "/images/respresentatives/1.png",
            img: "https://media.istockphoto.com/photos/canada-flag-picture-id486037941?b=1&k=20&m=486037941&s=170667a&w=0&h=t53v5A1RsCeCQFg-ySSwCarAgTJUlBv3LW_rCc_0R0c="
        },
        {
            id: Math.random(),
            country: "Netherlands ",
            name: "Tallah Jah",
            email: "tallahjah@yahoo.com",
            image: "/images/respresentatives/6.png",
            img: "https://media.istockphoto.com/photos/flag-of-netherlands-picture-id493887157?b=1&k=20&m=493887157&s=170667a&w=0&h=tOL2zblsBqd-d8ZZVwl-Kx4fvO5Losd_rSUoYQONVlw="
        },
        {
            id: Math.random(),
            country: "Germany  ",
            name: "Enid ",
            image: "/images/respresentatives/9.png",
            email: "Shoyoola-enidsheriff7@gmail.com",
            img: "https://media.istockphoto.com/photos/flag-of-germany-picture-id178369709?b=1&k=20&m=178369709&s=170667a&w=0&h=ido9nWjQRDZ0afU_7qjoUfeiZAgV0aOz864Xaf9wrho="
        },
        {
            id: Math.random(),
            country: "Japan",
            name: "Josephine Wonnoh ",
            email: "Alade-jalade70@yahoo.com ",
            image: "/images/respresentatives/2.png",
            img: "https://media.istockphoto.com/photos/flag-of-japan-picture-id178137781?b=1&k=20&m=178137781&s=170667a&w=0&h=R2xUkYREWpZsuYUZussif8tyDNZ6qXNg6X3S-EDvTKY="
        },
        {
            id: Math.random(),
            country: "Lithuania ",
            name: " Corine Megan ",
            email: "",
            image: "/images/respresentatives/10.png",
            img: "https://media.istockphoto.com/photos/lithuania-flag-picture-id1155924135?b=1&k=20&m=1155924135&s=170667a&w=0&h=lNs3e15me9FE9q1734D7IxSzSi08zyqRqH5N-F7S4vs="
        },
        {
            id: Math.random(),
            country: "Ghana",
            name: "Eve T Akakpo",
            email: "evelynakakpo@hotmail.com ",
            image: "/images/respresentatives/4.png",
            img: "https://media.istockphoto.com/photos/flag-of-ghana-picture-id968726228?b=1&k=20&m=968726228&s=170667a&w=0&h=hSkYY1ONXuGIw2unG06rtEGNOH_xQ8bs5NtXpzDOKuE="
        },
        {
            id: Math.random(),
            country: "Gambia",
            name: "Andrea Clark Wilson",
            email: "lendrea27@@yahoo.co.uk",
            image: "/images/respresentatives/10.png",
            img: "https://media.istockphoto.com/photos/gambia-flag-picture-id1146714652?b=1&k=20&m=1146714652&s=170667a&w=0&h=kgpms3cgUCSXceEjsT_CxJ_eb800tL0fzjMta9PZj0U="
        },
        {
            id: Math.random(),
            country: "Jamaica",
            name: "Sharon Chuck",
            email: "Sharonchucky.sc@gmail.com",
            image: "/images/respresentatives/11.png",
            img: "https://media.istockphoto.com/photos/flag-of-jamaica-blowing-in-the-wind-picture-id1219202738?b=1&k=20&m=1219202738&s=170667a&w=0&h=PCK6oLoH8v5wolwKvQ5N89-gSVn4ZYZ8TrWGw3HEFKE="
        },
        {
            id: Math.random(),
            country: "Sierra Leone",
            name: "Hannah Campbell",
            email: "ethelhb2002@yahoo.com",
            image: "/images/respresentatives/7.png",
            img: "https://media.istockphoto.com/photos/flag-of-sierra-leone-blowing-in-the-wind-picture-id1219550008?b=1&k=20&m=1219550008&s=170667a&w=0&h=FP9pVhLbSUCosS1p3SD6CFqqEMZA_SiirvqdUpo8D8c="
        },
        {
            id: Math.random(),
            country: "Sierra Leone",
            name: "Valeria Kosowright",
            email: "Frankvalpratt2001@yahoo.com",
            image: "/images/respresentatives/13.png",
            img: "https://media.istockphoto.com/photos/flag-of-sierra-leone-blowing-in-the-wind-picture-id1219550008?b=1&k=20&m=1219550008&s=170667a&w=0&h=FP9pVhLbSUCosS1p3SD6CFqqEMZA_SiirvqdUpo8D8c="
        },
        {
            id: Math.random(),
            country: "Liberia ",
            name: "Faith Richards",
            email: "mamawakanneh@yahoo.co.uk",
            image: "/images/respresentatives/5.png",
            img: "https://media.istockphoto.com/photos/liberia-flag-4k-picture-id1320969682?b=1&k=20&m=1320969682&s=170667a&w=0&h=svV3fyPn9qRV38qMlh0RpWkClhBV3VOuRyqDaYGhL2M="
        },
        {
            id: Math.random(),
            country: "Liberia ",
            name: "Eve",
            email: "Colecoleledley@gmail.com",
            image: "/images/respresentatives/8.png",
            img: "https://media.istockphoto.com/photos/liberia-flag-4k-picture-id1320969682?b=1&k=20&m=1320969682&s=170667a&w=0&h=svV3fyPn9qRV38qMlh0RpWkClhBV3VOuRyqDaYGhL2M="
        },
        {
            id: Math.random(),
            country: "Jordan",
            name: "Ranya Kargbo",
            email: "ranyakargbo@gmail.com",
            image: "/images/respresentatives/6.png",
            img: "https://media.istockphoto.com/photos/the-flag-of-jordan-picture-id869164508?b=1&k=20&m=869164508&s=170667a&w=0&h=L0ZUTT-TFg5eKa4CyqWSb81dFsA_3f2w0JbBgptYcRQ="
        },
        {
            id: Math.random(),
            country: "Ethiopia ",
            name: "Hazel Dixon",
            email: "",
            img: "https://media.istockphoto.com/photos/ethiopia-waving-flag-picture-id1177676790?b=1&k=20&m=1177676790&s=170667a&w=0&h=oKXVU930VQcxBk8gzyqEhFnh46rfkv2A1E-XaI0isU4="
        }
    ])

    return (
        <div className="row">
            {representatives.map((representative) => {
                return(
                   <div className="col-lg-4 mb-3">
                        <RepCards key={representative.id} representative={representative} />
                   </div>
                )
            })}
        </div>
    )
}

export default RepList
