import React from 'react'

const Label = ({ label, name, elementType='input', type="text", value, onChange, options = [], disabled=false, error}) => {
  return (
    <label className='w-full' htmlFor={name}>{label}
    {
        elementType === 'select' ? (
            <select 
            name={name}
            id={name}
            className='focus:outline-none p-2 rounded-sm mb-4 min-w-full'
            value={value}
            onChange={onChange}
            disabled={disabled}
            >
                {
                    options.map(option => (
                        <option value={option.value} key={option.value}>{option.label}</option>
                    ))
                }
            </select>
        ): elementType === 'textarea' ? (
            <textarea
                className='focus:outline-none p-2 rounded-sm mb-4'
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                disabled={disabled}
            ></textarea>
        ) : (
            <input
                className='focus:outline-none p-2 rounded-sm mb-4 min-w-full'
                type={type}
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                disabled={disabled}
            />
    )}
        {error && <p className='text-red-600'>{error}</p>}
    </label>
  )
}

export default Label