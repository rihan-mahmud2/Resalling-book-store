import img1 from "../../../src/assets/images/images (1).jpg";
import img2 from "../../../src/assets/images/images (2).jpg";
import img3 from "../../../src/assets/images/images (3).jpg";
import img4 from "../../../src/assets/images/images (4).jpg";
import img5 from "../../../src/assets/images/images (5).jpg";
import img6 from "../../../src/assets/images/images (6).jpg";

export const Review = () => {
  const reviews = [
    {
      id: 1,
      img: img1,
      name: "Adrin",
      description:
        "Phosfluorescently harness efficient alignments before enterprise collaboration and idea-sharing. Quickly initiate flexible strategic theme areas vis-a-vis customer directed human capital. Progressively restore market positioning core competencies for.",
    },
    {
      id: 2,
      img: img2,
      name: "Kayrul",
      description:
        "Phosfluorescently harness efficient alignments before enterprise collaboration and idea-sharing. Quickly initiate flexible strategic theme areas vis-a-vis customer directed human capital. Progressively restore market positioning core competencies for.",
    },
    {
      id: 3,
      img: img3,
      name: "Jibon Ahmed",
      description:
        "Phosfluorescently harness efficient alignments before enterprise collaboration and idea-sharing. Quickly initiate flexible strategic theme areas vis-a-vis customer directed human capital. Progressively restore market positioning core competencies for.",
    },
    {
      id: 4,
      img: img4,
      name: "Jabir",
      description:
        "Phosfluorescently harness efficient alignments before enterprise collaboration and idea-sharing. Quickly initiate flexible strategic theme areas vis-a-vis customer directed human capital. Progressively restore market positioning core competencies for.",
    },
    {
      id: 5,
      img: img5,
      name: "Imad",
      description:
        "Phosfluorescently harness efficient alignments before enterprise collaboration and idea-sharing. Quickly initiate flexible strategic theme areas vis-a-vis customer directed human capital. Progressively restore market positioning core competencies for.",
    },
    {
      id: 6,
      img: img6,
      name: "Kusil",
      description:
        "Phosfluorescently harness efficient alignments before enterprise collaboration and idea-sharing. Quickly initiate flexible strategic theme areas vis-a-vis customer directed human capital. Progressively restore market positioning core competencies for.",
    },
  ];
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          What Our Clients Say About Us
        </h2>
      </div>
      <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2"
          >
            <div className="flex items-center justify-center mb-10 w-12 h-12 mx-auto rounded-full bg-indigo-50">
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={review.img} alt="" />
                </div>
              </div>
            </div>
            <h6 className="mb-2 font-semibold leading-5">{review.name} said</h6>
            <p className="text-sm text-gray-900">{review.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center">
        <a
          href="/"
          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
        >
          Learn more
        </a>
      </div>
    </div>
  );
};
