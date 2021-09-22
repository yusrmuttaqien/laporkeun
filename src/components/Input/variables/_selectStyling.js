export default {
  control: (base, state) => ({
    ...base,
    borderRadius: 0,
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: '1px solid var(--third-color)',
    boxShadow: 'none',
    opacity: state.isFocused ? 1 : 0.5,
    '&:hover': {
      borderColor: 'var(--third-color)',
      boxShadow: 'none',
    },
  }),
  placeholder: (base) => ({
    ...base,
    color: 'var(--third-color)',
  }),
  dropdownIndicator: (base) => ({
    ...base,
    svg: {
      height: '1em',
      width: 'auto',
      fill: 'var(--third-color)',
    },
  }),
  indicatorSeparator: (base) => ({
    ...base,
    display: 'none',
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: 'rgba(var(--main-color-rgb), .8)',
    borderRadius: 0,
    backdropFilter: 'blur(10px)',
  }),
  option: (base, state) => ({
    ...base,
    color: state.isSelected ? 'var(--main-color)' : 'var(--third-color)',
    backgroundColor: state.isSelected && 'var(--third-color)',
    '&:hover': {
      color: !state.isSelected && 'var(--main-color)',
      backgroundColor: !state.isSelected && 'rgba(var(--third-color-rgb), 0.5)',
    },
    '&:active': {
      color: !state.isSelected && 'var(--main-color)',
      backgroundColor: state.isSelected
        ? 'var(--third-color)'
        : 'rgba(var(--third-color-rgb), 0.8)',
    },
  }),
};
