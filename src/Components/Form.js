import React from "react";
import "../App.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required("First Name should be required please"),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  age: yup.number().positive().integer().required(),
  password: yup.string().min(4).max(15).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

function Form() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    console.log(data);
  };
  return (
    <div className="Form">
      <div className="title">Registration</div>
      <div className="inputs">
        <form onSubmit={handleSubmit(submitForm)}>
          <input
            type="text"
            name="Name"
            ref={register}
            placeholder="Name..."
          />
          <p> {errors.name?.message} </p>
          <input
            type="text"
            name="nickName"
            placeholder="Last Name..."
            ref={register}
          />
          <p> {errors.lastName?.message} </p>
          <input
            type="text"
            name="email"
            placeholder="Email..."
            ref={register}
          />
          <p> {errors.email?.message} </p>
          <input
            type="text"
            name="username"
            placeholder="Username..."
            ref={register}
          />
          <p> {errors.username?.message} </p>

          <input type="text" name="age" placeholder="Age..." ref={register} />
          <p> {errors.age?.message} </p>
          <input
            type="password"
            name="password"
            placeholder="Password..."
            ref={register}
          />
          <p> {errors.password?.message} </p>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password..."
            ref={register}
          />
          <p> {errors.confirmPassword && "Passwords Should Match!"} </p>
          <input
            type="text"
            name="Mobile"
            placeholder="Mobile..."
            ref={register}
          />
          <p> {errors.mobile?.message} </p>
          <input
            type="text"
            name="Whatsapp"
            placeholder="Whatsapp..."
            ref={register}
          />
          <p> {errors.whatsapp?.message} </p>
          <input
            type="text"
            name="gender"
            placeholder="Gender..."
            ref={register}
          />
          <p> {errors.gender?.message} </p>
          <input
            type="text"
            name="dob"
            placeholder="Dob..."
            ref={register}
          />
          <p> {errors.dob?.message} </p>
          <input
            type="text"
            name="country"
            placeholder="Country..."
            ref={register}
          />
          <p> {errors.country?.message} </p>
          <input
            type="text"
            name="City"
            placeholder="City..."
            ref={register}
          />
          <p> {errors.city?.message} </p>
          <input
            type="text"
            name="roleid"
            placeholder="Roleid..."
            ref={register}
          />
          <p> {errors.roleid?.message} </p>
          <input
            type="text"
            name="profilephoto"
            placeholder="ProfilePhoto..."
            ref={register}
          />
          <p> {errors.profilephoto?.message} </p>
          <input
            type="text"
            name="interest"
            placeholder="Interest..."
            ref={register}
          />
          <p> {errors.interest?.message} </p>
          <input
            type="text"
            name="googleid"
            placeholder="GoogleId..."
            ref={register}
          />
          <p> {errors.googleid?.message} </p>
          <input
            type="text"
            name="facebookid"
            placeholder="FacebookId..."
            ref={register}
          />
          <p> {errors.facebookid?.message} </p>
          <input
            type="text"
            name="channel"
            placeholder="Channel..."
            ref={register}
          />
          <p> {errors.channel?.message} </p>
          <input
            type="text"
            name="createdby"
            placeholder="CreatedBy..."
            ref={register}
          />
          <p> {errors.createdby?.message} </p>
          <input
            type="text"
            name="modifiedby"
            placeholder="ModifiedBy..."
            ref={register}
          />
          <p> {errors.username?.message} </p>
          <input
            type="text"
            name="modifieddate"
            placeholder="ModifiedDate..."
            ref={register}
          />
          <p> {errors.modifieddate?.message} </p>
          <input type="submit" id="submit" />
        </form>
      </div>
    </div>
  );
}

export default Form;
