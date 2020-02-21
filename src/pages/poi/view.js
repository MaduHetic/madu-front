import React, { useEffect, useState } from 'react';
import { useParams, withRouter } from 'react-router-dom';
import { Wrapper, TitleDefault, Tag, StyledModal } from '../../styles/global';
import CustomButton from '../../components/button/button';
import Card from '../../components/card';
import { Color } from '../../styles/variables';
import { Poi } from  '../../core/poi';
import Modal from '@material-ui/core/Modal';

const PoiView = ({ history }) => {
    const [open, setOpen] = useState(false);

    const getPoi = Poi.getPoi();
    const getAllPoi = Poi.getAllPoi();
    const deletePoi = Poi.deletePoi();
    const {id} = useParams();
    const poi = Poi.poi();

    useEffect(() => {
        getPoi(id)
        return () => {
            getAllPoi();
        }
      }, [id]);

    const handleOpen = () => {
    setOpen(true);
    };

    const handleClose = () => {
    setOpen(false);
    };

    const handleDelete = (id) => {
        deletePoi(id)
        setOpen(false);
        history.push('/point-d-interet');
    }
    
    if (!poi.poi)  {
        return null;
    } else {
        return (
            <Wrapper>
                <TitleDefault>
                    <h3 className="title">{poi.poi.name}</h3>
                    <CustomButton
                        text="Editer"
                        size="small"
                        textcolor={Color.white}
                        backgroundcolor={Color.main}
                        bordercolor={Color.main}
                        href={`/point-d-interet/fiche-edit/${poi.poi.id}`}
                    />
                    <CustomButton
                        text="Supprimer"
                        size="small"
                        textcolor={Color.white}
                        backgroundcolor={Color.red}
                        bordercolor={Color.red}
                        onClick={handleOpen}
                        type="button"
                    />
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
                        <p>{poi.poi.type}</p>
                    </div>
                    <div className="tagList">
                        <span>Liste des tags :</span>
                        <div>
                            {poi.tags.map((tag, index) => (
                                <Tag
                                    key={`tag__${index}`}
                                    colorRGB={{
                                        r: tag.r,
                                        g: tag.g,
                                        b: tag.b
                                    }}
                                >
                                    {tag.tag}
                                </Tag>
                            ))}
                        </div>
                    </div>
                    <div>
                        <span>Fourchette de prix :</span>
                        <p>{poi.poi.price}</p>
                    </div>
                    <div>
                        <span>Description :</span>
                        <p>{poi.poi.description}</p>
                    </div>
                    <div>
                        <div>
                            <span>Adresse :</span>
                            <p>{poi.poi.address}</p>
                        </div>
                        <div>
                            <span>Code postal :</span>
                            <p>{poi.poi.postalCode}</p>
                        </div>
                        <div>
                            <span>Ville :</span>
                            <p>{poi.poi.city}</p>
                        </div>
                    </div>
                    <div>
                        <span>Green Score :</span>
                        <p>{poi.poi.greenScore}%</p>
                    </div>
                    <div>
                        <span>Horaires :</span>
                        <p></p>
                    </div>
                </Card>
                <Modal
                      open={open}
                      onClose={handleClose}
                    >
                      <StyledModal>
                        <div className="title">
                          <p>Etes-vous sûr de vouloir supprimer ?</p>
                          <svg className="closeIcon" onClick={handleClose} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.18294 0L8.02275 6.83981L14.5592 0.303317L15.6664 1.41043L9.12986 7.94692L16 14.8171L14.8171 16L7.94692 9.12986L1.42559 15.6512L0.318484 14.5441L6.83981 8.02275L0 1.18294L1.18294 0Z" fill="#6A6A85"/>
                        </svg>
                        </div>
                        <div className="modalContent">
                            <div className="groupBtn">
                                <CustomButton
                                    text="Oui"
                                    size="medium"
                                    textcolor={Color.white}
                                    backgroundcolor={Color.red}
                                    bordercolor={Color.red}
                                    onClick={() => handleDelete(poi.poi.id)}
                                    type="button"
                                />
                                <CustomButton
                                    text="Non"
                                    size="medium"
                                    textcolor={Color.textcolor}
                                    backgroundcolor={Color.lightgrey}
                                    bordercolor={Color.lightgrey2}
                                    onClick={handleClose}
                                    type="button"
                                />
                            </div>
                        </div>
                      </StyledModal>
                    </Modal>
            </Wrapper>
        )
    }
}

export default withRouter(PoiView);