import { default as ReactSelect, components } from 'react-select';

import { stringConcat } from '@/utils/helpers/stringOperation';

import ChevronDown from '@/assets/chevron-down.svg?component';

import _selectStyling from './variables/_selectStyling';

import styles from './Select.module.scss';

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <ChevronDown />
    </components.DropdownIndicator>
  );
};

const options = [
  {
    label: 'hello',
    value: 'hello',
  },
  {
    label: 'halo',
    value: 'halo',
  },
  {
    label: 'hola',
    value: 'hola',
  },
];

export default function Select(props) {
  const { customClass, name, label, ...rest } = props;
  const selectClasses = stringConcat([styles['select-comp'], customClass]);

  return (
    <section className={selectClasses}>
      {label && <label htmlFor={name}>{label}</label>}
      <ReactSelect
        {...rest}
        id={name}
        styles={_selectStyling}
        options={options}
        components={{ DropdownIndicator }}
      />
    </section>
  );
}
