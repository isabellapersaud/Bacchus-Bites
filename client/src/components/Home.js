import React from 'react';
import PhotoSlide from './PhotoSlide';
import PhotoSection from './PhotoSection';
// import YouTube from 'react-youtube';
import PhotoSlide2 from './PhotoSlide2';
import EidFavorites from './EidFavorites'; 



function Home() {


    const opts = {
        height: '360', 
        width: '640', 
        playerVars: {
            autoplay: 0,
        },
    };

    return (
        <div>
            <h2 style = {{textAlign: 'center', fontFamily:'Tangerine', fontSize: '50px', fontWeight: 'bold', letterSpacing: "0.5em"}}>Welcome to Bacchus Bites</h2>
            <PhotoSlide />
            <h2 style = {{textAlign: 'center', fontFamily:'Tangerine', fontSize: '50px', fontWeight: 'bold', letterSpacing: "0.5em"}}>Taste of Guyana :)</h2>
            <br />
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <PhotoSection
                    photoUrl='https://external-preview.redd.it/Zdn9jNBWy77_PrgwpnsqMYilVaHc9plTp2kqvbk4EuM.jpg?auto=webp&s=6f6fbab66936a5af0c9176b81d07c9ad0ab5b4f6'
                    style={{
                        flex: '1',
                        maxWidth: '100px',
                        maxHeight: '100px',
                        marginRight: '50px',
                        
                    }} 
                />
                <br />
                <p
                    style={{
                        flex: '1', 
                        textAlign: 'center', 
                        marginRight: '50px', 
                        fontFamily: 'Playfair Display',
                        fontSize: '20px',
                    }}
                >
                    Guyana is a diverse country in South America known for its unique cuisine that reflects its rich cultural heritage. Guyanese cuisine is a fusion of African, Indian, Indigenous, and European influences, resulting in a diverse range of flavors, spices, and cooking techniques. Traditional Guyanese dishes often include rice, beans, vegetables, and meat or fish, with a wide array of aromatic spices like curry, cumin, and cinnamon. Popular Guyanese dishes include roti, a type of flatbread filled with various curried meats and vegetables, pepperpot, a hearty meat stew cooked with cassareep (a sauce made from the bitter cassava root), and cook-up rice, a one-pot dish with rice, meat, and peas. Other beloved Guyanese foods include dhal puri, a lentil-filled flatbread, and cassava bread, a staple made from grated cassava root. Guyanese cuisine is known for its bold flavors, creative combinations, and hearty portions, making it a tantalizing experience for food lovers.
                </p>
            </div>
            <br />
            <br />
            <PhotoSlide2 />
            <br />

            <EidFavorites />
            {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                <YouTube videoId="zD-rWaMPosI" opts={opts} />
            </div> */}
        </div>
    );
}

export default Home;