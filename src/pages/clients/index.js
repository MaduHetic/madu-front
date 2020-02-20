import React, { useState, useEffect } from 'react';
import { sortBy } from 'lodash';
import CustomButton from '../../components/button/button';
import Card from '../../components/card';
import { Color } from '../../styles/variables';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FormGroup from '@material-ui/core/FormGroup';
import { Checkbox } from "@material-ui/core";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Wrapper, TitleDefault, ListHeader, ListContainer } from '../../styles/global';
import { Company } from  '../../core/company';

const ClientsList = ({ match }) => {
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
      {name: 'nbWorker', label: 'Nombres d\'employés', className: 'nbWorkers'},
      {name: 'name', label: 'Date d\'ajout', className: 'date'},
      {name: 'type', label: 'Type', className: 'type'},
    ]

    if (!allCompanies) return null;
    return (
        <Wrapper>
            <TitleDefault>
                <h3 className="title">Liste des clients</h3>
                <CustomButton text="Nouveau client" size="medium" textcolor={Color.main} backgroundcolor={Color.white} bordercolor={Color.main} />
            </TitleDefault>
            <ListHeader className="client">
              {headerList.map(({name, label, className}) => (
                <div onClick={() => setSortValue(name)} className={`${name === sortValue ? 'active' : ''} filter ${className}`}>
                    <p>{label}</p>
                    <ExpandMoreIcon/>
                </div>
              ))}
                <div className="actions">
                  <CustomButton text="Filtres" size="small" textcolor={Color.textcolor} backgroundcolor={Color.white} bordercolor={Color.lightgrey2} borderradius={0.2} />
                    <FormGroup>
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
                  </FormGroup>
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
