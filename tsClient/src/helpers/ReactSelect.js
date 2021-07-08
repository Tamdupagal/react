export const customStyles = {
    option: (provided, state) => ({
        ...provided,
        borderBottom: '1px dotted pink',
        color: state.isSelected ? 'white' : '#0069d9',
        padding: 10,
        fontSize: '1.5rem',
    }),
    singleValue: (provided, state) => ({
        ...provided,
        fontSize: '1.5rem',
    }),    
    placeholder: (provided, state) => ({
        ...provided,
        fontSize: '1.5rem'
    })
}