import C1 from "../components/images/C1.jpeg"
import C2 from "../components/images/C2.jpeg";
import C3 from "../components/images/C3.jpeg";;
import C4 from "../components/images/C4.jpeg";;
import C5 from "../components/images/C5.jpeg";;
import C6 from "../components/images/C6.jpeg";;

export function CourseCatalogue() {
  const courses = [
    { id: 1, image: C1 },
    { id: 2, image: C2 },
    { id: 3, image: C3 },
    { id: 4, image: C4 },
    { id: 5, image: C5 },
    { id: 6, image: C6 },
  ];

  return (
    <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Course Catalogue
        </h2>
        <p className="text-gray-500 mt-2">
          Explore our complete Panchakarma & Wellness Training Programs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <img
              src={course.image}
              alt={`Course ${course.id}`}
              className="w-full h-auto block"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}