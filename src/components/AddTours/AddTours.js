import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const AddTours = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://cryptic-sea-16801.herokuapp.com/tourses", data)
      .then((res) => {
        console.log(res);
      });
    reset();
  };
  return (
    <div className="mt-4 mb-5 px-5">
      <h2 className="text-center mb-4">Add Tours</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="w-50 mx-auto">
        <input
          {...register("name")}
          placeholder="Name"
          className="form-control mt-3"
        />
        <input
          {...register("img")}
          placeholder="Img URL"
          className="form-control mt-3"
        />
        <input
          type="number"
          {...register("price")}
          placeholder="Price"
          className="form-control mt-3"
        />
        <textarea
          {...register("description")}
          placeholder="Description"
          className="form-control mt-3"
        ></textarea>
        <input type="submit" className="form-control submit-btn mt-3" />
      </form>
    </div>
  );
};

export default AddTours;
