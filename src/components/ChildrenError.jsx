import { useRouteError } from 'react-router-dom';

const ChildrenError = () => {
  // eslint-disable-next-line no-unused-vars
  const error = useRouteError();
  return <h4 className='font-bold text-4xl'>There was an error...</h4>;
};
export default ChildrenError;
