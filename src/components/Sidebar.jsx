import { useState } from 'react';
import { Trash2, Plus, Menu, X, GripVertical, Circle } from 'lucide-react';
import FieldEditMenu from './FieldEditMenu';
import AddfieldMenu from './AddfieldMenu';

// Sidebar component
const Sidebar = ({
  fields,
  addField,
  deleteField,
  editField,
  currentEditingField,
}) => {
  const [isAddMenuOpen, setIsAddMenuOpen] = useState(false);

  //   const fieldTypes = ['Text', 'Email', 'Phone', 'Number', 'Date'];

  return (
    <div className="inset-0 bg-white h-screen p-4 overflow-y-auto">
      <span className="flex items-center mb-4">
        <Menu size={20} className="mr-2" />
        <h2 className="text-lg font-bold">Steps</h2>
      </span>
      <p className="text-sm text-gray-500 mb-4">
        The steps users will take to complete the form
      </p>

      {isAddMenuOpen && (
        <AddfieldMenu
          addFieldFn={addField}
          setMenuOpen={() => setIsAddMenuOpen(false)}
        />
        // <div className="mb-4 p-2 bg-white rounded shadow">
        //   {fieldTypes.map((type) => (
        //     <button
        //       key={type}
        //       className="block w-full text-left px-2 py-1 hover:bg-gray-100"
        //       onClick={() => {
        //         addField(type);
        //         setIsAddMenuOpen(false);
        //       }}
        //     >
        //       {type}
        //     </button>
        //   ))}
        // </div>
      )}

      {fields.map((field) => (
        <div
          key={field.id}
          className="flex items-center justify-between mb-2 p-2 bg-slate-100 border border-gray-600 rounded-lg text-base"
        >
          {field.id === 0 ? (
            <Circle size={16} className="mr-2" />
          ) : (
            <GripVertical size={16} className="mr-2" />
          )}
          <span onClick={() => editField(field.id)} className="cursor-pointer">
            {field.title}
          </span>
          {field.id === 0 ? (
            <button></button>
          ) : (
            <button
              onClick={() => deleteField(field.id)}
              className="text-black"
            >
              <X size={16} />
            </button>
          )}
        </div>
      ))}

      {/* //add field button */}
      <button
        className="border border-gray-300 text-black px-4 py-2 rounded-lg text-sm mb-4 flex items-center mt-4"
        onClick={() => setIsAddMenuOpen(!isAddMenuOpen)}
      >
        <Plus size={20} className="mr-2" /> Add Field
      </button>

      {currentEditingField && (
        <FieldEditMenu
          field={currentEditingField}
          saveField={editField}
          close={() => editField(null)}
        />
      )}
    </div>
  );
};

export default Sidebar;
