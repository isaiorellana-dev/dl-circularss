import "../styles/StoreInput.scss"

const StoreInput = ({ store, setStore }) => {
  return (
    <div className="store_input" >
      <p>Inserte el identificador de la tienda:</p>
      <input
        type="text"
        onChange={(e) => {
          setStore(e.target.value)
        }}
        value={store}
      ></input>
    </div>
  )
}

export default StoreInput
