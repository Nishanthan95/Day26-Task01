import React from 'react';
import Card from './Card';

const Datascience = ({ data }) => {
  const datascience = data.filter((item) => item.head === "Data science");
  return (
    <div className="container">
      <div className="row py-5 d-flex justify-content-center">
        {datascience.map((item, index) => {
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

export default Datascience;