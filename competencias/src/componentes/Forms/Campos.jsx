/* eslint-disable react/prop-types */

function Campos({ label, name, type, register, errors }) {
    return (
        <div className="mb-3">
            <label htmlFor={name}>{label}</label>
            <input
                id={name}
                name={name}
                type={type}
                {...register(name, { required: `${label} es obligatorio` })} 
                className="form-control"
            />
            {errors[name] && <span className="text-danger">{errors[name].message}</span>}
        </div>
    );
}

export default Campos;