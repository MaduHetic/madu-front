/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import { Color, Font } from '../../styles/variables';
import { Company } from "../../core/company";
import { Poi } from "../../core/poi";
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles({
	inputWrapper: {
		flexGrow: '1'
	},
	placeholder: {
		'&::placeholder': {
			color: `${Color.textcolor}`,
			fontFamily: Font.family.main,
      fontSize: `16px`
		}
  },
  inputField: {
    fontSize: '16px',
    fontFamily: Font.family.main,
  }
});

function SearchInput({history}) {
  const classes = useStyles();
  const companies = Company.allCompanies() || [];
  const poi = Poi.allPoi() || [];

  const onTagsChange = (event, values) => {
    const result = [...companies, ...poi].filter(entity => entity.name === values);

    if (!result[0]) return null;
    if (result[0].isPoi) {
      history.push(`/point-d-interet/fiche/${result[0].id}`);
    } else {
      history.push(`/clients/fiche/${result[0].id}`);
    }
  }

  return (
      <Autocomplete
        freeSolo
        blurOnSelect
        disableOpenOnFocus
        disableClearable={false}
        onChange={onTagsChange}
				classes= {{
					root: classes.inputWrapper
				}}
        options={[...companies, ...poi].map(option => option.name)}
        renderInput={params => (
          <TextField
            {...params}
            margin="none"
            placeholder="Rechercher un client"
            fullWidth
            InputProps={{ ...params.InputProps, type: 'search', disableUnderline: true, classes: {inputTypeSearch: classes.placeholder, root: classes.inputField } }}
          />
        )}
      />
  );
}

export default withRouter(SearchInput);