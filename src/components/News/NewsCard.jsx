import { Link } from "react-router";

export default function NewsCard({
  newsCategory,
  title,
  newsIntro,
  ownerName,
  ownerImage,
  ownerLocation,
  date,
  id,
}) {
  return (
    <>
      <div className="py-4 lg:py-13 bg-gray-50 dark:bg-gray-800">
        <div className="px-4 mx-auto max-w-screen-xl">
          <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1"></div>
          <div className="max-w-2xl sm:max-w-[450px] md:max-w-[450px] lg:max-w-[1300px] bg-white dark:bg-gray-900 text-black dark:text-white p-4 mx-auto shadow-xl rounded-3xl overflow-hidden mt-4">
            <div className="lg:flex lg:items-start lg:gap-6">
              {/* Image Section */}
              <div className="lg:w-1/3">
                <a href="#">
                  <img
                    src="../../../public/360_F_210545946_H8K0CJih9ToRMqbBczgr2BLWJYcrNb1V.jpg"
                    alt="tiger"
                    className="w-full sm:w-80 md:w-64 lg:w-full rounded-lg object-cover mx-auto lg:mx-0"
                  />
                </a>
              </div>

              {/* Profile & Content Section */}
              <div className="lg:w-2/3 flex flex-col justify-between">
                {/* Profile Info */}
                <div className="flex flex-col gap-2 mb-3">
                  {/* Category and Date */}
                  <div className="flex items-center gap-2 mt-3">
                    <span className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 text-xs px-2 py-1 rounded-full">
                      {newsCategory}
                    </span>
                    <span className="text-gray-500 text-sm">{date}</span>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-3">
                    <img
                      src={ownerImage}
                      alt="Avatar"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="text-sm font-semibold">{ownerName}</p>
                      <p className="text-xs text-gray-500">{ownerLocation}</p>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div>
                  <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                    <a href="#">{title}</a>
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    {newsIntro}
                  </p>
                  <Link
                    className="mt-2 font-medium text-blue-500 flex items-center text-[12px] md:text-sm underline underline-offset-1"
                    to={id}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
