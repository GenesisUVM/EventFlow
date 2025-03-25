/* eslint-disable react/prop-types */



function SelectField({ label, name, options, onChange, register, errors }) {
    return (
        <div className="mb-3">
            <label htmlFor={name}>{label}</label>
            <select
                id={name}
                name={name}
                onChange={onChange}
                {...register(name, { required: `${label} es obligatorio` })}
                className="form-control"
            >
                <option value="">Selecciona una opción</option>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {errors[name] && <span className="text-danger">{errors[name].message}</span>}
        </div>
    );
}

export default SelectField;