import React, {useEffect} from 'react'
import s from './HW12.module.css'
import s2 from '../../s1-main/App.module.css'
import SuperSelect from '../hw07/common/c5-SuperSelect/SuperSelect'
import {useDispatch, useSelector} from 'react-redux'
import {changeThemeId} from './bll/themeReducer'
import {AppStoreType} from '../hw10/bll/store';



const themes = [
    {id: 1, value: 'light'},
    {id: 2, value: 'blue'},
    {id: 3, value: 'dark'},
]

const HW12 = () => {

    const themeId = useSelector<AppStoreType, number>(state => state.theme.themeId)

    const dispatch = useDispatch()

    const change = (id: number) => {
        dispatch(changeThemeId(id))
    }

    useEffect(() => {
        document.documentElement.dataset.theme = themeId + ''
    }, [themeId])

    return (
        <div id={'hw12'}>
            <div id={'hw12-text'} className={s2.hwTitle}>
                Theme Switcher
            </div>

            <div className={s2.hw}>
                <p className={s.pStyle}>Выберите тему</p>
                <SuperSelect
                    id={'hw12-select-theme'}
                    className={s.select}
                    onChangeOption={change}
                    options={themes}
                />
            </div>
        </div>
    )
}

export default HW12
