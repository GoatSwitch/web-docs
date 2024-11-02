import {useHistory} from 'react-router-dom';
import { useEffect } from 'react';

export default function Home(): JSX.Element {
  const history = useHistory();
  useEffect (() => {
    history.push('/overview');
  }, [history]);
  return null;
}
