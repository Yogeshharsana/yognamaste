import C1 from "../components/images/C3.jpeg";

export function CourseCatalogue() {
  const courses = [
    {
      id: 1,
      image: C1,
    },
  ];

  return (
    <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      {/* Heading */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Course Catalogue
        </h2>

        <p className="text-gray-500 mt-2">
          Explore our complete Panchakarma & Wellness Training Programs
        </p>
      </div>

      {/* Centered Course Cards */}
      <div className="flex justify-center">
        <div className="w-full max-w-2xl">
          {courses.map((course) => (
            <div
              key={course.id}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-center p-4">
                <img
                  src={course.image}
                  alt={`Course ${course.id}`}
                  className="block max-w-full h-auto rounded-xl"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}