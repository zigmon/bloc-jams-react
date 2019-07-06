import React from 'react';

const Landing = () => (
    <section className="landing">
        <div className="title">
            <div className="container" >
                <div className="row" id="box-search">
                    <div className="thumbnail text-center">
                        <img className="landing-image" src="https://i.imgur.com/YphzYGM.gif" alt="the dude"/>
                        <div className="caption">
                            <h1>Turn up the music!</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="feature float-left d-inline-block">
            <p> <ion-icon name="musical-note" size="large" /> </p>
            <h4 className="point-title">Choose your music</h4>
            <p className="point-description">The world is full of music; why should you have to listen to music that someone else chose?</p>
        </div>
        <div className="feature float-none d-inline-block">
            <p> <ion-icon name="options" size="large" /> </p>
            <h4 className="point-title">Unlimited, streaming, ad-free</h4>
            <p className="point-description">No arbitrary limits. No distractions.</p>
        </div>
        <div className="feature float-right d-inline-block">
            <p> <ion-icon name="phone-portrait" size="large" /> </p>
            <h4 className="point-title ">Mobile enabled</h4>
            <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
        </div>
    </section>
);

export default Landing;