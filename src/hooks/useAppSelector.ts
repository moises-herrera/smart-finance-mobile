import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from 'src/redux/interfaces';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
