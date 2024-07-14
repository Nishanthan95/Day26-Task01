import React from 'react';
import Card from './Card';

const Career = ({data}) => {
  const career = data.filter((item) => item.head === "Career");
  return (
    <div className="container">
      <div className="row py-5 d-flex justify-content-center">
        {career.map((item, index) => {
          return (
            <>
              <Card item={item} index={index} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Career;