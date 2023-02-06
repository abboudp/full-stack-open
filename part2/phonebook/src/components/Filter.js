const Filter = ({ searchField, onChange }) => (
    <>
        search: <input 
            value={searchField}
            onChange={onChange}
        />
    </>
)

export default Filter