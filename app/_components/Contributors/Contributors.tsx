import { Suspense } from 'react';

import ContributorsLoading from './ContributorsLoading';
import ContributorsWithData from './ContributorsWithData';

export default async function Contributors() {
  return (
    <ul className="flex flex-wrap items-center justify-center md:justify-start">
      <Suspense fallback={<ContributorsLoading />}>
        <ContributorsWithData />
      </Suspense>
    </ul>
  );
}
