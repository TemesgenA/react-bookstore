import React from 'react';

const Books = () => (
  <>
    <div className="Books">
      <div className="book-detail">
        <p className="book-genre">Action</p>
        <h3 className="book-name">The Hunger Games</h3>
        <p className="contributor">Suzanne Collins</p>
        <div className="interaction">
          <span>Comments</span>
          <span>Remove</span>
          <span>Edit</span>
        </div>
      </div>
      <div className="progress">
        <div className="progress-completed">
          <div className="circular-progress-container">
            <div className="circular-progress" />
          </div>
          <div className="progress-numeric">
            <p className="p-numeric-size">64%</p>
            <p className="completed-txt">Completed</p>
          </div>
        </div>
        <div className="update-progress">
          <p>Current Chapter</p>
          <p>Chapter 17</p>
          <button type="button" className="p-btn">Update progress</button>
        </div>
      </div>
    </div>
    <div className="Books">
      <div className="book-detail">
        <p className="book-genre">Science Fiction</p>
        <h3 className="book-name">Dune</h3>
        <p className="contributor">Suzanne Collins</p>
        <div className="interaction">
          <span>Comments</span>
          <span>Remove</span>
          <span>Edit</span>
        </div>
      </div>
      <div className="progress">
        <div className="progress-completed">
          <div className="circular-progress-container">
            <div className="circular-progress" />
          </div>
          <div className="progress-numeric">
            <p className="p-numeric-size">8%</p>
            <p className="completed-txt">Completed</p>
          </div>
        </div>
        <div className="update-progress">
          <p>Current Chapter</p>
          <p>Chapter 17</p>
          <button type="button" className="p-btn">Update progress</button>
        </div>
      </div>
    </div>
    <div className="Books">
      <div className="book-detail">
        <p className="book-genre">Economy</p>
        <h3 className="book-name">The Hunger Games</h3>
        <p className="contributor">Suzanne Collins</p>
        <div className="interaction">
          <span>Comments</span>
          <span>Remove</span>
          <span>Edit</span>
        </div>
      </div>
      <div className="progress">
        <div className="progress-completed">
          <div className="circular-progress-container">
            <div className="circular-progress" />
          </div>
          <div className="progress-numeric">
            <p className="p-numeric-size">0%</p>
            <p className="completed-txt">Completed</p>
          </div>
        </div>
        <div className="update-progress">
          <p>Current Chapter</p>
          <p>Chapter 17</p>
          <button type="button" className="p-btn">Update progress</button>
        </div>
      </div>
    </div>
  </>
);

export default Books;
