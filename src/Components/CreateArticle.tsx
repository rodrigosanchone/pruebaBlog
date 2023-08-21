import React, { useState } from "react";

export const CreateArticle = () => {
  return (
    <div className="container mt-5">
      <form>
        <div className="mb-3 mt-5">
          <label className="form-label">Titulo Articulo</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3 mt-5">
          <label className="form-label">Contenido del articulo</label>
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Aquí va el contenido "
              id="floatingTextarea"
            ></textarea>
            <label for="floatingTextarea">Contenido</label>
          </div>
        </div>
        <div className="mt-5">
             <label for="formFileLg" class="form-label">Large file input example</label>
             <input class="form-control form-control-lg" id="formFileLg" type="file"/>
        </div>
        <button type="submit" className="btn btn-primary mt-5">
          Submit
        </button>
      </form>
    </div>
  );
};
