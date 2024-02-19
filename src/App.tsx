import { useState, useEffect, useCallback } from 'react'
import './App.css'
import axios from 'axios';
import { map } from 'lodash';
import { JsonViewer } from '@textea/json-viewer';
import { UserData, UserDataResponse, DepartmentSummary, departmentAgerang } from './interface/DepartmentSummary';
import { calculateAgeRange } from './utils/calculateAgeRange'

function App() {
  const initialSummary: DepartmentSummary[] = [];
  const [summary, setSummary] = useState<DepartmentSummary[]>(initialSummary);

  const transformData =  useCallback(async (users: UserData[]) => {
    const summaryData: DepartmentSummary = {};
    const departmentAgerang: departmentAgerang = {};
    const transformedDataPromises = users?.length && map(users, async (user) => {
        const { company, gender, age, hair, firstName, lastName, address } = user;
        if (!summaryData[company.department]) {
          summaryData[company.department] = {
            male: 0,
            female: 0,
            ageRange: '',
            hair: {},
            addressUser: {}
          };
        }
        if (!departmentAgerang[company.department]) {
            departmentAgerang[company.department] = [age];
        } else {
            departmentAgerang[company.department].push(age);
        }
        gender === 'male' && summaryData[company.department]['male']++;
        gender === 'female' && summaryData[company.department]['female']++;
        summaryData[company.department]['ageRange'] = await calculateAgeRange(departmentAgerang[company.department]);
        summaryData[company.department].hair[hair.color] = (summaryData[company.department].hair[hair.color] || 0) + 1;
        summaryData[company.department].addressUser[`${firstName}${lastName}`] = address.postalCode;
    });
    
    await Promise.all(transformedDataPromises || []);
    
    return Object.keys(summaryData).map(key => ({ [key]: summaryData[key] }));
  },[]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get<UserDataResponse>('https://dummyjson.com/users');
        const data = response.data;
        const resultData = await transformData(data.users);
        setSummary(resultData)
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, [transformData]);

  return (
    <>
      <JsonViewer style={{textAlign: 'left'}} value={summary} theme={'auto'} rootName={false}/>
    </>
  )
}

export default App
