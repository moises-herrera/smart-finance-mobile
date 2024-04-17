import { useDispatch } from 'react-redux';
import { AppDispatch } from 'src/redux/interfaces';

export const useAppDispatch = () => useDispatch<AppDispatch>();
