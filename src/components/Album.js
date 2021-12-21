import React, { useEffect, useState } from 'react';

export const Album = ({ getAlbums }) => {

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        const newAlbums = getAlbums();
        setAlbums(newAlbums);
    }, [getAlbums]);


    return (
        <div className='album'>
            { albums.map( el => <figure className='photo' key={el.id}>
                <span>{el.id}</span>
                <img src={el.thumbnailUrl} alt={el.title}/>
                <figcaption>{el.title}</figcaption>
            </figure>)}
        </div>
    );
}
