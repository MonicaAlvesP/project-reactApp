import './style.css'

export const TextInput = ({ searchValue, handleChange }) => {
  return (
    <>
      <input
        className="text-input"
        value={searchValue}
        onChange={handleChange}
        type="search" 
        placeholder='Busque por titulo...'
        />
    </>
  )
}