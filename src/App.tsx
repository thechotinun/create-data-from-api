import { useState, useEffect, useCallback } from 'react'
import './App.css'
import axios from 'axios';
import { map, groupBy, countBy, minBy, maxBy, mapValues, keyBy } from 'lodash';
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

  const tfdata = async (users: UserData[]) => {
    const result = map(groupBy(users, 'company.department'), (users, department) => {
      const genderSummary = countBy(users, 'gender');
      const maleCount = genderSummary['male'] || 0;
      const femaleCount = genderSummary['female'] || 0;
  
      const ages = users.map(user => user.age).filter(age => typeof age === 'number');
      const ageRange = ages.length > 0 ? `${minBy(ages)}-${maxBy(ages)}` : 'N/A';
  
      const hairColorSummary = countBy(users, 'hair.color');
  
      const addressUser = mapValues(keyBy(users, user => `${user.firstName}${user.lastName}`), 'address.postalCode');
  
      return {
          [department]: {
              male: maleCount,
              female: femaleCount,
              ageRange: ageRange,
              hair: hairColorSummary,
              addressUser: addressUser
          }
      };
  });
  
  console.log(result);
  }

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get<UserDataResponse>('https://dummyjson.com/users');
        const data = response.data;
        
        const resultData = await transformData(data.users);
        setSummary(resultData);
        await tfdata(data.users);
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
