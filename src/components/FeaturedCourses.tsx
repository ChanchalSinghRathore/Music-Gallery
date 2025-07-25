'use client';
import courseData from "@/data/music_courses.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
        id: number,
        title: string,
        slug: string,
        description: string,
        price: number,
        instructor: string,
        isFeatured: boolean,
}

function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter((course:Course) => course.isFeatured)
  return (
    <div className="py-12 bg-grey-900">
        <div>
            <div className="text-center">
                <h2 className="text-3xl text-white mb-6 font-semibold uppercase tracking-wide ">Featured Courses</h2>
                <p className="text-lg text-gray-400 mb-12">Explore our top-rated music courses designed to enhance your skills and knowledge</p>
            </div>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {featuredCourses.map((course: Course) => (
                <div key={course.id} className="flex justify-center">
                  <BackgroundGradient
                        className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                                <Link href={`/courses/${course.slug}`}>
                                Learn More
                                </Link>
                            </div>
                    </BackgroundGradient>
                </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <Link href="/courses" className="inline-block bg-purple-600 text-white px-6 py-3 rounded-4xl hover:bg-blue-700 transition duration-300">
            View All Courses
          </Link>
        </div>
      
    </div>
  )
}

export default FeaturedCourses
