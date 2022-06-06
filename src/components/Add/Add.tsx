import { useState } from 'react';
// @ts-ignore
import Modal from 'react-modal';
import { Formik, Form, useField } from 'formik';
import * as yup from 'yup';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    borderColor: '#14C38E',
    transform: 'translate(-50%, -50%)',
  },
};

export const TextField = ({ placeholder, ...props }: any) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <>
      <div>
        {errorText ? (
          <input
            placeholder={placeholder}
            {...field}
            type='input'
            style={{ border: '1px solid red' }}
          />
        ) : (
          <input
            className='h-[4rem] rounded-lg border border-[#14C38E] text-center lg:h-[2.5rem]'
            placeholder={placeholder}
            {...field}
            type='input'
          />
        )}

        {errorText && <p style={{ color: 'red', margin: 0 }}>{errorText}</p>}
      </div>
    </>
  );
};

function Add() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const validationSchema = yup.object({
    caloriesBurned: yup.number().required(),
    caloriesConsumed: yup.number().required(),
    caloriesDifference: yup.number().required(),
    protein: yup.number().required(),
    carbs: yup.number().required(),
    fat: yup.number().required(),
    fiber: yup.number().required(),
  });
  return (
    <>
      <div
        onClick={openModal}
        className='mt-10 flex h-[4rem] w-[15rem] cursor-pointer items-center justify-center rounded-lg bg-[#FF9549] text-2xl  font-bold lg:ml-5 lg:h-[3rem] lg:w-[10rem] lg:text-base'
      >
        <p>Add</p>
      </div>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
      >
        <Formik
          initialValues={{
            caloriesBurned: 0,
            caloriesConsumed: 0,
            caloriesDifference: 0,
            protein: 0,
            carbs: 0,
            fat: 0,
            fiber: 0,
          }}
          validationSchema={validationSchema}
          onSubmit={(data, { resetForm }) => {
            console.log(data);
            resetForm();
          }}
        >
          {({ values, errors, isSubmitting }) => (
            <Form className='flex flex-col gap-5'>
              <div className='flex justify-between'>
                <p className='mr-10 text-2xl lg:mr-5 lg:text-base'>
                  Calories Burned
                </p>
                <TextField
                  placeholder='Enter the Calories Burned Today'
                  value={values.caloriesBurned}
                  name='caloriesBurned'
                  type='input'
                />
              </div>
              <div className='flex justify-between'>
                <p className='mr-10 text-2xl lg:mr-5 lg:text-base'>
                  Calories Consumed
                </p>
                <TextField
                  placeholder='Enter the Calories Consumed Today'
                  value={values.caloriesConsumed}
                  name='caloriesConsumed'
                  type='input'
                />
              </div>
              <div className='flex justify-between'>
                <p className='mr108 text-2xl lg:mr-5 lg:text-base'>
                  Calories Difference
                </p>
                <TextField
                  placeholder='Enter the Calories Difference'
                  value={values.caloriesDifference}
                  name='caloriesDifference'
                  type='input'
                />
              </div>
              <div className='flex justify-between'>
                <p className='mr-10 text-2xl lg:mr-5 lg:text-base'>Proteinsss</p>
                <TextField
                  placeholder='Enter the Protein Ate Today'
                  value={values.protein}
                  name='protein'
                  type='input'
                />
              </div>
              <div className='flex justify-between'>
                <p className='mr108 text-2xl lg:mr-5 lg:text-base'>Carbs</p>
                <TextField
                  placeholder='Enter the Carbs Ate Today'
                  value={values.carbs}
                  name='carbs'
                  type='input'
                />
              </div>
              <div className='flex justify-between'>
                <p className='mr108 text-2xl lg:mr-5 lg:text-base'>Fat</p>
                <TextField
                  placeholder='Enter the Fat Ate Today'
                  value={values.fat}
                  name='fat'
                  type='input'
                />
              </div>
              <div className='flex justify-between'>
                <p className='mr-10 text-2xl lg:mr-5 lg:text-base'>Fiber</p>
                <TextField
                  placeholder='Enter the Fiber Ate Today'
                  value={values.fiber}
                  name='fiber'
                  type='input'
                />
              </div>
              <button
                type='submit'
                className='mt-5 flex h-[4rem] w-[15rem] cursor-pointer items-center justify-center rounded-lg bg-[#FF9549] text-2xl  font-bold lg:h-[3rem] lg:w-[10rem] lg:text-base'
              >
                Add
              </button>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
}

export default Add;
