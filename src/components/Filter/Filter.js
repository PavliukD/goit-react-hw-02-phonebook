

export default function Filter({onChange, value}){
    return(
        <>
        <p>Find contacts by name</p>
          <input
                type="text"
                name="filter"
                onChange = {onChange}
                value = {value}
            />
        </>
    )
}