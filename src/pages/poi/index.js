import React from 'react';
import CustomButton from '../../components/Button/Button';
import { Color } from '../../styles/variables';


const PoiList = () => {
    return (
        <div>
            <h3>Liste des commerces</h3>
            <CustomButton text="Nouveau commerce" textcolor={Color.main} backgroundcolor={Color.white} bordercolor={Color.main} />
            <div>
                <div>
                    <div>
                        <p>Nom</p>
                    </div>
                    <div>
                        <p>Greenscore</p>
                    </div>
                    <div>
                        <p>Date d'ajout</p>
                    </div>
                    <div>
                        <p>Tags</p>
                    </div>
                    <div>
                        <p>Filtres</p>
                    </div>
                </div>
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default PoiList;
