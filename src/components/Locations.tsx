const Locations = () => {
 const cities = [
  // Delhi NCR
  "Delhi NCR",
  "Delhi",
  "Gurgaon",
  "Noida",
  "Ghaziabad",
  "Faridabad",
  "Greater Noida",

  // Uttar Pradesh
  "Uttar Pradesh",
  "Lucknow",
  "Kanpur",
  "Meerut",
  "Moradabad",
  "Ayodhya",
  "Varanasi",
  "Prayagraj",
  "Gorakhpur",
  "Agra",
  "Aligarh",

  // Uttarakhand
  "Uttarakhand",
  "Dehradun",
  "Haldwani",
  "Rudrapur",
  "Haridwar",

  // Punjab
  "Punjab",
  "Chandigarh",
  "Ludhiana",
  "Jalandhar",
  "Patiala",
  "Ambala",
  "Amritsar",

  // Haryana
  "Haryana",
  "Gurugram",
  "Faridabad",
  "Hisar",
  "Sonipat",
  "Panipat",
  "Rohtak",

  // Rajasthan
  "Rajasthan",
  "Jaipur",
  "Ajmer",
  "Kota",
  "Jodhpur",
  "Udaipur",
  "Alwar",

  // Madhya Pradesh
  "Madhya Pradesh",
  "Bhopal",
  "Gwalior",
  "Jhansi",
  "Indore",
  "Ujjain",
  "Sagar",
];


  return (
    <section id="locations" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">
          We Deliver Across <span className="text-orange-500">India</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {cities.map((city, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-full px-6 py-3 text-lg font-medium text-gray-700 hover:bg-orange-500 hover:text-white transition-all duration-300"
            >
              {city}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
