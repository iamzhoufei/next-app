import { useSelector, useDispatch } from 'react-redux';
import { SettingOutlined } from '@ant-design/icons';

import SettingModal from '../Modal/Setting';
import PrestoRabbit from '../PrestoRabbit';
import { changeSetting, hideSettingModal, showSettingModal } from '../../store/globalSlice'

import styles from './index.module.scss';
import { RootState } from '../../store/types/store';

export default function Footer() {
    const dispatch = useDispatch();
    const { isSettingModalShow } = useSelector((state: RootState) => {
        return state.global;
    });

    const setting = useSelector((state: RootState) => {
        return state.global.setting;
    });

    function handleCancel() {
        dispatch(hideSettingModal())
    }

    function handleOk() {
        handleCancel()
        console.log(setting)
        localStorage.setItem('setting', JSON.stringify(setting))
    }

    return <div className={styles.footerComponent}>
        <PrestoRabbit />
        <SettingOutlined className={styles.setting} onClick={() => dispatch(showSettingModal())}/>
        <SettingModal open={isSettingModalShow} handleOk={handleOk} handleCancel={handleCancel} />
    </div>
}