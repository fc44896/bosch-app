
export interface Customer {
    id: number;
    firstName: string;
    lastName: string;
    birthDate: Date;
    email: string;
    avatar: string;
    hasContract: boolean;
    isBirthday: boolean;
  }
  export const CustomerColumns = [
    
    {
      key: 'isSelected',
      type: 'isSelected',
      label: '',
    },
    {
      key: 'firstName',
      type: 'text',
      label: 'First Name',
      required: true,
    },
    {
      key: 'lastName',
      type: 'text',
      label: 'Last Name',
    },
    {
      key: 'email',
      type: 'email',
      label: 'Email',
      required: true,
      pattern: '.+@.+',
    },
    {
      key: 'birthDate',
      type: 'date',
      label: 'Date of Birth',
    },
    {
      key: 'isEdit',
      type: 'isEdit',
      label: '',
    }
  ];