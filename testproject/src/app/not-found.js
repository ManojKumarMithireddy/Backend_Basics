import Link from 'next/link';
import { headers } from 'next/headers';
import './not-found.css';

export default async function NotFound() {
  const headersList = await headers();
  const domain = headersList.get('host');
  return (
    <>
      <div className='NotFound'>
        <div>
          <h2>Not Found: {domain}</h2>
          <p>Could not find requested resource</p>
          <p>
            View <Link href="/" className='Link'>Login Page</Link>
          </p>
        </div>
      </div>
    </>
  );
}
