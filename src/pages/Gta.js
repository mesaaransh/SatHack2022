import React from 'react'
import { useState } from 'react';

function Gta() {

    var [changeMenu, setChangeMenu] = useState(1);
    var [hoverWeaponName, setHoverWeaponName] = useState('Select Weapon');

    var [damage, setDamage] = useState('0%');
    var [fireRate, setFireRate] = useState('0%');
    var [accuracy, setAccuracy] = useState('0%');
    var [range, setRange] = useState('0%');

    var [currentWeapon, setCurrentWeapon] = useState('SMG')
    var [currentWeaponUrl, setCurrentWeaponUrl] = useState('https://vignette.wikia.nocookie.net/gtawiki/images/5/5e/SMG-GTAVPC-HUD.png/revision/latest/scale-to-width-down/185?cb=20150419121752')
    
    function weaponChange(e) {
        setChangeMenu(!changeMenu)
    }


    function changeCurrentWeaponWith(e) {

        setCurrentWeaponUrl(e.currentTarget.getAttribute('data-image'))
        setCurrentWeapon(e.currentTarget.getAttribute('data-weapon'))
        setChangeMenu(!changeMenu)

    }

    function mouseoverWeapon(e) {
        setHoverWeaponName(e.currentTarget.getAttribute('data-weapon'))
        setDamage(e.currentTarget.getAttribute('data-damage'))
        setFireRate(e.currentTarget.getAttribute('data-fire-rate'))
        setAccuracy(e.currentTarget.getAttribute('data-accuracy'))
        setRange(e.currentTarget.getAttribute('data-range'))
    }

    function mouseoutWeapon() {
        setHoverWeaponName('Select-Weapon')
        setDamage('0%')
        setFireRate('0%')
        setAccuracy('0%')
        setRange('0%')
    }


    return (
        <div className='cont'>

            <div id="current-weapon" className={changeMenu ? "" : "blurclass"}>
                <h3>Current Weapon:</h3>
                <div id="current-weapon-info">
                    <h1 id="current-weapon-name"> {currentWeapon} </h1>
                    <img height='100px' src= {currentWeaponUrl}/>
                </div>
                <button onClick={weaponChange} id="weapon-selector-button">Change</button>
            </div>



            <div id="weapon-selector-wrapper" className={changeMenu ? "" : "active"}>




                <div id="weapon-properties">
                    <h4>Damage</h4>
                    <div className="bar">
                        <div id="damage" style={{width: damage}} className="value-bar"></div>
                    </div>
                    <h4>Fire Rate</h4>
                    <div className="bar">
                        <div id="fire-rate" style={{width: fireRate}} className="value-bar"></div>
                    </div>
                    <h4>Accuracy</h4>
                    <div className="bar">
                        <div id="accuracy" style={{width: accuracy}} className="value-bar"></div>
                    </div>
                    <h4>Range</h4>
                    <div className="bar">
                        <div id="range" style={{width: range}} className="value-bar"></div>
                    </div>
                </div>





                <svg height="620px" width="620px">
                    <text textAnchor="middle" id="hovered-weapon-name" x="175" y="400" fontSize="18" stroke="none"> {hoverWeaponName} </text>


                    <g  onClick={changeCurrentWeaponWith}
                        onMouseOver={mouseoverWeapon}
                        onMouseOut={mouseoutWeapon}

                        className = {currentWeapon == 'Marksman Rifle'? 'active-weapon': ''}

                        data-weapon="Marksman Rifle"
                        data-image="https://vignette.wikia.nocookie.net/gtawiki/images/c/c8/MarksmanRifle-GTAVPC-HUD.png/revision/latest/scale-to-width-down/185?cb=20150419122123"
                        data-damage="90%"
                        data-fire-rate="80%"
                        data-accuracy="40%"
                        data-range="30%">
                        <path d="M 610 310 A 300 300 0 0 1 522.1320343559643 522.1320343559643  L 451.4213562373095 451.4213562373095 A 200 200 0 0 0 510 310  z" fill="rgba(255,255,255,0.3)" />
                        <image xlinkHref="https://vignette.wikia.nocookie.net/gtawiki/images/c/c8/MarksmanRifle-GTAVPC-HUD.png/revision/latest/scale-to-width-down/185?cb=20150419122123" x="240" y="460" height="200px" width="200px" />
                        <text x="300" y="620" fontSize="18" fill="white">6 / 6</text>
                    </g>

                    <g onClick={changeCurrentWeaponWith}
                        onMouseOver={mouseoverWeapon}
                        onMouseOut={mouseoutWeapon}

                        className = {currentWeapon == 'Fist'? 'active-weapon': ''}

                        data-weapon="Fist"
                        data-image="https://vignette.wikia.nocookie.net/gtawiki/images/e/e0/Fist-GTAVPC-HUD.png/revision/latest?cb=20150425182638"
                        data-damage="50%"
                        data-fire-rate="60%"
                        data-accuracy="70%"
                        data-range="10%">
                        <path d="M 522.1320343559643 522.1320343559643 A 300 300 0 0 1 310 610  L 310 510 A 200 200 0 0 0 451.4213562373095 451.4213562373095  z" fill="rgba(255,255,255,0.3)" />
                        <image xlinkHref="https://vignette.wikia.nocookie.net/gtawiki/images/e/e0/Fist-GTAVPC-HUD.png/revision/latest?cb=20150425182638" x="140" y="620" height="60px" width="60px" />
                    </g>

                    <g onClick={changeCurrentWeaponWith}
                        onMouseOver={mouseoverWeapon}
                        onMouseOut={mouseoutWeapon}
                        
                        className = {currentWeapon == 'Sawed-Off Shotgun'? 'active-weapon': ''}

                        data-weapon="Sawed-Off Shotgun"
                        data-image="https://vignette.wikia.nocookie.net/gtawiki/images/b/b4/SawedoffShotgun-GTAVPC-HUD.png/revision/latest/scale-to-width-down/185?cb=20150419121516"
                        data-damage="90%"
                        data-fire-rate="80%"
                        data-accuracy="40%"
                        data-range="30%">
                        <path d="M 310 610 A 300 300 0 0 1 97.86796564403576 522.1320343559643  L 168.57864376269052 451.4213562373095 A 200 200 0 0 0 310 510  z" fill="rgba(255,255,255,0.3)" />
                        <image xlinkHref="https://vignette.wikia.nocookie.net/gtawiki/images/b/b4/SawedoffShotgun-GTAVPC-HUD.png/revision/latest/scale-to-width-down/185?cb=20150419121516" x="-50" y="510" height="120px" width="120px" />
                        <text x="0" y="620" fontSize="18" fill="white">1 / 2</text>
                    </g>

                    <g onClick={changeCurrentWeaponWith}
                        onMouseOver={mouseoverWeapon}
                        onMouseOut={mouseoutWeapon}

                        className = {currentWeapon == 'Minigun'? 'active-weapon': ''}

                        data-weapon="Minigun"
                        data-image="https://vignette.wikia.nocookie.net/gtawiki/images/2/27/Minigun-GTAVPC-HUD.png/revision/latest/scale-to-width-down/185?cb=20150419122509"
                        data-damage="90%"
                        data-fire-rate="80%"
                        data-accuracy="40%"
                        data-range="30%">
                        <path d="M 97.86796564403576 522.1320343559643 A 300 300 0 0 1 10 310.00000000000006  L 110 310 A 200 200 0 0 0 168.57864376269052 451.4213562373095  z" fill="rgba(255,255,255,0.3)" />
                        <image xlinkHref="https://vignette.wikia.nocookie.net/gtawiki/images/2/27/Minigun-GTAVPC-HUD.png/revision/latest/scale-to-width-down/185?cb=20150419122509" x="-150" y="330" height="150px" width="150px" />
                        <text x="-100" y="460" fontSize="18" fill="white">77 / 100</text>
                    </g>

                    <g onClick={changeCurrentWeaponWith}
                        onMouseOver={mouseoverWeapon}
                        onMouseOut={mouseoutWeapon}

                        className = {currentWeapon == 'Jerry Can'? 'active-weapon': ''}

                        data-weapon="Jerry Can"
                        data-image="https://vignette.wikia.nocookie.net/gtawiki/images/7/73/JerryCan-GTAVPC-HUD.png/revision/latest?cb=20150425183426"
                        data-damage="20%"
                        data-fire-rate="80%"
                        data-accuracy="40%"
                        data-range="45%">
                        <path d="M 10 310.00000000000006 A 300 300 0 0 1 97.8679656440357 97.86796564403576  L 168.57864376269046 168.57864376269052 A 200 200 0 0 0 110 310  z" fill="rgba(255,255,255,0.3)" />
                        <image xlinkHref="https://vignette.wikia.nocookie.net/gtawiki/images/7/73/JerryCan-GTAVPC-HUD.png/revision/latest?cb=20150425183426" x="-45" y="180" height="70px" width="70px" />
                        <text x="-20" y="280" fontSize="18" fill="white">6</text>
                    </g>

                    <g onClick={changeCurrentWeaponWith}
                        onMouseOver={mouseoverWeapon}
                        onMouseOut={mouseoutWeapon}

                        className = {currentWeapon == 'Pistol'? 'active-weapon': ''}

                        data-weapon="Pistol"
                        data-image="https://vignette.wikia.nocookie.net/gtawiki/images/8/8f/Pistol-GTAVPC-HUD.png/revision/latest?cb=20150419121059"
                        data-damage="30%"
                        data-fire-rate="60%"
                        data-accuracy="80%"
                        data-range="60%">
                        <path d="M 97.8679656440357 97.86796564403576 A 300 300 0 0 1 309.99999999999994 10  L 309.99999999999994 110 A 200 200 0 0 0 168.57864376269046 168.57864376269052  z" fill="rgba(255,255,255,0.3)" />
                        <image xlinkHref="https://vignette.wikia.nocookie.net/gtawiki/images/8/8f/Pistol-GTAVPC-HUD.png/revision/latest?cb=20150419121059" x="130" y="90" height="100px" width="90px" />
                        <text x="150" y="190" fontSize="18" fill="white">6 / 12</text>
                    </g>

                    <g onClick={changeCurrentWeaponWith}
                        onMouseOver={mouseoverWeapon}
                        onMouseOut={mouseoutWeapon}

                        className = {currentWeapon == 'SMG'? 'active-weapon': ''}

                        data-weapon="SMG"
                        data-image="https://vignette.wikia.nocookie.net/gtawiki/images/5/5e/SMG-GTAVPC-HUD.png/revision/latest/scale-to-width-down/185?cb=20150419121752"
                        data-damage="70%"
                        data-fire-rate="10%"
                        data-accuracy="50%"
                        data-range="80%">
                        <path d="M 309.99999999999994 10 A 300 300 0 0 1 522.1320343559642 97.8679656440357  L 451.4213562373095 168.57864376269046 A 200 200 0 0 0 309.99999999999994 110  z" fill="rgba(255,255,255,0.3)" />
                        <image xlinkHref="https://vignette.wikia.nocookie.net/gtawiki/images/5/5e/SMG-GTAVPC-HUD.png/revision/latest/scale-to-width-down/185?cb=20150419121752" x="290" y="160" height="130px" width="130px" />
                        <text x="330" y="280" fontSize="18" fill="white">12 / 30</text>
                    </g>

                    <g onClick={changeCurrentWeaponWith}
                        onMouseOver={mouseoverWeapon}
                        onMouseOut={mouseoutWeapon}

                        className = {currentWeapon == 'Carbine Rifle'? 'active-weapon': ''}

                        data-weapon="Carbine Rifle"
                        data-image="https://vignette.wikia.nocookie.net/gtawiki/images/7/7a/CarbineRifle-GTAVPC-HUD.png/revision/latest/scale-to-width-down/185?cb=20150419121949"
                        data-damage="90%"
                        data-fire-rate="20%"
                        data-accuracy="60%"
                        data-range="70%">
                        <path d="M 522.1320343559642 97.8679656440357 A 300 300 0 0 1 610 309.99999999999994  L 510 309.99999999999994 A 200 200 0 0 0 451.4213562373095 168.57864376269046  z" fill="rgba(255,255,255,0.3)" />
                        <image xlinkHref="https://vignette.wikia.nocookie.net/gtawiki/images/7/7a/CarbineRifle-GTAVPC-HUD.png/revision/latest/scale-to-width-down/185?cb=20150419121949" x="360" y="340" height="130px" width="130px" />
                        <text x="390" y="460" fontSize="18" fill="white">30 / 30</text>
                    </g>
                </svg>
            </div>

        </div>
    )
}
export default Gta