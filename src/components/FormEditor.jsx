import { useState } from 'react';
import Sidebar from './Sidebar';
import FormPreview from './FormPreview';

// Main FormEditor component
const FormEditor = () => {
  const welcome_screen = {
    id: 0,
    type: 'welcome_screen',
    title: 'Welcome to our form',
    description: 'This is a description of the welcome screen',
  };

  const [fields, setFields] = useState([welcome_screen]);
  const [currentEditingField, setCurrentEditingField] = useState(null);
  const [currentPreviewField, setCurrentPreviewField] = useState(null);

  const addField = (type) => {
    const newField = {
      id: Date.now(),
      type,
      title: `New ${type} Field`,
      description: `This is a ${type} field`,
    };
    setFields([...fields, newField]);
  };

  const deleteField = (id) => {
    setFields(fields.filter((field) => field.id !== id));
    if (currentPreviewField && currentPreviewField.id === id) {
      setCurrentPreviewField(null);
    }
  };

  const editField = (id, updatedField) => {
    if (updatedField) {
      setFields(
        fields.map((field) =>
          field.id === id ? { ...field, ...updatedField } : field
        )
      );
      setCurrentEditingField(null);
      setCurrentPreviewField(updatedField);
    } else {
      setCurrentEditingField(fields.find((field) => field.id === id));
      setCurrentPreviewField(fields.find((field) => field.id === id));
    }
  };

  return (
    <div className="flex h-screen bg-white">
      <div className=" w-1/4">
        <Sidebar
          fields={fields}
          addField={addField}
          deleteField={deleteField}
          editField={editField}
          currentEditingField={currentEditingField}
        />
      </div>
      <div className="w-3/4 bg-black flex py-4 rounded-lg my-4 mr-2">
        <FormPreview fields={fields} currentField={currentPreviewField} />
      </div>
    </div>
  );
};

export default FormEditor;
