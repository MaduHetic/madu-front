import React, { useState, useEffect } from 'react';
import CustomButton from '../../components/button/button';
import Card from '../../components/card';
import { Color } from '../../styles/variables';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Checkbox } from "@material-ui/core";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Wrapper, TitleDefault, ListHeader, ListContainer, StyledModal } from '../../styles/global';
import { Poi } from  '../../core/poi';
import Modal from '@material-ui/core/Modal';

const PoiList = () => {
    const [open, setOpen] = useState(false);

    const allPoi = Poi.allPoi();
    const poiTypes = Poi.poiTypes() || [];

    const initStateCheckboxes = Object.assign(poiTypes.map(k => ({ [k]: false })))
    const [stateCheckboxes, setStateCheckboxes] = useState(initStateCheckboxes.reduce(function(result, item) {
    var key = Object.keys(item)[0]; //first property: a, b, c
      result[key] = item[key];
      return result;
    }, {}));
    const [sortValue, setSortValue] = useState("name");

    const handleChange = name => event => {
        setStateCheckboxes({ ...stateCheckboxes, [name]: event.target.checked });
    };

    const filteredData = allPoi.filter(data => Object.keys(stateCheckboxes).every(key => !stateCheckboxes[key]) ? true : stateCheckboxes[data.type]);

    const compare = (a, b) => {
      // Use toUpperCase() to ignore character casing
      let bandA = a[sortValue];
      let bandB = b[sortValue];
      if (typeof a[sortValue] === 'object') {
        bandA = bandA[0].tag.toUpperCase();
        bandB = bandB[0].tag.toUpperCase();
      } else if (typeof a[sortValue] !== 'number') {
        bandA = bandA.toUpperCase();
        bandB = bandB.toUpperCase();
      }

      let comparison = 0;
      if (bandA > bandB) {
        comparison = 1;
      } else if (bandA < bandB) {
        comparison = -1;
      }
      return comparison;
    }

    const headerList = [
      {name: 'name', label: 'Nom', className: 'name'},
      {name: 'greenScore', label: 'Greenscore', className: 'greenscore'},
      {name: 'dateCreate', label: 'Date d\'ajout', className: 'date'},
      {name: 'tags', label: 'Tags', className: 'tags'},
    ]

    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    if (!allPoi) return null;
    
    return (
        <Wrapper>
            <TitleDefault>
                <h3 className="title">Liste des commerces</h3>
            </TitleDefault>
            <ListHeader className="poi">
              {headerList.map(({name, label, className}) => (
                <div key={name} onClick={() => setSortValue(name)} className={`${className} ${sortValue === name ? 'active': ''} filter`}>
                  <p>{label}</p>
                  <ExpandMoreIcon/>
                </div>
              ))}
                <div className="actions">
                    <CustomButton
                      text="Filtres"
                      size="small"
                      textcolor={Color.textcolor}
                      backgroundcolor={Color.white}
                      bordercolor={Color.lightgrey2}
                      borderradius={0.2}
                      onClick={handleOpen}
                      type="button"
                    />
                    <Modal
                      open={open}
                      onClose={handleClose}
                    >
                      <StyledModal>
                        <div className="title">
                          <p>Filtres</p>
                          <svg className="closeIcon" onClick={handleClose} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.18294 0L8.02275 6.83981L14.5592 0.303317L15.6664 1.41043L9.12986 7.94692L16 14.8171L14.8171 16L7.94692 9.12986L1.42559 15.6512L0.318484 14.5441L6.83981 8.02275L0 1.18294L1.18294 0Z" fill="#6A6A85"/>
                        </svg>
                        </div>
                        <div className="modalContent">
                          <p>Categorie</p>
                          <div className="filterContent">
                              {poiTypes.map((cate, i) => (
                                  <FormControlLabel
                                      control={
                                          <Checkbox
                                          checked={stateCheckboxes[cate]}
                                          onChange={handleChange(cate)}
                                          value={cate}
                                          color="primary"
                                          />
                                      }
                                      label={cate}
                                      key={`poiTypes__${i}`}
                                  />
                              ))}
                          </div>
                        </div>
                      </StyledModal>
                    </Modal>
                </div>
            </ListHeader>
            <ListContainer>
                {filteredData.sort(compare).map(poi => (
                    <Card key={poi.id} poi={poi} />
                ))}
            </ListContainer>
        </Wrapper>
    )
}

export default PoiList;
