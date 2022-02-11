import { NextPage } from 'next';
import { FormEvent } from 'react';
import useSWR from 'swr';
import { Button } from '../components/Button';
import { Title } from '../components/Title';
import http from '../utils/http';

const fetcher = (url: string) =>
  http.get(url).then((res) => (res.data === '' ? [] : res.data.emails));

const EmailsPage: NextPage = () => {
  const { data } = useSWR('mail-list', fetcher, { fallbackData: [] });

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    const emailsTextarea = document.getElementById(
      'emails'
    ) as HTMLTextAreaElement;
    await http.post('mail-list', { emails: emailsTextarea.value.split('\n') });
  }

  return (
    <div>
      <Title>Emails</Title>
      <div className="border-b" />
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <textarea
            className="border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline dark:text-white bg-default"
            id="emails"
            placeholder="Digite os e-mails separados por linha"
            rows={10}
            defaultValue={data?.join('\n')}
          ></textarea>
        </div>
        <Button>Salvar</Button>
      </form>
    </div>
  );
};

export default EmailsPage;
