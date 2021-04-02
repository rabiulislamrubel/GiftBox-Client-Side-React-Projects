import React from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('https://apple-tart-88350.herokuapp.com/addProduct',{
        method:'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
};


  // for this error i can't upload photo (POST https://api.imgbb.com/1/upload 400)
    // const photoLoad =(event)=>{
    //     console.log(event.target.files[0]);
    //     const imageData = new FormData();
    //     imageData.set = ('key', '823e0da9e378f63b74b9652fcacbfee2');
    //     imageData.append = ('image', event.target.files[0]);
    //     console.log(imageData);

    //     axios.post('https://api.imgbb.com/1/upload',
    //     imageData)
    //       .then(res => console.log(res))
    //       .catch(function (error) {
    //         console.log(error);
    //       } );
    //       console.log(imageData)
    // }
    return (
        <div>
          <h2>Add Product</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input name="productName" placeholder='Product Name' ref={register} className='input' />
            <br/>
            <input name="productPrice" placeholder='Product Price' ref={register} className='input' />
            {/* <input name="productPhoto" type='file'  onChange={photoLoad} disabled/> */}
            <input type="submit" className='submit' />
          </form>
        </div>
    );
};

export default Form;