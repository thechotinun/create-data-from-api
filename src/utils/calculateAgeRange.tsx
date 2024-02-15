export const calculateAgeRange = async (ages: number[]) => {
    const minAge = Math.min(...ages);
    const maxAge = Math.max(...ages);
    const rangeAge = `${minAge}-${maxAge}`;
    
    return rangeAge;
};