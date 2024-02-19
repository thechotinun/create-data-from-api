import { UserData } from '../interface/DepartmentSummary';
import { map, groupBy, countBy, minBy, maxBy, mapValues, keyBy } from 'lodash';

export const tfdata = async (users: UserData[]) => {
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
  
    return result;
}