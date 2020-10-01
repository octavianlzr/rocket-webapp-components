import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { FormControlLabel, Switch } from "@material-ui/core";
import AutoComplete from "../Autocomplete";
import CustomTextField from "../CustomTextField";

function DynamicInput({ controlType, onChange, loadOptions, value, DefaultComp, defaultCompProps, ...other }) {
  const [comboOptions, setComboOptions] = useState([]);

  const comboOpen = useCallback(async () => {
    if (comboOptions.length === 0) {
      const options = await loadOptions();

      setComboOptions(
        options.map(option => {
          return { option: option.value };
        })
      );
    }
  }, [comboOptions.length, loadOptions])

  const onInputChange = useCallback(event => {
    onChange(event.target.value);
  }, [onChange])

  const onSelectionChange = useCallback(inputValue => {
    onChange(inputValue.option);
  }, [onChange])

  const onPropertyChange = useCallback(inputValue => {
    onChange(inputValue);
  }, [onChange])

  const onCheckboxPropertyChange = useCallback((_, inputValue) => {
    onChange(inputValue);
  }, [onChange])

  const integer = <CustomTextField
    isNumeric={true}
    value={value || ''}
    onChange={onPropertyChange}
    fullWidth
    {...other}
  />;
  const numericField = <CustomTextField
    onChange={onPropertyChange}
    isNumeric={true}
    fullWidth
    inputProps={{ decimalScale: 0, thousandSeparator: '' }}
    value={value || ''}
    {...other} />;
  const comboField = <AutoComplete {...other}
    fullWidth
    labelKey="option"
    valueKey="option"
    value={{ option: value }}
    onChange={onSelectionChange}
    options={comboOptions}
    onMenuOpen={comboOpen}
  />;
  const boolField = <FormControlLabel
    control={
      <Switch
        checked={value}
        onChange={onCheckboxPropertyChange} />
    }
  />
  const stringField = <CustomTextField onChange={onInputChange}
    fullWidth
    value={value || ''}
    {...other} />;

  const defaultField = <DefaultComp
    value={value || ""}
    onChange={onInputChange}
    {...defaultCompProps}
  />

  switch (controlType) {
    case 'INT': return integer;
    case 'NUM': return numericField;
    case 'STR': return stringField;
    case 'CLST': return comboField;
    case 'VCLST': return comboField;
    case 'BOOL': return boolField;
    default:
      return defaultField;
  }
}

DynamicInput.defaultProps = {
  controlType: "N/A",
  DefaultComp: CustomTextField,
  onClick: () => { },
  defaultCompProps: { fullWidth: true, disabled: true }
};

DynamicInput.propTypes = {
  controlType: PropTypes.oneOf([
    'INT',
    'NUM',
    'STR',
    'CLST',
    'VCLST',
    'BOOL'
  ]),
  onChange: PropTypes.func.isRequired,
  loadOptions: PropTypes.func,
  value: PropTypes.any,
  DefaultComp: PropTypes.func,
  defaultCompProps: PropTypes.any
};

export default DynamicInput;