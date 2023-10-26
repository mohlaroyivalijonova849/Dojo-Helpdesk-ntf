import React from "react";

function Create() {
  return (
    <div className="flex flex-col myContainer gap-5">
      <form>
        <div class="form-control w-full mb-4">
          <h3 class="text-3xl pb-4">Add New User</h3>
          <label for="name">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="enter name"
            class="input input-bordered w-full from-control"
          />
        </div>
        <div class="form-control w-full mb-4">
          <label for="name">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="enter email"
            class="input input-bordered w-full from-control"
          />
        </div>
        <div class="form-control w-full mb-4">
          <label for="country">Country:</label>
          <input
            type="text"
            name="country"
            placeholder="enter country"
            class="input input-bordered w-full from-control"
          />
        </div>
        <br />
        <button class="btn btn-success w-full">Create</button>
      </form>
    </div>
  );
}

export default Create;
