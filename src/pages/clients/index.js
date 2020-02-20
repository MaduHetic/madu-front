import React, { useState, useEffect } from 'react';
import { sortBy } from 'lodash';
import CustomButton from '../../components/button/button';
import Card from '../../components/card';
import { Color } from '../../styles/variables';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Checkbox } from "@material-ui/core";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Wrapper, TitleDefault, ListHeader, ListContainer, StyledModal } from '../../styles/global';
import { Company } from  '../../core/company';
import Modal from '@material-ui/core/Modal';

const ClientsList = () => {
    const [open, setOpen] = useState(false);

    const allCompanies = Company.allCompanies();
    const companyTypes = Company.companyTypes() || [];
    const initStateCheckboxes = Object.assign(companyTypes.map(k => ({ [k]: false })))
    const [stateCheckboxes, setStateCheckboxes] = useState(initStateCheckboxes.reduce(function(result, item) {
    var key = Object.keys(item)[0]; //first property: a, b, c
      result[key] = item[key];
      return result;
    }, {}));
    const [sortValue, setSortValue] = useState("name");

    const handleChange = name => event => {
        setStateCheckboxes({ ...stateCheckboxes, [name]: event.target.checked });
    };

    const filteredData = allCompanies.filter(data => Object.keys(stateCheckboxes).every(key => !stateCheckboxes[key]) ? true : stateCheckboxes[data.type]);

    const compare = (a, b) => {
      // Use toUpperCase() to ignore character casing
      let bandA = a[sortValue];
      let bandB = b[sortValue];
      if (typeof a[sortValue] !== 'number') {
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
      {name: 'nbWorker', label: 'utilisateurs', className: 'nbWorkers'},
      {name: 'createDate', label: 'Date d\'ajout', className: 'date'},
      {name: 'type', label: 'Type', className: 'type'},
    ]

    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    if (!allCompanies) return null;

    return (
        <Wrapper>
            <TitleDefault>
                <h3 className="title">Liste des clients</h3>
                <CustomButton text="Nouveau client" size="medium" textcolor={Color.main} backgroundcolor={Color.white} bordercolor={Color.main} type="button" />
            </TitleDefault>
            <ListHeader className="client">
              {headerList.map(({name, label, className}) => (
                <div onClick={() => setSortValue(name)} className={`${name === sortValue ? 'active' : ''} filter ${className}`}>
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
                              {companyTypes.map((cate, i) => (
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
                                  key={`companyTypes__${i}`}
                                />
                              ))}
                          </div>
                        </div>
                      </StyledModal>
                    </Modal>
                </div>
            </ListHeader>
            <ListContainer>
              {filteredData.sort(compare).map(client => (
                  <Card key={client.id} client={client} />
              ))}
            </ListContainer>
        </Wrapper>
    )
}

export default ClientsList;
