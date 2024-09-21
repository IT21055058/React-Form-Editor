import { X, Type, Mail, Phone, Hash, Calendar } from 'lucide-react';

// AddFieldMenu component
const AddfieldMenu = ({ addFieldFn, setMenuOpen }) => {
  const fieldTypes = [
    { label: 'Text', icon: <Type /> },
    { label: 'Email', icon: <Mail /> },
    { label: 'Phone', icon: <Phone /> },
    { label: 'Number', icon: <Hash /> },
    { label: 'Date', icon: <Calendar /> },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg w-96">
        <div className="flex justify-between items-center mb-4">
          <span>Add a field</span>
          <button onClick={() => setMenuOpen()}>
            <X size={20} />
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {fieldTypes.map((type) => (
            <button
              key={type.label}
              className="flex items-center px-3 py-2 border rounded-md hover:shadow-md transition-shadow"
              onClick={() => {
                addFieldFn(type.label);
                setMenuOpen();
              }}
            >
              <span className="mr-2">{type.icon}</span>
              {type.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddfieldMenu;
