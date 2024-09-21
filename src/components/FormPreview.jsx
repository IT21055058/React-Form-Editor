import { useEffect } from 'react';

// Form Preview component
const FormPreview = ({ fields, currentField }) => {
  useEffect(() => {}, [currentField]);

  return (
    <div className="inset-0 flex flex-col justify-center p-4 bg-black text-white tracking-wide ml-32">
      {/* <h2 className="text-2xl font-bold mb-4"></h2> */}
      <div className="animate-fade-in">
        {currentField ? (
          <div className=" p-4 rounded shadow ">
            <h3 className="text-4xl font-bold mb-2">{currentField.title}</h3>
            <p className="mb-4">{currentField.description}</p>
            {currentField.id === 0 && (
              <button className="bg-white text-black px-4 py-2 rounded-lg text-xl">
                Start
              </button>
            )}
            {['Text', 'Email', 'Phone', 'Number', 'Date'].includes(
              currentField.type
            ) && (
              <input
                type={currentField.type.toLowerCase()}
                className="w-full p-2 bg-black text-white border-b border-white focus:outline-none focus:border-b-2 caret-white"
                placeholder={`Enter ${currentField.type}`}
              />
            )}
            {/* {currentField.type === 'Text' && (
            <input type="text" className="w-full p-2 border rounded" />
          )}
          {currentField.type === 'Email' && (
            <input type="email" className="w-full p-2 border rounded" />
          )}
          {currentField.type === 'Phone' && (
            <input type="tel" className="w-full p-2 border rounded" />
          )}
          {currentField.type === 'Number' && (
            <input type="number" className="w-full p-2 border rounded" />
          )}
          {currentField.type === 'Date' && (
            <input type="date" className="w-full p-2 border rounded" />
          )} */}
          </div>
        ) : (
          <div className=" p-4 rounded shadow">
            <h3 className="text-4xl font-bold mb-2 tracking-wide">
              {fields[0].title}
            </h3>
            <p className="mb-4 text-2xl tracking-wide">
              {fields[0].description}
            </p>
            <button className="bg-white text-black px-4 py-2 rounded-lg text-xl tracking-wide">
              Start
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormPreview;
