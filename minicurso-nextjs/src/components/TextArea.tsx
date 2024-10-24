type Props = {
  label: string;
  name: string;
  required?: boolean;
};

export default function TextArea({ label, name, required = true }: Props) {
  return (
    <div className='mb-4 w-full'>
      <label
        htmlFor={name}
        className='block text-sm font-medium text-gray-700 mb-1'
      >
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        required={required}
        rows={4}
        className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500'
      />
    </div>
  );
}
