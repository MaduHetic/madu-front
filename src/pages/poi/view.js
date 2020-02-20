import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Wrapper, TitleDefault } from '../../styles/global';
import CustomButton from '../../components/Button/Button';
import Card from '../../components/Card';
import { Color } from '../../styles/variables';
import { Poi } from  '../../core/poi';

const PoiView = () => {
    const getPoi = Poi.getPoi();
    const {id} = useParams();
    const poi = Poi.poi();

    useEffect(() => {
        getPoi(id)
      }, [id]);

    console.log(poi);

    if (!poi.poi)  {
        return null;
    } else {
        return (
            <Wrapper>
                <TitleDefault>
                    <h3 className="title">{poi.poi.name}</h3>
                    <CustomButton text="Editer" size="small" textcolor={Color.white} backgroundcolor={Color.main} bordercolor={Color.main} />
                    <CustomButton text="Supprimer" size="small" textcolor={Color.white} backgroundcolor={Color.red} bordercolor={Color.red} />
                </TitleDefault>
                <Card>
                    <div className="titleContent">
                        <h4>Informations générales</h4>
                    </div>
                    <div>
                        <span>Type de fiche :</span>
                        <p>Point d'intérêt</p>
                    </div>
                    <div>
                        <span>Categorie :</span>
                        <p>Restaurant</p>
                    </div>
                    <div>
                        <span>Liste des tags :</span>
                        <div></div>
                    </div>
                    <div>
                        <span>Fourchette de prix :</span>
                        <p>Classique</p>
                    </div>
                    <div>
                        <span>Description :</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tellus diam, convallis ut nibh vel, volutpat convallis mi. Sed gravida, eros id volutpat vehicula, mauris tellus mattis libero, in pellentesque dui odio quis dolor. Ut non consectetur quam. Cras feugiat justo vel enim mattis ultrices. Ut elit ipsum, maximus id lorem eu</p>
                    </div>
                    <div>
                        <div>
                            <span>Adresse :</span>
                            <p>114 boulevard haussman</p>
                        </div>
                        <div>
                            <span>Code postal :</span>
                            <p>75009</p>
                        </div>
                        <div>
                            <span>Ville :</span>
                            <p>Paris</p>
                        </div>
                    </div>
                    <div>
                        <span>Green Score :</span>
                        <p><span>9,24</span> /10</p>
                    </div>
                    <div>
                        <span>Logo :</span>
                        <div>
                            <img src="" alt="logo"/>
                        </div>
                    </div>
                    <div>
                        <span>Horaires :</span>
                        <p></p>
                    </div>
                </Card>
            </Wrapper>
        )
    }
}

export default PoiView;