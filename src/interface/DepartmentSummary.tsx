export interface UserData {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    hair: {
      color: string;
      type: string;
    };
    address: {
      postalCode: string;
    };
    company: {
      department: string;
    };
  }
  
export interface UserDataResponse {
    users: UserData[];
    total: number;
    skip: number;
    limit: number;
  }
  
  
export interface DepartmentSummary {
    [department: string]: {
      male: number;
      female: number;
      ageRange: string;
      hair: Record<string, number>;
      addressUser: Record<string, string>;
    };
  }

export interface departmentAgerang {
  [department: string]: number[];
}