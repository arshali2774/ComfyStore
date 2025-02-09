const FormInput = ({ label, name, type, defaultValue, size }) => {
  return (
    <label className='form-control w-full max-w-xs'>
      <div className='label'>
        <span className='label-text capitalize'>{label}</span>
      </div>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className={`input input-bordered ${size}`}
      />
    </label>
  );
};
export default FormInput;
