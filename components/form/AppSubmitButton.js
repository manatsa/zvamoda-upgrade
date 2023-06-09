import { useFormikContext } from 'formik';
import React from 'react';
import AppButton from '../wrappers/AppButton';

function AppSubmitButton({title}) {
    const {handleSubmit} =useFormikContext()
    return (
        <AppButton title={title } onPress={handleSubmit} />
    );
}

export default AppSubmitButton;