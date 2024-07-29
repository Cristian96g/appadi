import { Link } from 'react-router-dom';
import imageNotFound from '../assets/images/image-not-found.png'

const ActivityCard = ({ blog }) => {
  // const { title, content, imageUrl } = blog;
  return (
    <article className="overflow-hidden flex flex-row items-center  rounded-lg border md:flex-col border-gray-50 bg-white shadow transition hover:shadow-lg">

      {blog.imageUrl ? (
        <img
          alt=""
          src={blog.imageUrl}
          className="h-56 w-1/2 md:w-full object-cover"
        />
      ) : (
        <img
          alt=""
          src={imageNotFound}
          className="h-56 md:w-full object-cover"
        />
      )}
      <div className="p-4 sm:p-6 w-1/2 md:w-full">
          <h3 className="text-lg font-medium text-gray-900">
            {blog.title}
          </h3>
        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          {blog.content}
        </p>

        <Link to={`/activities/${blog._id}`} className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-green-600">
          Leer mas
          <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
            &rarr;
          </span>
        </Link>
      </div>
    </article>
  );
};

export default ActivityCard;
