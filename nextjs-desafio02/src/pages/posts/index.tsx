import { GetServerSideProps, NextPage } from 'next';
import { Post as PostModel } from '../../utils/models';
import { Post } from '../../components/Post';

type PostProps = {
  posts: [PostModel];
};

const TweetsPage: NextPage<PostProps> = (props) => {
  const { posts } = props;
  return (
    <div>
      <div className="max-w-6xl p-2 mt-4 sm:m-auto sm:p-12">
        <div className="container pt-2 pb-6 mx-auto mt-2 border-b-4 sm:block">
          <h1 className="py-4 text-center font-medium text-brown text-3xl text-blue-600">
            List Posts
          </h1>
          <div className="flex flex-wrap justify-center px-6 my-4 md:flex-row gap-5 sm:w-auto">
            {posts.map((post, key) => (
              <Post post={post} key={key} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      posts: [
        {
          title: 'O que é Desenvolvedor full cycle?',
          created_at: 1644551054644,
          image:
            'https://blog.geekhunter.com.br/wp-content/uploads/2019/09/O-que-%C3%A9-um-desenvolvedor-Full-Cycle.jpg.webp',
          description: '...',
          tags: ['fullcycle', 'fullstack'],
        },
        {
          title: 'Construindo aplicação docker',
          created_at: 1644551054644,
          image:
            'https://blog.geekhunter.com.br/wp-content/uploads/2019/06/docker-na-pratica-como-construir-uma-aplicacao-2-1024x683.png',
          description: '...',
          tags: ['docker', 'containers', 'kubernetes'],
        },
        {
          title: 'Git, aprenda como usar na prática',
          created_at: 1644551054644,
          image:
            'https://blog-geek-midia.s3.amazonaws.com/wp-content/uploads/2020/08/06103546/comandos-git-820x344.png',
          description: '...',
          tags: ['git', 'github', 'cli'],
        },
        {
          title: 'Qual é o salário de um dev no BR?',
          created_at: 1644551054644,
          image:
            'https://blog-geek-midia.s3.amazonaws.com/wp-content/uploads/2019/11/06160148/Como-negociar-o-sal%C3%A1rio-de-um-programador.jpg',
          description: '...',
          tags: ['salário', 'dev'],
        },
      ],
    },
  };
};

export default TweetsPage;
