import Image from 'next/image';
import { Post as PostModel } from '../utils/models';

import TimeAgo from 'javascript-time-ago';
import pt from 'javascript-time-ago/locale/pt-PT.json';

TimeAgo.addDefaultLocale(pt);

const timeAgo = new TimeAgo('pt-PT');

type PostProps = {
  post: PostModel;
};

export const Post: React.FunctionComponent<PostProps> = (props) => {
  const {
    post: { title, created_at, description, image, tags },
  } = props;
  return (
    <div className="product sm:max-w-sm">
      <div className="w-full h-60 relative rounded overflow-hidden">
        <Image src={image} alt="image" layout="fill" objectFit="cover" />
      </div>
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{title}</div>
        <p className="mb-4 text-base text-gray-600">{description}</p>
        <time>{timeAgo.format(created_at)}</time>
      </div>
      <button className="flex px-4 py-2 mb-3 ml-6 text-sm font-medium text-white rounded bg-red-500 hover:bg-red-600 transition-all">
        Continuar leitura...
      </button>
      <div className="flex flex-col px-6 py-4 sm:flex-row">
        {tags?.map((tag, key) => (
          <span
            key={key}
            className="hidden mr-4 rounded p-2 text-gray-700 bg-gray-100 md:block prd-tag hover:bg-gray-200 cursor-pointer transition-all"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};
