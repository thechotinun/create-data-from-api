import { useState, useEffect, useCallback } from 'react'
import './App.css'
import axios from 'axios';
import { map } from 'lodash';
import { JsonViewer } from '@textea/json-viewer';
import { UserData, UserDataResponse, DepartmentSummary, departmentAgerang } from './interface/DepartmentSummary';
import { calculateAgeRange } from './utils/calculateAgeRange'

function App() {
  const [summary, setSummary] = useState<DepartmentSummary>({});

  const transformData =  useCallback(async (users: UserData[]) => {
    const setSummary: DepartmentSummary = {};
    const departmentAgerang: departmentAgerang = {};
    const transformedDataPromises = users?.length && map(users, async (user) => {
        const { company, gender, age, hair, firstName, lastName, address } = user;
        if (!setSummary[company.department]) {
          setSummary[company.department] = {
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
        gender === 'male' && setSummary[company.department]['male']++;
        gender === 'female' && setSummary[company.department]['female']++;
        setSummary[company.department]['ageRange'] = await calculateAgeRange(departmentAgerang[company.department]);
        setSummary[company.department].hair[hair.color] = (setSummary[company.department].hair[hair.color] || 0) + 1;
        setSummary[company.department].addressUser[`${firstName}${lastName}`] = address.postalCode;
    });

    await Promise.all(transformedDataPromises || []);
    
    return setSummary;
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
