import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../redux/store'  // Импортируем тип AppDispatch из store

export const useAppDispatch = () => useDispatch<AppDispatch>()