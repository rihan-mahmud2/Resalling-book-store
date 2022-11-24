import SingleCategory from "./SingleCategory";

const Category = () => {
  // const [categories,setCategoris] = useState([]);

  // useEffect(() => {

  //   fetch("http://localhost:5000/product")
  //   .then(res => res.json())
  //   .then(data => )

  //  },[])

  const categories = [
    {
      _id: 1,
      category_name: "literature",
      description:
        "Intrinsicly reinvent cooperative niches whereas cross-unit leadership skills. Phosfluorescently actualize seamless intellectual capital vis-a-vis client-focused value. Professionally whiteboard process-centric initiatives with just in time intellectual capital.",
    },
    {
      _id: 2,
      category_name: "story",
      description:
        "Intrinsicly reinvent cooperative niches whereas cross-unit leadership skills. Phosfluorescently actualize seamless intellectual capital vis-a-vis client-focused value. Professionally whiteboard process-centric initiatives with just in time intellectual capital.",
    },
    {
      _id: 3,
      category_name: "tecnical",
      description:
        "Intrinsicly reinvent cooperative niches whereas cross-unit leadership skills. Phosfluorescently actualize seamless intellectual capital vis-a-vis client-focused value. Professionally whiteboard process-centric initiatives with just in time intellectual capital.",
    },
  ];

  return (
    <div className="bg-gray-100">
      <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
          <svg
            viewBox="0 0 88 88"
            className="w-full max-w-screen-xl text-indigo-100"
          >
            <circle fill="currentColor" cx="44" cy="44" r="15.5" />
            <circle
              fillOpacity="0.2"
              fill="currentColor"
              cx="44"
              cy="44"
              r="44"
            />
            <circle
              fillOpacity="0.2"
              fill="currentColor"
              cx="44"
              cy="44"
              r="37.5"
            />
            <circle
              fillOpacity="0.3"
              fill="currentColor"
              cx="44"
              cy="44"
              r="29.5"
            />
            <circle
              fillOpacity="0.3"
              fill="currentColor"
              cx="44"
              cy="44"
              r="22.5"
            />
          </svg>
        </div>
        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <SingleCategory category={category} key={category._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
