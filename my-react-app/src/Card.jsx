import profilePicture from './assets/Profile_Picture.jpeg'

function Card(){
    return(
        <div className="card">
            <img className='cardImage' src={profilePicture} alt="Profile picture"/>
            <h2 className='cardTitle'>Toth Aron</h2>
            <p className='card-text'>I'm a 3rd year computer scientist student at the University of Debrecen. One of my hobbies is going to the gym</p>
        </div>
    );
}

export default Card