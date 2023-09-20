import React from "react";
import logo from "./assets/albumLogo.jpg"

const music = {
    name: 'Группа крови',
    groupName: 'Кино',
    groupInfo: 'Виктор Цой, Юрий Дмитриевич Каспарян, Алексей Викторович, и т.д',
    albumName: 'Группа крови',
}

const Music = () => {
    return (
        <div>
            <h1>Название: {music.name}</h1>
            <h2>Группа: {music.groupName}</h2>
            <h3>Альбом: {music.albumName}</h3>
            <p>Инфо о группе: {music.groupInfo}</p>
            <img src={logo} className='logo'></img>
        </div>
    )
} 
export default Music