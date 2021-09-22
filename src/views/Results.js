const mockData =
    {
      id: 1,
      Name: "Carmina Pimlott",
      email: "cpimlott0@epa.gov",
      Password: "By3LPc",
      Behavior: "knowledge base",
      Age: 23,
      Size: "XS",
      Medications: true,
      Disabled: false,
      Sex: "Female",
      Activity_Level: "challenge",
      Breed: "Python, carpet",
      Days_In_Shelter: 45,
      Fur_Type: "eget"
    }

export default function Results() {
	return (
		<div>
           {mockData.Name}
		</div>
	);
}