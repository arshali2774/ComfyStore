import { useNavigation } from 'react-router-dom';

const SubmitBtn = ({ text }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <button
      disabled={isSubmitting}
      className='btn btn-primary btn-block uppercase'
      type='submit'
    >
      {isSubmitting ? (
        <>
          <span className='loading loading-dots loading-xs'></span>Submitting
        </>
      ) : (
        text || 'submit'
      )}
    </button>
  );
};
export default SubmitBtn;
