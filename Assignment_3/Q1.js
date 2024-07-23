const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", 
    "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", 
    "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", 
    "West Bengal"
];
const startsWithVowel = (state) => /^[aeiouAEIOU]/.test(state);
const filteredStates = states.filter(state => !startsWithVowel(state));
console.log(filteredStates);
// output
/**[
    'Bihar',       'Chhattisgarh',
    'Goa',         'Gujarat',
    'Haryana',     'Himachal Pradesh',
    'Jharkhand',   'Karnataka',
    'Kerala',      'Madhya Pradesh',
    'Maharashtra', 'Manipur',
    'Meghalaya',   'Mizoram',
    'Nagaland',    'Punjab',
    'Rajasthan',   'Sikkim',
    'Tamil Nadu',  'Telangana',
    'Tripura',     'West Bengal'
  ]**/