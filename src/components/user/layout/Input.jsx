import React from 'react';

const Input = () => {
  return (
    <div className="col-lg-6">
      <div className="central-meta">
        <img
          src="/images/resources/41801892896842e4baf9d14aacb02866.jpg"
          alt="..."
          class="img-thumbnail"
        />
        <div class="custom-file">
          <form>
            <input type="file" class="custom-file-input" id="customFile" />
            <label class="custom-file-label" for="customFile">
              Choose file
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Input;
