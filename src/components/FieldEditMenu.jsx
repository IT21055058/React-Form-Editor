import { useState } from 'react';
import { X, Save } from 'lucide-react';

// Field Edit Menu component
const FieldEditMenu = ({ field, saveField, close }) => {
  const [title, setTitle] = useState(field.title);
  const [description, setDescription] = useState(field.description);

  const handleSave = () => {
    saveField(field.id, { ...field, title, description });
    close();
  };

  return (
    <div className="absolute inset-0 bg-white w-1/4 rounded-lg p-4 flex flex-col">
      {/* <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"> */}
      {/* <div className="bg-white p-4 rounded-lg w-96"> */}
      <h3 className="text-lg font-bold mb-4">Edit Field</h3>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className=" p-2 mb-4 border rounded-lg bg-slate-100"
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className=" p-2 mb-4 border rounded-lg bg-slate-100"
        placeholder="Description"
      />
      <div className="flex w-full justify-between">
        <button
          onClick={handleSave}
          className="mr-2 px-4 py-2 bg-black text-white rounded flex items-center w-1/2"
        >
          Save
        </button>

        <button
          onClick={close}
          className=" px-4 py-2 hover:bg-red-300 rounded flex items-center w-1/2 text-red-600 text-bold"
        >
          Discard
        </button>
      </div>
    </div>
    //   </div>
  );
};

export default FieldEditMenu;
