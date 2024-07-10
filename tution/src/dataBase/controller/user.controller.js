import 'react-native-url-polyfill/auto';
import user_master from '../modules/user_master.model';

export const CreateUsers = async () => {
  try {
    const data = {
      name: 'shashoto',
      standard_id: 1,
      division_id: 1,
      user_type_id: 1,
      fee_id: 1,
    };
    const newUser = await user_master.create(data); // Corrected method name to `create`
    console.log('User created successfully:', newUser.toJSON());
    return newUser;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

export const getAllUser = async () => {
  try {
    const allUser = await user_master.findAll();
    return allUser;
  } catch (error) {
    return error;
  }
};
