import { Link } from 'react-router-dom';

const ActivityCard = ({ blog }) => {
  const { title, content, imageUrl } = blog;
  return (
    <article className="overflow-hidden rounded-lg border border-gray-50 bg-white shadow transition hover:shadow-lg">
      {/* <img
        alt=""
        src={`../src/assets/${blog.imageUrl}`}
        className="h-56 w-full object-cover"
      /> */}
           {imageUrl ? (
        <img src={imageUrl} alt={title} />
      ) : (
        <div className="placeholder">No image available</div>
      )}
      <div className="p-4 sm:p-6">
      <Link to={`/blog/${blog._id}`}>
          <h3 className="text-lg font-medium text-gray-900">
          {blog.title}
          </h3>
        </Link>
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
