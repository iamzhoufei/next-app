import { Button, Form, Modal, Switch } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/types/store';
import { changeSetting, hideSettingModal, showSettingModal } from '../../../store/globalSlice'

import styles from './index.module.scss';

export type TSettingModal = {
    open: boolean;
    handleOk: (params: any) => void;
    handleCancel: () => void;
}
export default function SettingModal({ open, handleOk, handleCancel }: TSettingModal) {
    const [form] = Form.useForm();

    const dispatch = useDispatch();
    const { isInfoCardShow } = useSelector((state: RootState) => {
        return state.global.setting;
    });

    function onFinish(values: any) {
        const { isInfoCardShow } = values;
        console.log(isInfoCardShow)
        dispatch(changeSetting({ isInfoCardShow }))
        dispatch(hideSettingModal());
        // const value = await values.validate()
    }
    return <Modal title="修改设置" open={open} onCancel={handleCancel} footer={null}>
        <Form form={form} name="setting_form" initialValues={{ isInfoCardShow }} onFinish={onFinish}>
            <Form.Item label="是否展示信息卡片" name='isInfoCardShow' valuePropName="checked">
                <Switch />
            </Form.Item>
            <Form.Item>
                <Button type='primary' htmlType='submit'>保存设置</Button>
            </Form.Item>
        </Form>
    </Modal>
}